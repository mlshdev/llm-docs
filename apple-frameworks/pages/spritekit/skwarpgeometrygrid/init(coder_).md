> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skwarpgeometrygrid/init(coder:)](https://developer.apple.com/documentation/spritekit/skwarpgeometrygrid/init(coder:))

# init(coder:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells you when to intialize a grid that was loaded from an archive.

## Declaration

```swift
init?(coder aDecoder: NSCoder)
```

## See Also

### Creating a Warp Geometry Grid

- [init(columns:rows:)](init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [init(columns:rows:sourcePositions:destinationPositions:)](init%28columns_rows_sourcepositions_destinationpositions_%29.md): Creates a warp geometry grid of a specific size and warp translation, in point arrays.

# initWithCoder: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Tells you when to intialize a grid that was loaded from an archive.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder;
```

## See Also

### Creating a Warp Geometry Grid

- [gridWithColumns:rows:](init%28columns_rows_%29.md): Creates a warp geometry grid of a specified size.
- [initWithColumns:rows:sourcePositions:destPositions:](initwithcolumns_rows_sourcepositions_destpositions_.md): Creates a warp geometry grid of a specific size and warp translation, in pointers to point arrays.
- [gridWithColumns:rows:sourcePositions:destPositions:](gridwithcolumns_rows_sourcepositions_destpositions_.md)
- [grid](grid.md): Initializes a new empty grid.
