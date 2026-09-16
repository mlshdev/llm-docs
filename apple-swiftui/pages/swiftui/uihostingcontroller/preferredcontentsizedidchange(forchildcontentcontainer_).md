> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uihostingcontroller/preferredcontentsizedidchange(forchildcontentcontainer:)

# preferredContentSizeDidChange(forChildContentContainer:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
@MainActor @preconcurrency override dynamic func preferredContentSizeDidChange(forChildContentContainer container: any UIContentContainer)
```

## See Also

### Managing the size

- [sizingOptions](sizingoptions.md): The options for how the hosting controller tracks changes to the size of its SwiftUI content.
- [sizeThatFits(in:)](sizethatfits%28in_%29.md): Calculates and returns the most appropriate size for the current view.
- [safeAreaRegions](safearearegions.md): Conforms when `Content` conforms to `View`. The safe area regions that this view controller adds to its view.
