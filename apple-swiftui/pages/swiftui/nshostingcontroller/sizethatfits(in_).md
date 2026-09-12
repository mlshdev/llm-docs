> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingcontroller/sizethatfits(in:)](https://developer.apple.com/documentation/swiftui/nshostingcontroller/sizethatfits(in:))

# sizeThatFits(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

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

### Configuring the controller

- [preferredContentSize](preferredcontentsize.md)
- [sizingOptions](sizingoptions.md): The options for how the hosting controller’s view creates and updates constraints based on the size of its SwiftUI content.
- [safeAreaRegions](safearearegions.md): The safe area regions that this view controller adds to its view.
- [sceneBridgingOptions](scenebridgingoptions.md): The options for which aspects of the window will be managed by this controller’s hosting view.
