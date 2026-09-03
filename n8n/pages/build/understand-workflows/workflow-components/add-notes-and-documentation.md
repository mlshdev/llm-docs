> Commit-pinned source for n8n main: [docs/build/understand-workflows/workflow-components/add-notes-and-documentation.md](https://github.com/n8n-io/n8n-docs/blob/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/understand-workflows/workflow-components/add-notes-and-documentation.md)

# Add notes and documentation

Sticky notes let you annotate and comment on your workflows.

n8n recommends using sticky notes on template workflows[^1] to help other users understand your workflow.

![A basic workflow with a sticky note attached](https://raw.githubusercontent.com/n8n-io/n8n-docs/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/.gitbook/assets/example-sticky-note.png)

## Create a sticky note <a id="create-a-sticky-note"></a>

Sticky notes are a core node. To add a new sticky note:

1. Open the nodes panel.
2. Search for `note`.
3. Click the **Sticky Note** node. n8n adds a new sticky note to the canvas.

## Edit a sticky note <a id="edit-a-sticky-note"></a>

1. Double-click the sticky note you want to edit.
2. Write your note. [This guide](https://commonmark.org/help/) explains how to format your text with Markdown. n8n uses [markdown-it](https://github.com/markdown-it/markdown-it), which implements the CommonMark specification.
3. Click away from the note, or press `Esc`, to stop editing.

## Change the color <a id="change-the-color"></a>

To change the sticky note color:

1. Hover over the sticky note.
2. Select **Change color** ![Change Sticky Note color icon](https://raw.githubusercontent.com/n8n-io/n8n-docs/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/.gitbook/assets/change-color.png).
3. Choose from seven preset colors, or click the rainbow gradient button to select a custom color.

![Color selector showing preset colors and custom color button](https://raw.githubusercontent.com/n8n-io/n8n-docs/191a04ec05b8df3fe1fb96f54726ed40db2518f7/docs/build/.gitbook/assets/color-picker-popover.png)

### Custom colors <a id="custom-colors"></a>

Besides the seven preset colors, you can select any custom color for your sticky notes:

1. Click the button with the rainbow gradient and plus icon.
2. Use the color picker to select your desired color, or enter a hex color code (for example, `#FF5733`).
3. Click **Apply** to set the color.

n8n automatically saves your last-used custom colors (up to eight) and displays them in the color picker for quick access.

Custom colors feature theme-aware borders that automatically adjust for optimal visibility in both light and dark modes.

## Sticky note positioning <a id="sticky-note-positioning"></a>

You can:

- Drag a sticky note anywhere on the canvas.
- Drag sticky notes behind nodes. You can use this to visually group nodes.
- Resize sticky notes by hovering over the edge of the note and dragging to resize.
- Change the color: select the **Options** menu !\[Options icon]\(../../.gitbook/assets/three-dot-options-menu (1).png) to open the color selector.

## Writing in Markdown <a id="writing-in-markdown"></a>

Sticky Notes support Markdown formatting. This section describes some common options.

```
The text in double asterisks will be **bold**

The text in single asterisks will be *italic*

Use # to indicate headings:
# This is a top-level heading <a id="this-is-a-top-level-heading"></a>
## This is a sub-heading <a id="this-is-a-sub-heading"></a>
### This is a smaller sub-heading <a id="this-is-a-smaller-sub-heading"></a>

You can add links:
[Example](https://example.com/)

Create lists with asterisks:

* Item one
* Item two

Or created ordered lists with numbers:

1. Item one
2. Item two
```

For a more detailed guide, refer to [CommonMark's help](https://commonmark.org/help/). n8n uses [markdown-it](https://github.com/markdown-it/markdown-it), which implements the CommonMark specification.

## Make images full width <a id="make-images-full-width"></a>

You can force images to be 100% width of the sticky note by appending `#full-width` to the filename:

```markdown
![Source example](https://<IMAGE-URL>/<IMAGE-NAME>.png#full-width)
```

## Embed a YouTube video <a id="embed-a-youtube-video"></a>

To display a YouTube video in a note, use the `@[youtube](<video-id>)` directive with the video's ID. For this to work, the video's creator must allow embedding.

For example:

```markdown
@[youtube](ZCuL2e4zC_4)
```

To embed your own video, copy the above syntax, replacing `ZCuL2e4zC_4` with your video ID. The YouTube video ID is the string that follows `v=` in the YouTube URL.

See [Workflow components](https://docs.n8n.io/build/understand-workflows/workflow-components) for other elements you can add to a workflow.

[^1]: n8n templates are pre-built workflows designed by n8n and community members that you can import into your n8n instance. When using templates, you may need to fill in credentials and adjust the configuration to suit your needs.
