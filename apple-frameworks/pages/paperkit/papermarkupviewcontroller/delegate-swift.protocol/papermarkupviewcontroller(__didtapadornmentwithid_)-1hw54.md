> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller/delegate-swift.protocol/papermarkupviewcontroller(_:didtapadornmentwithid:)-1hw54

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
