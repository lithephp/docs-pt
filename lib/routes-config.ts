import { RouteInterface } from "@/interfaces/route";

export const ROUTES: Array<RouteInterface> = [
  {
    title: "Começando",
    href: "get-started",
    items: [
      {
        title: "Introdução",
        href: "/introduction",
      },
      {
        title: "Instalação",
        href: "/installation",
      },
    ],
  },
  {
    title: "Fundamentos",
    href: "the-basics",
    items: [
      {
        title: "Criando uma aplicação",
        href: "/creating-an-application",
      },
      {
        title: "Roteamento",
        href: "/routing",
      },
      {
        title: "Middleware",
        href: "/middleware",
      },
      {
        title: "Controllers",
        href: "/controllers",
      },
      {
        title: "Request",
        href: "/request",
      },
      {
        title: "Response",
        href: "/response",
      },
      {
        title: "Motores de template",
        href: "/template-engines",
      },
      {
        title: "Validação",
        href: "/validation",
      },
      {
        title: "Uploads de arquivos",
        href: "/file-uploads",
      },
    ],
  },
  {
    title: "Explorando a Fundo",
    href: "digging-deep",
    items: [
      {
        title: "Log",
        href: "/log",
      },
      {
        "title": "Exceções HTTP",
        "href": "/http-exceptions"
      },
    ],
  },
  {
    title: "Database",
    href: "database",
    items: [
      {
        title: "Integração",
        href: "/integration",
      },
      {
        title: "Migrações",
        href: "/migrations",
      },
      {
        title: "Modelos",
        href: "/models",
      },

    ],
  },
  {
    title: "Próximos passos",
    href: "next-steps",
    items: [
      {
        title: "Próximos Passos",
        href: "/next-steps",
      },
    ],
  },
];

export const REFERENCE_ROUTES: Array<RouteInterface> = [
  {
    title: "Lithe@1.x",
    href: "lithe",
    items: [
      {
        title: "App",
        href: "/app",
      },
      {
        title: "Line",
        href: "/line",
      },
      {
        title: "Manager",
        href: "/manager",
      },
      {
        title: "Request",
        href: "/request",
      },
      {
        title: "Response",
        href: "/response",
      },
      {
        title: "Router",
        href: "/router",
      },
    ],
  },
];


export const FLATTEND_ROUTES = flattendRoutes(ROUTES);
export const FLATTEND_REFERENCE_ROUTES = flattendRoutes(REFERENCE_ROUTES);

function flattendRoutes(routes: Array<RouteInterface>) {
  return routes.map(({ href, items }) => {
    return items.map((link) => {
      return {
        title: link.title,
        href: href + link.href,
        disabled: link.disabled,
      };
    });
  }).flat();
}
