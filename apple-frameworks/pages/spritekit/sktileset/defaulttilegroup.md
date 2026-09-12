> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktileset/defaulttilegroup](https://developer.apple.com/documentation/spritekit/sktileset/defaulttilegroup)

# defaultTileGroup (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The tile set’s default tile group.

## Declaration

```swift
var defaultTileGroup: SKTileGroup? { get set }
```

<a id="Discussion"></a>

## Discussion

With auto-mapping enabled, it is possible for some tiles to be removed because there is either no valid rule or a missing tile group for the required adjacency rule. In this situation, those tiles are replaced by the tile group specified by [defaultTileGroup](defaulttilegroup.md).

## See Also

### Accessing or Reading a Tile Set’s Properties

- [defaultTileSize](defaulttilesize.md): The tile set’s default tile size.
- [name](name.md): A name associated with the tile set.
- [tileGroups](tilegroups.md): The tile set’s array of tile group objects.
- [type](type.md): The tile set’s type.
- [SKTileSetType](../sktilesettype.md): An enumeration defining how tiles are arranged.

# defaultTileGroup (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The tile set’s default tile group.

## Declaration

```objectivec
@property (nonatomic, nullable) SKTileGroup * defaultTileGroup;
```

<a id="Discussion"></a>

## Discussion

With auto-mapping enabled, it is possible for some tiles to be removed because there is either no valid rule or a missing tile group for the required adjacency rule. In this situation, those tiles are replaced by the tile group specified by [defaultTileGroup](defaulttilegroup.md).

## See Also

### Accessing or Reading a Tile Set’s Properties

- [defaultTileSize](defaulttilesize.md): The tile set’s default tile size.
- [name](name.md): A name associated with the tile set.
- [tileGroups](tilegroups.md): The tile set’s array of tile group objects.
- [type](type.md): The tile set’s type.
- [SKTileSetType](../sktilesettype.md): An enumeration defining how tiles are arranged.
