> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilemapnode/enableautomapping](https://developer.apple.com/documentation/spritekit/sktilemapnode/enableautomapping)

# enableAutomapping (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.

## Declaration

```swift
var enableAutomapping: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This function is for use when you’re creating a tile map programmatically, versus creating it ahead of time with the scene editor.

Set this value to `true` when you want automapping behavior (equivalent to using the paint brush in the scene editor) when using the [fill(with:)](fill%28with_%29.md), and [setTileGroup(\_:andTileDefinition:forColumn:row:)](settilegroup%28__andtiledefinition_forcolumn_row_%29.md) functions.

## See Also

### Defining a Tile Map’s Contents

- [fill(with:)](fill%28with_%29.md): When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.
- [setTileGroup(\_:andTileDefinition:forColumn:row:)](settilegroup%28__andtiledefinition_forcolumn_row_%29.md): Set the tile group and tile definition at the specified tile index.
- [setTileGroup(\_:forColumn:row:)](settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.

# enableAutomapping (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

When creating a tile map node programmatically, specifies whether the tile map uses automapping behavior like the scene editor.

## Declaration

```objectivec
@property (nonatomic) BOOL enableAutomapping;
```

<a id="Discussion"></a>

## Discussion

This function is for use when you’re creating a tile map programmatically, versus creating it ahead of time with the scene editor.

Set this value to `true` when you want automapping behavior (equivalent to using the paint brush in the scene editor) when using the [fillWithTileGroup:](fill%28with_%29.md), and [setTileGroup:andTileDefinition:forColumn:row:](settilegroup%28__andtiledefinition_forcolumn_row_%29.md) functions.

## See Also

### Defining a Tile Map’s Contents

- [fillWithTileGroup:](fill%28with_%29.md): When creating a tile map node programmatically, this function performs a fill operation with the specified tile group.
- [setTileGroup:andTileDefinition:forColumn:row:](settilegroup%28__andtiledefinition_forcolumn_row_%29.md): Set the tile group and tile definition at the specified tile index.
- [setTileGroup:forColumn:row:](settilegroup%28__forcolumn_row_%29.md): Set the tile group at the specified tile index.
