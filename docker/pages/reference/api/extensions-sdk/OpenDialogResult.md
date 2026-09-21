> Pinned source for Docker main: [content/reference/api/extensions-sdk/OpenDialogResult.md](https://github.com/docker/docs/blob/71fa06427156ab4e87b88cdc9983d2efea8b7519/content/reference/api/extensions-sdk/OpenDialogResult.md)

# Interface: OpenDialogResult

**`Since`**

0.2.3

## Properties

### canceled

• `Readonly` **canceled**: `boolean`

Whether the dialog was canceled.

***

### filePaths

• `Readonly` **filePaths**: `string`\[]

An array of file paths chosen by the user. If the dialog is cancelled this will be an empty array.

***

### bookmarks

• `Optional` `Readonly` **bookmarks**: `string`\[]

macOS only. An array matching the `filePaths` array of `base64` encoded strings which contains security scoped bookmark data. `securityScopedBookmarks` must be enabled for this to be populated.
