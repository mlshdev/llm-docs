> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowplacement/init(_:size3d:)](https://developer.apple.com/documentation/swiftui/windowplacement/init(_:size3d:))

# init(\_:size3D:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a new window placement with an optional position and 3D size. Depth is ignored on scenes that don’t support it.

## Declaration

```swift
init(_ position: WindowPlacement.Position? = nil, size3D: Size3D? = nil)
```

<a id="discussion"></a>

## Discussion

Any values not provided will use use the default values for the `Scene` that this placement is being applied to.
