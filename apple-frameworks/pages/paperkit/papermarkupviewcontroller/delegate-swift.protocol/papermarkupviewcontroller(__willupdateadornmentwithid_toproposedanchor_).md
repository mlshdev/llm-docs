> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:willupdateadornmentwithid:toproposedanchor:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:willupdateadornmentwithid:toproposedanchor:))

# paperMarkupViewController(\_:willUpdateAdornmentWithID:toProposedAnchor:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Asks the delegate to validate and potentially adjust an adornment’s proposed anchor position.

## Declaration

```swift
func paperMarkupViewController(_ paperMarkupViewController: PaperMarkupViewController, willUpdateAdornmentWithID id: UUID, toProposedAnchor proposedAnchor: MarkupAdornment.Anchor) -> MarkupAdornment.Anchor?
```

## Parameters

- `paperMarkupViewController`: The `PaperMarkupViewController` containing the adornment.
- `id`: The unique identifier of the adornment the person is moving.
- `proposedAnchor`: The proposed new anchor position for the adornment.

<a id="return-value"></a>

## Return Value

The final anchor position to use for the adornment, or `nil` to deny the move.

## Default Implementations

### PaperMarkupViewController.Delegate Implementations

- [paperMarkupViewController(\_:willUpdateAdornmentWithID:toProposedAnchor:)](papermarkupviewcontroller%28__willupdateadornmentwithid_toproposedanchor_%29-5m1yu.md): Asks the delegate to validate and potentially adjust an adornment’s proposed anchor position.

## See Also

### Responding to adornment interactions

- [paperMarkupViewController(\_:didTapAdornmentWithID:)](papermarkupviewcontroller%28__didtapadornmentwithid_%29.md): Tells the delegate when a person taps an adornment.
- [paperMarkupViewController(\_:didUpdateAdornmentWithID:toAnchor:)](papermarkupviewcontroller%28__didupdateadornmentwithid_toanchor_%29.md): Tells the delegate when a drag session ends for an adornment.
