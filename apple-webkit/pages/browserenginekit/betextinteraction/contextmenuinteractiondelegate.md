> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/contextmenuinteractiondelegate](https://developer.apple.com/documentation/browserenginekit/betextinteraction/contextmenuinteractiondelegate)

# contextMenuInteractionDelegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS 1.1+

The delegate for the context menu interaction associated with this text interaction.

## Declaration

```swift
weak var contextMenuInteractionDelegate: (any UIContextMenuInteractionDelegate)? { get set }
```

<a id="discussion"></a>

## Discussion

Set this object to receive delegate callbacks from the [contextMenuInteraction](contextmenuinteraction.md).

## See Also

### Menus

- [presentEditMenuForSelection()](presenteditmenuforselection%28%29.md): Presents an edit menu for the current text selection.
- [dismissEditMenuForSelection()](dismisseditmenuforselection%28%29.md): Dismisses the edit menu for the current text selection.
- [contextMenuInteraction](contextmenuinteraction.md): An interaction you use to work with the text view’s context menu.

# contextMenuInteractionDelegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · visionOS 1.1+

The delegate for the context menu interaction associated with this text interaction.

## Declaration

```objectivec
@property (nonatomic, weak) id<UIContextMenuInteractionDelegate> contextMenuInteractionDelegate;
```

<a id="discussion"></a>

## Discussion

Set this object to receive delegate callbacks from the [contextMenuInteraction](contextmenuinteraction.md).

## See Also

### Menus

- [presentEditMenuForSelection](presenteditmenuforselection%28%29.md): Presents an edit menu for the current text selection.
- [dismissEditMenuForSelection](dismisseditmenuforselection%28%29.md): Dismisses the edit menu for the current text selection.
- [contextMenuInteraction](contextmenuinteraction.md): An interaction you use to work with the text view’s context menu.
