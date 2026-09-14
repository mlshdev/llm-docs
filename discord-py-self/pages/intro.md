> Pinned source for discord.py-self v2.1.0: [docs/intro.rst](https://github.com/dolfies/discord.py-self/blob/6de18b4cb40dd42625a535f52d9715c71399ffb3/docs/intro.rst)

- **Orphan:**

<a id="intro"></a>

# Introduction

This is the documentation for discord.py-self, a library for Python to aid
in creating bots running on user accounts that utilise the Discord API.

## Prerequisites

discord.py-self works with Python 3.10 or higher. Support for earlier versions of Python
is not provided.

<a id="installing"></a>

## Installing

You can get the library directly from PyPI: :

```python
python3 -m pip install -U discord.py-self
```

If you are using Windows, then the following should be used instead: :

```python
py -3 -m pip install -U discord.py-self
```

To get voice support, you should use `discord.py-self[voice]` instead of `discord.py`, e.g. :

```python
python3 -m pip install -U discord.py-self[voice]
```

On Linux environments, installing voice requires getting the following dependencies:

- [libffi](https://github.com/libffi/libffi)
- [libnacl](https://github.com/saltstack/libnacl)
- [python3-dev](https://packages.debian.org/python3-dev)

For a Debian-based system, the following command will get these dependencies:

```shell
$ apt install libffi-dev libnacl-dev python3-dev
```

Remember to check your permissions!

### Virtual Environments

Sometimes you want to keep libraries from polluting system installs or use a different version of
libraries than the ones installed on the system. You might also not have permissions to install libraries system-wide.
For this purpose, the standard library as of Python 3.3 comes with a concept called "Virtual Environment"s to
help maintain these separate versions.

A more in-depth tutorial is found on [py:tutorial/venv](https://docs.python.org/3/tutorial/venv.html).

However, for the quick and dirty:

1. Go to your project's working directory:

```shell
$ cd your-bot-source
$ python3 -m venv bot-env
```

2. Activate the virtual environment:

```shell
$ source bot-env/bin/activate
```

```
On Windows you activate it with:
```

```shell
$ bot-env\Scripts\activate.bat
```

3. Use pip like usual:

```shell
$ pip install -U discord.py-self
```

Congratulations. You now have a virtual environment all set up.

## Basic Concepts

discord.py revolves around the concept of [events](https://discordpy-self.readthedocs.io/api.html#discord-api-events).
An event is something you listen to and then respond to. For example, when a message
happens, you will receive an event about it that you can respond to.

A quick example to showcase how events work:

```python3
import discord

class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged on as {self.user}!')

    async def on_message(self, message):
        print(f'Message from {message.author}: {message.content}')

client = MyClient()
client.run('token')
```
