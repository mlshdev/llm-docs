> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/Exec.md](https://github.com/docker/docs/blob/fd5e73c9183cc2e1600a747a52aaf3d8ea0ce3b5/content/reference/api/extensions-sdk/Exec.md)

# Interface: Exec

## Callable

### Exec

▸ **Exec**(`cmd`, `args`, `options?`): `Promise`<[`ExecResult`](https://docs.docker.com/reference/api/extensions-sdk/ExecResult/)>

Executes a command.

**`Since`**

0.2.0

#### Parameters

| Name       | Type                                                                               | Description                              |
| :--------- | :--------------------------------------------------------------------------------- | :--------------------------------------- |
| `cmd`      | `string`                                                                           | The command to execute.                  |
| `args`     | `string`\[]                                                                        | The arguments of the command to execute. |
| `options?` | [`ExecOptions`](https://docs.docker.com/reference/api/extensions-sdk/ExecOptions/) | The list of options.                     |

#### Returns

`Promise`<[`ExecResult`](https://docs.docker.com/reference/api/extensions-sdk/ExecResult/)>

A promise that will resolve once the command finishes.

### Exec

▸ **Exec**(`cmd`, `args`, `options`): [`ExecProcess`](https://docs.docker.com/reference/api/extensions-sdk/ExecProcess/)

Streams the result of a command if `stream` is specified in the `options` parameter.

Specify the `stream` if the output of your command is too long or if you need to stream things indefinitely (for example container logs).

**`Since`**

0.2.2

#### Parameters

| Name      | Type                                                                                 | Description                              |
| :-------- | :----------------------------------------------------------------------------------- | :--------------------------------------- |
| `cmd`     | `string`                                                                             | The command to execute.                  |
| `args`    | `string`\[]                                                                          | The arguments of the command to execute. |
| `options` | [`SpawnOptions`](https://docs.docker.com/reference/api/extensions-sdk/SpawnOptions/) | The list of options.                     |

#### Returns

[`ExecProcess`](https://docs.docker.com/reference/api/extensions-sdk/ExecProcess/)

The spawned process.
