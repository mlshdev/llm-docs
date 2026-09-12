> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontroller/sizethatfits(in:)](https://developer.apple.com/documentation/swiftui/uihostingcontroller/sizethatfits(in:))

# sizeThatFits(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

Calculates and returns the most appropriate size for the current view.

## Declaration

```swift
@MainActor @preconcurrency func sizeThatFits(in size: CGSize) -> CGSize
```

## Parameters

- `size`: The proposed new size for the view.

<a id="return-value"></a>

## Return Value

The size that offers the best fit for the root view and its contents.

## See Also

### Managing the size

- [sizingOptions](sizingoptions.md): The options for how the hosting controller tracks changes to the size of its SwiftUI content.
- [preferredContentSizeDidChange(forChildContentContainer:)](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md)
- [safeAreaRegions](safearearegions.md): Conforms when `Content` conforms to `View`. The safe area regions that this view controller adds to its view.
