> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid)

# SKWarpGeometryGrid (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A definition for a grid-based deformation of nodes that conform to [SKWarpable](skwarpable.md).

## Declaration

```swift
class SKWarpGeometryGrid
```

## Mentioned In

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

<a id="overview"></a>

## Overview

An `SKWarpGeometryGrid` exposes a 2D array of source positions, and set of destination positions with matching size, that allow you to define which sections of a node should be translated from the source positions to the destination positions. Conceptually, this forms two grids—a source grid and a destination grid—where the visual warping is accomplished by stretching or shrinking each section of the node as the source positions of the grid interpolate to their corresponding destination positions.

## Topics

### Creating a Warp Geometry Grid

- [init(columns:rows:)](skwarpgeometrygrid/init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [init(columns:rows:sourcePositions:destinationPositions:)](skwarpgeometrygrid/init%28columns_rows_sourcepositions_destinationpositions_%29.md): Creates a warp geometry grid of a specific size and warp translation, in point arrays.
- [init(coder:)](skwarpgeometrygrid/init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.

### Animating Warping

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md): Interpolate warping from source to destination warp geometry grids.

### Accessing or Setting Warp Geometry Grid Size

- [numberOfColumns](skwarpgeometrygrid/numberofcolumns.md): The object’s number of columns.
- [numberOfRows](skwarpgeometrygrid/numberofrows.md): The object’s number of rows.
- [vertexCount](skwarpgeometrygrid/vertexcount.md): The object’s total number of vertices.

### Accessing or Setting Grid Vertices

Get or set `float2` values that correspond to individual vertices of the grid.

- [destPosition(at:)](skwarpgeometrygrid/destposition%28at_%29.md): Returns the destination position of a vertex.
- [replacingByDestinationPositions(positions:)](skwarpgeometrygrid/replacingbydestinationpositions%28positions_%29.md): Returns a copy of this grid, updated with the argument destination positions.
- [replacingBySourcePositions(positions:)](skwarpgeometrygrid/replacingbysourcepositions%28positions_%29.md): Returns a copy of this grid, updated with the argument source positions.
- [sourcePosition(at:)](skwarpgeometrygrid/sourceposition%28at_%29.md): Returns the source position of a vertex.

## Relationships

### Inherits From

- [SKWarpGeometry](skwarpgeometry.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Warping

- [SKWarpGeometry](skwarpgeometry.md): A definition for a deformation of nodes that conform to [SKWarpable](skwarpable.md).
- [SKWarpable](skwarpable.md): A protocol for objects that can be warped and animated by an [SKWarpGeometry](skwarpgeometry.md).

# SKWarpGeometryGrid (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A definition for a grid-based deformation of nodes that conform to [SKWarpable](skwarpable.md).

## Declaration

```objectivec
@interface SKWarpGeometryGrid : SKWarpGeometry
```

## Mentioned In

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md)
- [Warping SpriteKit Content By Using an Effect Node](warping-spritekit-content-by-using-an-effect-node.md)

<a id="overview"></a>

## Overview

An `SKWarpGeometryGrid` exposes a 2D array of source positions, and set of destination positions with matching size, that allow you to define which sections of a node should be translated from the source positions to the destination positions. Conceptually, this forms two grids—a source grid and a destination grid—where the visual warping is accomplished by stretching or shrinking each section of the node as the source positions of the grid interpolate to their corresponding destination positions.

## Topics

### Creating a Warp Geometry Grid

- [gridWithColumns:rows:](skwarpgeometrygrid/init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [initWithColumns:rows:sourcePositions:destPositions:](skwarpgeometrygrid/initwithcolumns_rows_sourcepositions_destpositions_.md): Creates a warp geometry grid of a specific size and warp translation, in pointers to point arrays.
- [gridWithColumns:rows:sourcePositions:destPositions:](skwarpgeometrygrid/gridwithcolumns_rows_sourcepositions_destpositions_.md)
- [grid](skwarpgeometrygrid/grid.md): Initializes a new empty grid.
- [initWithCoder:](skwarpgeometrygrid/init%28coder_%29.md): Tells you when to intialize a grid that was loaded from an archive.

### Animating Warping

- [Animate the Warping of a Sprite](animate-the-warping-of-a-sprite.md): Interpolate warping from source to destination warp geometry grids.

### Accessing or Setting Warp Geometry Grid Size

- [numberOfColumns](skwarpgeometrygrid/numberofcolumns.md): The object’s number of columns.
- [numberOfRows](skwarpgeometrygrid/numberofrows.md): The object’s number of rows.
- [vertexCount](skwarpgeometrygrid/vertexcount.md): The object’s total number of vertices.

### Accessing or Setting Grid Vertices

Get or set `float2` values that correspond to individual vertices of the grid.

- [destPositionAtIndex:](skwarpgeometrygrid/destposition%28at_%29.md): Returns the destination position of a vertex.
- [sourcePositionAtIndex:](skwarpgeometrygrid/sourceposition%28at_%29.md): Returns the source position of a vertex.
- [gridByReplacingDestPositions:](skwarpgeometrygrid/gridbyreplacingdestpositions_.md): Returns a copy of the receiver with the destination positions replaced by a specified array.
- [gridByReplacingSourcePositions:](skwarpgeometrygrid/gridbyreplacingsourcepositions_.md): Returns a copy of the receiver with the source positions replaced by a specified array.

## Relationships

### Inherits From

- [SKWarpGeometry](skwarpgeometry.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Warping

- [SKWarpGeometry](skwarpgeometry.md): A definition for a deformation of nodes that conform to [SKWarpable](skwarpable.md).
- [SKWarpable](skwarpable.md): A protocol for objects that can be warped and animated by an [SKWarpGeometry](skwarpgeometry.md).
