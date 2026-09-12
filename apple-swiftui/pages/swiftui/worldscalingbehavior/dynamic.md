> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/worldscalingbehavior/dynamic](https://developer.apple.com/documentation/swiftui/worldscalingbehavior/dynamic)

# dynamic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 2.0+

The window will scale up as it moves further away, maintaining the same angular size.

## Declaration

```swift
static var dynamic: WorldScalingBehavior { get }
```

<a id="discussion"></a>

## Discussion

Prefer dynamic window scaling for windows that display dense UI or a lot of text. Using dynamic scaling ensures that controls and text remain at a comfortable size regardless of the window’s position.

For further information, see [Spatial layout](https://developer.apple.com/design/human-interface-guidelines/spatial-layout) in the Human Interface Guidelines.
