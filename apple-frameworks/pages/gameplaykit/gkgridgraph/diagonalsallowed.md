> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraph/diagonalsallowed](https://developer.apple.com/documentation/gameplaykit/gkgridgraph/diagonalsallowed)

# diagonalsAllowed (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether nodes in the grid are connected to their diagonal neighbors.

## Declaration

```swift
var diagonalsAllowed: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), nodes in the grid are connected to their diagonal neighbors. If the value is [false](https://developer.apple.com/documentation/swift/false), nodes are connected only to their horizontal and vertical neighbors.

You specify this option when creating a grid graph with the [init(fromGridStartingAt:width:height:diagonalsAllowed:)](init%28fromgridstartingat_width_height_diagonalsallowed_%29.md) initializer. After initialization, you can use this property to examine the parameters the graph was created with—for example, to draw the grid as a debugging overlay in your game UI.

## See Also

### Inspecting a Graph

- [gridOrigin](gridorigin.md): The lowest x- and y-coordinates that appear in the grid.
- [gridWidth](gridwidth.md): The number of possible x-coordinates in the grid.
- [gridHeight](gridheight.md): The number of possible y-coordinates in the grid.

# diagonalsAllowed (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether nodes in the grid are connected to their diagonal neighbors.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL diagonalsAllowed;
```

<a id="Discussion"></a>

## Discussion

If this property’s value is [true](https://developer.apple.com/documentation/swift/true), nodes in the grid are connected to their diagonal neighbors. If the value is [false](https://developer.apple.com/documentation/swift/false), nodes are connected only to their horizontal and vertical neighbors.

You specify this option when creating a grid graph with the [initFromGridStartingAt:width:height:diagonalsAllowed:](init%28fromgridstartingat_width_height_diagonalsallowed_%29.md) initializer. After initialization, you can use this property to examine the parameters the graph was created with—for example, to draw the grid as a debugging overlay in your game UI.

## See Also

### Inspecting a Graph

- [gridOrigin](gridorigin.md): The lowest x- and y-coordinates that appear in the grid.
- [gridWidth](gridwidth.md): The number of possible x-coordinates in the grid.
- [gridHeight](gridheight.md): The number of possible y-coordinates in the grid.
