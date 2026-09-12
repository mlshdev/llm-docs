> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/worldscalingbehavior/automatic](https://developer.apple.com/documentation/swiftui/worldscalingbehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

The scaling behavior that is standard for the window’s style.

## Declaration

```swift
static var automatic: WorldScalingBehavior { get }
```

<a id="discussion"></a>

## Discussion

By default, regular [WindowGroup](../windowgroup.md) windows have dynamic scaling, while windows with a [volumetric](../windowstyle/volumetric.md) window style use fixed scaling.
