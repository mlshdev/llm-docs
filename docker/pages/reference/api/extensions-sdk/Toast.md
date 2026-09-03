> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/Toast.md](https://github.com/docker/docs/blob/88c23a1ca40fdf176064bef4dbb7b2495debebb3/content/reference/api/extensions-sdk/Toast.md)

# Interface: Toast

Toasts provide a brief notification to the user.
They appear temporarily and shouldn't interrupt the user experience.
They also don't require user input to disappear.

**`Since`**

0.2.0

## Methods

### success

▸ **success**(`msg`): `void`

Display a toast message of type success.

```typescript
ddClient.desktopUI.toast.success("message");
```

#### Parameters

| Name  | Type     | Description                          |
| :---- | :------- | :----------------------------------- |
| `msg` | `string` | The message to display in the toast. |

#### Returns

`void`

***

### warning

▸ **warning**(`msg`): `void`

Display a toast message of type warning.

```typescript
ddClient.desktopUI.toast.warning("message");
```

#### Parameters

| Name  | Type     | Description                            |
| :---- | :------- | :------------------------------------- |
| `msg` | `string` | The message to display in the warning. |

#### Returns

`void`

***

### error

▸ **error**(`msg`): `void`

Display a toast message of type error.

```typescript
ddClient.desktopUI.toast.error("message");
```

#### Parameters

| Name  | Type     | Description                          |
| :---- | :------- | :----------------------------------- |
| `msg` | `string` | The message to display in the toast. |

#### Returns

`void`
