> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontrollerdidchangemarkup(_:)

# paperMarkupViewControllerDidChangeMarkup(\_:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Tells the delegate when the markup changes.

## Declaration

```swift
func paperMarkupViewControllerDidChangeMarkup(_ paperMarkupViewController: PaperMarkupViewController)
```

## Parameters

- `paperMarkupViewController`: The `PaperMarkupViewController` containing the markup.

## Default Implementations

### PaperMarkupViewController.Delegate Implementations

- [paperMarkupViewControllerDidChangeMarkup(\_:)](papermarkupviewcontrollerdidchangemarkup%28__%29-8rzia.md): Tells the delegate when the markup changes.

## See Also

### Responding to markup changes

- [paperMarkupViewControllerDidChangeSelection(\_:)](papermarkupviewcontrollerdidchangeselection%28__%29.md): Tells the delegate when the selection changes.
- [paperMarkupViewControllerDidBeginDrawing(\_:)](papermarkupviewcontrollerdidbegindrawing%28__%29.md): Tells the delegate when a person begins drawing.
- [paperMarkupViewControllerDidChangeContentVisibleFrame(\_:)](papermarkupviewcontrollerdidchangecontentvisibleframe%28__%29.md): Tells the delegate when a person scrolls or zooms the content.
