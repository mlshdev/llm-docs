> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarminimizationrestoration/atscrolledge](https://developer.apple.com/documentation/swiftui/toolbarminimizationrestoration/atscrolledge)

# atScrollEdge

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The toolbar restores only when the scroll view’s content reaches the scroll edge.

## Declaration

```swift
static let atScrollEdge: ToolbarMinimizationRestoration
```

<a id="discussion"></a>

## Discussion

Mid-scroll reversals do not restore the toolbar. Currently this is only honored alongside [onScrollDown](../toolbarminimizationbehavior/onscrolldown.md) and only for [navigationBar](../toolbarplacement/navigationbar.md).

## See Also

### Getting restoration options

- [automatic](automatic.md): The system determines the restoration behavior.
