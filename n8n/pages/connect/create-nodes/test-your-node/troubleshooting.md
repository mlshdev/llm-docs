> Commit-pinned source for n8n main: [docs/connect/create-nodes/test-your-node/troubleshooting.md](https://github.com/n8n-io/n8n-docs/blob/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/connect/create-nodes/test-your-node/troubleshooting.md)

# Troubleshooting <a id="troubleshooting"></a>

## Credentials <a id="credentials"></a>

### Error message: 'Credentials of type "\*" aren't known' <a id="error-message-credentials-of-type-arent-known"></a>

Check that the name in the credentials array matches the name used in the property name of the credentials' class. For example, this credential class sets `name` to `friendGridApi`:

```typescript
export class FriendGridApi implements ICredentialType {
    name = 'friendGridApi';
    displayName = 'FriendGrid API';
    documentationUrl = 'friendGrid';
    properties = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string' as NodePropertyTypes,
            default: '',
        },
    ];
}
```

The node's `credentials` array must reference that same `name` value:

```typescript
credentials: [
    {
        name: 'friendGridApi',
        required: true,
    },
],
```

![Code examples with arrows linking the credential class's name property to the matching name field in the node's credentials array](https://raw.githubusercontent.com/n8n-io/n8n-docs/3317373ce39c3ce2406c8e3d99bb2da7f7180321/docs/connect/.gitbook/assets/troubleshooting-credentials-1.png)

## Editor UI <a id="editor-ui"></a>

### Error message: 'There was a problem loading init data: API-Server can not be reached. It's probably down' <a id="error-message-there-was-a-problem-loading-init-data-api-server-can-not-be-reached-its-probably-down"></a>

- Check that the names of the node file, node folder, and class match the path added to `packages/nodes-base/package.json`.
- Check that the names used in the `displayOptions` property are names used by UI elements in the node.

### Node icon doesn't show up in the Add Node menu and the Editor UI <a id="node-icon-doesnt-show-up-in-the-add-node-menu-and-the-editor-ui"></a>

- Check that the icon is in the same folder as the node.
- Check that it's either in PNG or SVG format.
- When the `icon` property references the icon file, check that it includes the logo extension (`.png` or `.svg`) and that it prefixes it with `file:`. For example, `file:friendGrid.png` or `file:friendGrid.svg`.

### Node icon doesn't fit <a id="node-icon-doesnt-fit"></a>

- If you use an SVG file, make sure the canvas size is square. You can find instructions to change the canvas size of an SVG file using GIMP [here](https://docs.gimp.org/2.10/en/gimp-image-resize.html).
- If you use a PNG file, make sure that it's 60x60 pixels.

### Node doesn't show up in the Add Node menu <a id="node-doesnt-show-up-in-the-add-node-menu"></a>

Check that you registered the node in the `package.json` file in your project.

### Changes to the description properties don't show in the UI on refreshing <a id="changes-to-the-description-properties-dont-show-in-the-ui-on-refreshing"></a>

Every time you change the description properties, you have to stop the current n8n process (`ctrl` + `c`) and run it again. You may also need to re-run `npm link`.

### Linter incorrectly warning about file name case <a id="linter-incorrectly-warning-about-file-name-case"></a>

The node linter has rules for file names, including what case they should be. Windows users may encounter an issue when renaming files that causes the linter to continue giving warnings, even after you rename the files. This is due to a [known Windows issue](https://answers.microsoft.com/en-us/windows/forum/all/file-renaming-when-changing-case-doesnt-work/aa15ff7c-dd2d-4ed3-bcce-799ca90d4e58) with changing case when renaming files.
