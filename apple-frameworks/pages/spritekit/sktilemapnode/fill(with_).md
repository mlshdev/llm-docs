> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/fill(with:)](https://developer.apple.com/documentation/spritekit/sktilemapnode/fill(with:))

# fill(with:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.

## Declaration

```swift
func fill(with tileGroup: SKTileGroup?)
```

## Parameters

- `tileGroup`: The tile group that will be used to fill the map.

## Mentioned In

- [Creating Tile Groups Programmatically](../creating-tile-groups-programmatically.md)

<a id="Discussion"></a>

## Discussion

This function is for use when you’re creating a tile map programmatically, versus creating it ahead of time with the scene editor.

## See Also

### Defining a Tile Map’s Contents

- [enableAutomapping](enableautomapping.md): When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.
- [setTileGroup(\_:andTileDefinition:forColumn:row:)](settilegroup%28__andtiledefinition_forcolumn_row_%29.md): Set the tile group and tile definition at the specified tile index.
- [setTileGroup(\_:forColumn:row:)](settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.

# fillWithTileGroup: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.

## Declaration

```objectivec
- (void) fillWithTileGroup:(SKTileGroup *) tileGroup;
```

## Parameters

- `tileGroup`: The tile group that will be used to fill the map.

## Mentioned In

- [Creating Tile Groups Programmatically](../creating-tile-groups-programmatically.md)

<a id="Discussion"></a>

## Discussion

This function is for use when you’re creating a tile map programmatically, versus creating it ahead of time with the scene editor.

## See Also

### Defining a Tile Map’s Contents

- [enableAutomapping](enableautomapping.md): When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.
- [setTileGroup:andTileDefinition:forColumn:row:](settilegroup%28__andtiledefinition_forcolumn_row_%29.md): Set the tile group and tile definition at the specified tile index.
- [setTileGroup:forColumn:row:](settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.
