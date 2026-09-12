> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/settilegroup(_:andtiledefinition:forcolumn:row:)](https://developer.apple.com/documentation/spritekit/sktilemapnode/settilegroup(_:andtiledefinition:forcolumn:row:))

# setTileGroup(\_:andTileDefinition:forColumn:row:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Set the tile group and tile definition at the specified tile index.

## Declaration

```swift
func setTileGroup(_ tileGroup: SKTileGroup, andTileDefinition tileDefinition: SKTileDefinition, forColumn column: Int, row: Int)
```

## Parameters

- `tileGroup`: The tile group to place in the map.
- `tileDefinition`: The tile definition to place in the map.
- `column`: The column index of the tile.
- `row`: The row index of the tile.

<a id="Discussion"></a>

## Discussion

This function is for use when you’re creating a tile map programmatically, versus creating it ahead of time with the scene editor.

When [enableAutomapping](enableautomapping.md) is set to `true`, the surrounding tiles of a painted area will be controlled by the tile group, too. When automapping is disabled, just the tile definition will be placed without modify any of the neighboring tiles.

## See Also

### Defining a Tile Map’s Contents

- [enableAutomapping](enableautomapping.md): When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.
- [fill(with:)](fill%28with_%29.md): When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.
- [setTileGroup(\_:forColumn:row:)](settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.

# setTileGroup:andTileDefinition:forColumn:row: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Set the tile group and tile definition at the specified tile index.

## Declaration

```objectivec
- (void) setTileGroup:(SKTileGroup *) tileGroup andTileDefinition:(SKTileDefinition *) tileDefinition forColumn:(NSUInteger) column row:(NSUInteger) row;
```

## Parameters

- `tileGroup`: The tile group to place in the map.
- `tileDefinition`: The tile definition to place in the map.
- `column`: The column index of the tile.
- `row`: The row index of the tile.

<a id="Discussion"></a>

## Discussion

This function is for use when you’re creating a tile map programmatically, versus creating it ahead of time with the scene editor.

When [enableAutomapping](enableautomapping.md) is set to `true`, the surrounding tiles of a painted area will be controlled by the tile group, too. When automapping is disabled, just the tile definition will be placed without modify any of the neighboring tiles.

## See Also

### Defining a Tile Map’s Contents

- [enableAutomapping](enableautomapping.md): When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.
- [fillWithTileGroup:](fill%28with_%29.md): When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.
- [setTileGroup:forColumn:row:](settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.
