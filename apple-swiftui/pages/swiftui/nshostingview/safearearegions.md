> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingview/safearearegions](https://developer.apple.com/documentation/swiftui/nshostingview/safearearegions)

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

### Configuring the view layout behavior

- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md)
- [userInterfaceLayoutDirection](userinterfacelayoutdirection.md)
- [isFlipped](isflipped.md)
- [layerContentsRedrawPolicy](layercontentsredrawpolicy.md)
- [updateConstraints()](updateconstraints%28%29.md)
- [layout()](layout%28%29.md)
