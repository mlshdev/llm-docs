import { describe, expect, test } from "bun:test";
import {
  convertDiscordRst,
  extractPythonSymbols,
  indexPythonSymbols,
} from "./discord-py.ts";

const projectContext = (python: string) => ({
  sourcePath: "docs/api.rst",
  homepage: "https://discordpy.readthedocs.io/",
  repository: "Rapptz/discord.py",
  ref: "0123456789abcdef0123456789abcdef01234567",
  files: new Set<string>(),
  labels: new Map<string, { sourcePath: string; anchor: string }>(),
  symbols: indexPythonSymbols(extractPythonSymbols(python, "discord.client")),
  currentModule: "discord",
});

describe("discord.py static autodoc", () => {
  test("extracts multiline definitions and their docstrings without executing Python", () => {
    const symbols = extractPythonSymbols(
      `class Client(BaseClient):
    """A Discord client.

    .. versionadded:: 2.0
    """

    async def fetch_user(
        self,
        user_id: int,
    ) -> User:
        """Fetches a user.

        :param user_id: The user ID.
        """
        raise NotImplementedError
`,
      "discord.client",
    );
    expect(symbols).toHaveLength(1);
    expect(symbols[0]?.qualifiedName).toBe("discord.client.Client");
    expect(symbols[0]?.children[0]?.name).toBe("fetch_user");
    expect(symbols[0]?.children[0]?.docstring).toContain("Fetches a user");
  });

  test("expands autodoc members, roles, versions, and admonitions", () => {
    const body = convertDiscordRst(
      `.. currentmodule:: discord

Client
======

.. autoclass:: Client
    :members:

See :class:\`Client\` and :issue:\`42\`.
`,
      projectContext(`class Client:
    """Connects to Discord.

    .. note::

        Configure intents first.
    """

    async def start(self, token: str) -> None:
        """Starts the client.

        .. versionadded:: 2.0
        """
`),
    );
    expect(body).toContain("#### `Client`");
    expect(body).toContain("##### `start(self, token: str) -> None`");
    expect(body).toContain("> **Note**");
    expect(body).toContain("> **Added in version 2.0**");
    expect(body).toContain("Configure intents first.");
    expect(body).toContain(
      "[GH-42](https://github.com/Rapptz/discord.py/issues/42)",
    );
    expect(body).not.toContain(".. autoclass::");
  });

  test("resolves local and intersphinx documentation targets", () => {
    const body = convertDiscordRst(
      `See :doc:\`the tutorial <py:tutorial/venv>\`,
:doc:\`aiohttp <aio:index>\`, :doc:\`Requests <req:index>\`, and
\`coroutines <py:library/asyncio-task.html>\`_.

Continue with :doc:\`./ext/commands/index\`.
`,
      projectContext(""),
    );
    expect(body).toContain(
      "[the tutorial](https://docs.python.org/3/tutorial/venv.html)",
    );
    expect(body).toContain("[aiohttp](https://docs.aiohttp.org/en/stable/)");
    expect(body).toContain(
      "[Requests](https://requests.readthedocs.io/en/latest/)",
    );
    expect(body).toContain(
      "[coroutines](https://docs.python.org/3/library/asyncio-task.html)",
    );
    expect(body).toContain(
      "[./ext/commands/index](https://discordpy.readthedocs.io/ext/commands/index.html)",
    );
    expect(body).not.toContain("$1index");
  });
});
