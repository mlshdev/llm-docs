> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontrollerdidchangecontentvisibleframe(_:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontrollerdidchangecontentvisibleframe(_:))

# paperMarkupViewControllerDidChangeContentVisibleFrame(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Tells the delegate when a person scrolls or zooms the content.

## Declaration

```swift
func paperMarkupViewControllerDidChangeContentVisibleFrame(_ paperMarkupViewController: PaperMarkupViewController)
```

## Parameters

- `paperMarkupViewController`: The `PaperMarkupViewController` the person is interacting with.

## Default Implementations

### PaperMarkupViewController.Delegate Implementations

- [paperMarkupViewControllerDidChangeContentVisibleFrame(\_:)](papermarkupviewcontrollerdidchangecontentvisibleframe%28__%29-5k7zk.md): Tells the delegate when a person scrolls or zooms the content.

## See Also

### Responding to markup changes

- [paperMarkupViewControllerDidChangeMarkup(\_:)](papermarkupviewcontrollerdidchangemarkup%28__%29.md): Tells the delegate when the markup changes.
- [paperMarkupViewControllerDidChangeSelection(\_:)](papermarkupviewcontrollerdidchangeselection%28__%29.md): Tells the delegate when the selection changes.
- [paperMarkupViewControllerDidBeginDrawing(\_:)](papermarkupviewcontrollerdidbegindrawing%28__%29.md): Tells the delegate when a person begins drawing.
