> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/contextmenuinteraction](https://developer.apple.com/documentation/browserenginekit/betextinteraction/contextmenuinteraction)

# contextMenuInteraction (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS 1.1+

An interaction you use to work with the text view’s context menu.

## Declaration

```swift
var contextMenuInteraction: UIContextMenuInteraction { get }
```

<a id="discussion"></a>

## Discussion

Set the context menu interaction’s [delegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/delegate) by supplying a value for [contextMenuInteractionDelegate](contextmenuinteractiondelegate.md).

## See Also

### Menus

- [presentEditMenuForSelection()](presenteditmenuforselection%28%29.md): Presents an edit menu for the current text selection.
- [dismissEditMenuForSelection()](dismisseditmenuforselection%28%29.md): Dismisses the edit menu for the current text selection.
- [contextMenuInteractionDelegate](contextmenuinteractiondelegate.md): The delegate for the context menu interaction associated with this text interaction.

# contextMenuInteraction (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS 1.1+

An interaction you use to work with the text view’s context menu.

## Declaration

```objectivec
@property (nonatomic, readonly) UIContextMenuInteraction * contextMenuInteraction;
```

<a id="discussion"></a>

## Discussion

Set the context menu interaction’s [delegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteraction/delegate) by supplying a value for [contextMenuInteractionDelegate](contextmenuinteractiondelegate.md).

## See Also

### Menus

- [presentEditMenuForSelection](presenteditmenuforselection%28%29.md): Presents an edit menu for the current text selection.
- [dismissEditMenuForSelection](dismisseditmenuforselection%28%29.md): Dismisses the edit menu for the current text selection.
- [contextMenuInteractionDelegate](contextmenuinteractiondelegate.md): The delegate for the context menu interaction associated with this text interaction.
