> Pinned source for Docker main: [content/reference/api/extensions-sdk/Dialog.md](https://github.com/docker/docs/blob/7d6c8bf81ab88fc6f5c4893b6259864d29de574c/content/reference/api/extensions-sdk/Dialog.md)

# Interface: Dialog

Allows opening native dialog boxes.

**`Since`**

0.2.3

## Methods

### showOpenDialog

▸ **showOpenDialog**(`dialogProperties`): `Promise`<[`OpenDialogResult`](https://docs.docker.com/reference/api/extensions-sdk/OpenDialogResult/)>

Display a native open dialog. Lets you select a file or a folder.

```typescript
ddClient.desktopUI.dialog.showOpenDialog({properties: ['openFile']});
```

#### Parameters

| Name               | Type  | Description                                                                                                                                         |
| :----------------- | :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dialogProperties` | `any` | Properties to specify the open dialog behaviour, see <https://www.electronjs.org/docs/latest/api/dialog#dialogshowopendialogbrowserwindow-options>. |

#### Returns

`Promise`<[`OpenDialogResult`](https://docs.docker.com/reference/api/extensions-sdk/OpenDialogResult/)>
