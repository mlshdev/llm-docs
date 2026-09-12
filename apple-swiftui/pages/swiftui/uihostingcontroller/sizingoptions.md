> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontroller/sizingoptions](https://developer.apple.com/documentation/swiftui/uihostingcontroller/sizingoptions)

# sizingOptions

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The options for how the hosting controller tracks changes to the size of its SwiftUI content.

## Declaration

```swift
@MainActor @preconcurrency var sizingOptions: UIHostingControllerSizingOptions { get set }
```

<a id="discussion"></a>

## Discussion

The default value is the empty set.

## See Also

### Managing the size

- [preferredContentSizeDidChange(forChildContentContainer:)](preferredcontentsizedidchange%28forchildcontentcontainer_%29.md)
- [sizeThatFits(in:)](sizethatfits%28in_%29.md): Calculates and returns the most appropriate size for the current view.
- [safeAreaRegions](safearearegions.md): Conforms when `Content` conforms to `View`. The safe area regions that this view controller adds to its view.
