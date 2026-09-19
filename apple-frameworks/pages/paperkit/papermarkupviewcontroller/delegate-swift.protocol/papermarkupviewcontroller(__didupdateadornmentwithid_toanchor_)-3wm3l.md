> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:didupdateadornmentwithid:toanchor:)-3wm3l

# paperMarkupViewController(\_:didUpdateAdornmentWithID:toAnchor:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Tells the delegate when a drag session ends for an adornment.

## Declaration

```swift
func paperMarkupViewController(_ paperMarkupViewController: PaperMarkupViewController, didUpdateAdornmentWithID id: UUID, toAnchor anchor: MarkupAdornment.Anchor)
```

## Parameters

- `paperMarkupViewController`: The `PaperMarkupViewController` containing the adornment.
- `id`: The ID of the adornment that moved.
- `anchor`: The updated anchor for the adornment.
