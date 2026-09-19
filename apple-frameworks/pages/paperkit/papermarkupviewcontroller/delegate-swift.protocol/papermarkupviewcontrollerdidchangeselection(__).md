> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontrollerdidchangeselection(_:)

# paperMarkupViewControllerDidChangeSelection(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Tells the delegate when the selection changes.

## Declaration

```swift
func paperMarkupViewControllerDidChangeSelection(_ paperMarkupViewController: PaperMarkupViewController)
```

## Parameters

- `paperMarkupViewController`: The `PaperMarkupViewController` containing the markup.

## Default Implementations

### PaperMarkupViewController.Delegate Implementations

- [paperMarkupViewControllerDidChangeSelection(\_:)](papermarkupviewcontrollerdidchangeselection%28__%29-3hwi.md): Tells the delegate when the selection changes.

## See Also

### Responding to markup changes

- [paperMarkupViewControllerDidChangeMarkup(\_:)](papermarkupviewcontrollerdidchangemarkup%28__%29.md): Tells the delegate when the markup changes.
- [paperMarkupViewControllerDidBeginDrawing(\_:)](papermarkupviewcontrollerdidbegindrawing%28__%29.md): Tells the delegate when a person begins drawing.
- [paperMarkupViewControllerDidChangeContentVisibleFrame(\_:)](papermarkupviewcontrollerdidchangecontentvisibleframe%28__%29.md): Tells the delegate when a person scrolls or zooms the content.
