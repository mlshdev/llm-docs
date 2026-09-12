> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:didupdateadornmentwithid:toanchor:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:didupdateadornmentwithid:toanchor:))

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

## Default Implementations

### PaperMarkupViewController.Delegate Implementations

- [paperMarkupViewController(\_:didUpdateAdornmentWithID:toAnchor:)](papermarkupviewcontroller%28__didupdateadornmentwithid_toanchor_%29-3wm3l.md): Tells the delegate when a drag session ends for an adornment.

## See Also

### Responding to adornment interactions

- [paperMarkupViewController(\_:didTapAdornmentWithID:)](papermarkupviewcontroller%28__didtapadornmentwithid_%29.md): Tells the delegate when a person taps an adornment.
- [paperMarkupViewController(\_:willUpdateAdornmentWithID:toProposedAnchor:)](papermarkupviewcontroller%28__willupdateadornmentwithid_toproposedanchor_%29.md): Asks the delegate to validate and potentially adjust an adornment’s proposed anchor position.
