> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:didtapadornmentwithid:)](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:didtapadornmentwithid:))

# paperMarkupViewController(\_:didTapAdornmentWithID:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Tells the delegate when a person taps an adornment.

## Declaration

```swift
func paperMarkupViewController(_ paperMarkupViewController: PaperMarkupViewController, didTapAdornmentWithID id: UUID)
```

## Parameters

- `paperMarkupViewController`: The `PaperMarkupViewController` containing the adornment.
- `id`: The ID of the adornment the person tapped.

## Default Implementations

### PaperMarkupViewController.Delegate Implementations

- [paperMarkupViewController(\_:didTapAdornmentWithID:)](papermarkupviewcontroller%28__didtapadornmentwithid_%29-1hw54.md): Tells the delegate when a person taps an adornment.

## See Also

### Responding to adornment interactions

- [paperMarkupViewController(\_:willUpdateAdornmentWithID:toProposedAnchor:)](papermarkupviewcontroller%28__willupdateadornmentwithid_toproposedanchor_%29.md): Asks the delegate to validate and potentially adjust an adornment’s proposed anchor position.
- [paperMarkupViewController(\_:didUpdateAdornmentWithID:toAnchor:)](papermarkupviewcontroller%28__didupdateadornmentwithid_toanchor_%29.md): Tells the delegate when a drag session ends for an adornment.
