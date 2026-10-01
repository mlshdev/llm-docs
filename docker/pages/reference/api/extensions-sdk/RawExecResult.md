> Pinned source for Docker main: [content/reference/api/extensions-sdk/RawExecResult.md](https://github.com/docker/docs/blob/4d3cbcd0f78327cfc6ec5f357e3af512fcbe53f3/content/reference/api/extensions-sdk/RawExecResult.md)

# Interface: RawExecResult

**`Since`**

0.2.0

## Hierarchy

- **`RawExecResult`**

  ↳ [`ExecResult`](https://docs.docker.com/reference/api/extensions-sdk/ExecResult/)

## Properties

### cmd

• `Optional` `Readonly` **cmd**: `string`

***

### killed

• `Optional` `Readonly` **killed**: `boolean`

***

### signal

• `Optional` `Readonly` **signal**: `string`

***

### code

• `Optional` `Readonly` **code**: `number`

***

### stdout

• `Readonly` **stdout**: `string`

***

### stderr

• `Readonly` **stderr**: `string`
