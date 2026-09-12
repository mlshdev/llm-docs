> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller/safearearegions](https://developer.apple.com/documentation/swiftui/nshostingcontroller/safearearegions)

# safeAreaRegions

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

The safe area regions that this view controller adds to its view.

## Declaration

```swift
@MainActor @preconcurrency var safeAreaRegions: SafeAreaRegions { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `SafeAreaRegions.all`.

## See Also

### Configuring the controller

- [sizeThatFits(in:)](sizethatfits%28in_%29.md): Calculates and returns the most appropriate size for the current view.
- [preferredContentSize](preferredcontentsize.md)
- [sizingOptions](sizingoptions.md): The options for how the hosting controller’s view creates and updates constraints based on the size of its SwiftUI content.
- [sceneBridgingOptions](scenebridgingoptions.md): The options for which aspects of the window will be managed by this controller’s hosting view.
