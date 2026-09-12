> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraph/gridwidth](https://developer.apple.com/documentation/gameplaykit/gkgridgraph/gridwidth)

# gridWidth (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of possible x-coordinates in the grid.

## Declaration

```swift
var gridWidth: Int { get }
```

<a id="Discussion"></a>

## Discussion

You specify origin, width, and height when creating a grid graph with the [init(fromGridStartingAt:width:height:diagonalsAllowed:)](init%28fromgridstartingat_width_height_diagonalsallowed_%29.md) initializer. After initialization, you can use this property to examine the parameters the graph was created with—for example, to draw the grid as a debugging overlay in your game UI.

## See Also

### Inspecting a Graph

- [diagonalsAllowed](diagonalsallowed.md): A Boolean value that indicates whether nodes in the grid are connected to their diagonal neighbors.
- [gridOrigin](gridorigin.md): The lowest x- and y-coordinates that appear in the grid.
- [gridHeight](gridheight.md): The number of possible y-coordinates in the grid.

# gridWidth (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of possible x-coordinates in the grid.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger gridWidth;
```

<a id="Discussion"></a>

## Discussion

You specify origin, width, and height when creating a grid graph with the [initFromGridStartingAt:width:height:diagonalsAllowed:](init%28fromgridstartingat_width_height_diagonalsallowed_%29.md) initializer. After initialization, you can use this property to examine the parameters the graph was created with—for example, to draw the grid as a debugging overlay in your game UI.

## See Also

### Inspecting a Graph

- [diagonalsAllowed](diagonalsallowed.md): A Boolean value that indicates whether nodes in the grid are connected to their diagonal neighbors.
- [gridOrigin](gridorigin.md): The lowest x- and y-coordinates that appear in the grid.
- [gridHeight](gridheight.md): The number of possible y-coordinates in the grid.
