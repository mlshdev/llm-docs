> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/ExecResult.md](https://github.com/docker/docs/blob/c596433b17b6e062376dcd24395336f316e1714a/content/reference/api/extensions-sdk/ExecResult.md)

# Interface: ExecResult

**`Since`**

0.2.0

## Hierarchy

- [`RawExecResult`](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/)

  ↳ **`ExecResult`**

## Methods

### lines

▸ **lines**(): `string`\[]

Split output lines.

#### Returns

`string`\[]

The list of lines.

***

### parseJsonLines

▸ **parseJsonLines**(): `any`\[]

Parse each output line as a JSON object.

#### Returns

`any`\[]

The list of lines where each line is a JSON object.

***

### parseJsonObject

▸ **parseJsonObject**(): `any`

Parse a well-formed JSON output.

#### Returns

`any`

The JSON object.

## Properties

### cmd

• `Optional` `Readonly` **cmd**: `string`

#### Inherited from

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[cmd](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#cmd)

***

### killed

• `Optional` `Readonly` **killed**: `boolean`

#### Inherited from

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[killed](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#killed)

***

### signal

• `Optional` `Readonly` **signal**: `string`

#### Inherited from

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[signal](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#signal)

***

### code

• `Optional` `Readonly` **code**: `number`

#### Inherited from

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[code](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#code)

***

### stdout

• `Readonly` **stdout**: `string`

#### Inherited from

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[stdout](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#stdout)

***

### stderr

• `Readonly` **stderr**: `string`

#### Inherited from

[RawExecResult](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/).[stderr](https://docs.docker.com/reference/api/extensions-sdk/RawExecResult/#stderr)
