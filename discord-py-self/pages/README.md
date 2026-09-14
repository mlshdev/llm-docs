> Pinned source for discord.py-self v2.1.0: [README.rst](https://github.com/dolfies/discord.py-self/blob/6de18b4cb40dd42625a535f52d9715c71399ffb3/README.rst)

# discord.py-self

![Telegram chat](https://img.shields.io/endpoint?color=neon\&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2Fdpy_self)

![PyPI version info](https://img.shields.io/pypi/v/discord.py-self.svg)

![PyPI supported Python versions](https://img.shields.io/pypi/pyversions/discord.py.svg)

![PyPI downloads per month](https://img.shields.io/pypi/dm/discord.py-self.svg)

A modern, easy-to-use, feature-rich, and async-ready API wrapper for Discord's user API written in Python.

\| **Note:**
\| Automating user accounts is against the Discord ToS. This library is a proof of concept and I cannot recommend using it. Do so at your own risk.
|

\| **Credits:**

- [Rapptz](https://github.com/Rapptz) for the original library this fork is based on. Without it, the project would not exist.
- [arandomnewaccount](https://www.reddit.com/user/obviouslymymain123/) for help when the project was first started.

## Key Features

- Modern Pythonic API using `async` and `await`.
- Proper rate limit handling.
- Optimised in both speed and memory.
- Mostly compatible with the upstream `discord.py`.
- Prevents user account automation detection.
- Implements vast amounts of the user account-specific API. For a non-exhaustive list:

  - Sessions
  - Read states
  - Connections
  - Relationships
  - Experiments
  - Protobuf user settings
  - Application/team management
  - Store/SKUs/entitlements
  - Billing (e.g. subscriptions, payments, boosts, promotions, etc.)
  - Interactions (slash commands, buttons, etc.)

## Installing

**Python 3.10 or higher is required.**

To install the library without full voice support, you can just run the following command:

> **Note**
> A [Virtual Environment](https://docs.python.org/3/library/venv.html) is recommended to install
> the library, especially on Linux where the system Python is externally managed and restricts which
> packages you can install on it.

```sh
# Linux/macOS
python3 -m pip install -U discord.py-self

# Windows
py -3 -m pip install -U discord.py-self
```

Otherwise to get voice support you should run the following command:

```sh
# Linux/macOS
python3 -m pip install -U "discord.py-self[voice]"

# Windows
py -3 -m pip install -U discord.py-self[voice]
```

To install the development version, do the following:

```sh
$ git clone https://github.com/dolfies/discord.py-self
$ cd discord.py-self
$ python3 -m pip install -U .[voice]
```

### Optional Packages

- [PyNaCl](https://pypi.org/project/PyNaCl/) (for voice support)

Please note that on Linux installing voice you must install the following packages via your favourite package manager (e.g. `apt`, `dnf`, etc) before running the above commands:

- libffi-dev (or `libffi-devel` on some systems)
- python-dev (e.g. `python3.6-dev` for Python 3.6)

### Using with Upstream

If you would like to use the library alongside upstream `discord.py`, you can install `selfcord.py` instead of `discord.py-self`. Check out the [renamed branch](https://github.com/dolfies/discord.py-self/blob/renamed/README.rst) for more information.

## Quick Example

```py
import discord

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # only respond to ourselves
        if message.author != self.user:
            return

        if message.content == 'ping':
            await message.channel.send('pong')

client = MyClient()
client.run('token')
```

### Bot Example

```py
import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='>', self_bot=True)

@bot.command()
async def ping(ctx):
    await ctx.send('pong')

bot.run('token')
```

You can find more examples in the examples directory.

## Links

- [Documentation](https://discordpy-self.readthedocs.io/en/latest/index.html)
- [Project updates](https://t.me/dpy_self)
- [Discussion & support](https://t.me/dpy_self_discussions)
