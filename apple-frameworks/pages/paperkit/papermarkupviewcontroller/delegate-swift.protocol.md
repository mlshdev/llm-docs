> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol)

# PaperMarkupViewController.Delegate

**Framework:** PaperKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The interface for responding to interactions in a markup view controller.

## Declaration

```swift
protocol Delegate : AnyObject
```

## Topics

### Responding to markup changes

- [paperMarkupViewControllerDidChangeMarkup(\_:)](delegate-swift.protocol/papermarkupviewcontrollerdidchangemarkup%28__%29.md): Tells the delegate when the markup changes.
- [paperMarkupViewControllerDidChangeSelection(\_:)](delegate-swift.protocol/papermarkupviewcontrollerdidchangeselection%28__%29.md): Tells the delegate when the selection changes.
- [paperMarkupViewControllerDidBeginDrawing(\_:)](delegate-swift.protocol/papermarkupviewcontrollerdidbegindrawing%28__%29.md): Tells the delegate when a person begins drawing.
- [paperMarkupViewControllerDidChangeContentVisibleFrame(\_:)](delegate-swift.protocol/papermarkupviewcontrollerdidchangecontentvisibleframe%28__%29.md): Tells the delegate when a person scrolls or zooms the content.

### Responding to adornment interactions

- [paperMarkupViewController(\_:didTapAdornmentWithID:)](delegate-swift.protocol/papermarkupviewcontroller%28__didtapadornmentwithid_%29.md): Tells the delegate when a person taps an adornment.
- [paperMarkupViewController(\_:willUpdateAdornmentWithID:toProposedAnchor:)](delegate-swift.protocol/papermarkupviewcontroller%28__willupdateadornmentwithid_toproposedanchor_%29.md): Asks the delegate to validate and potentially adjust an adornment’s proposed anchor position.
- [paperMarkupViewController(\_:didUpdateAdornmentWithID:toAnchor:)](delegate-swift.protocol/papermarkupviewcontroller%28__didupdateadornmentwithid_toanchor_%29.md): Tells the delegate when a drag session ends for an adornment.

## See Also

### Responding to changes

- [delegate](delegate-swift.property.md): The delegate for responding to a person’s actions.
- [undoManager](undomanager.md)
