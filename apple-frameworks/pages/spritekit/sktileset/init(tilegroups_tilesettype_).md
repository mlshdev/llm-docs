> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktileset/init(tilegroups:tilesettype:)](https://developer.apple.com/documentation/spritekit/sktileset/init(tilegroups:tilesettype:))

# init(tileGroups:tileSetType:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile set with an array of tile groups and specified layout.

## Declaration

```swift
init(tileGroups: [SKTileGroup], tileSetType: SKTileSetType)
```

## Parameters

- `tileGroups`: An array of [SKTileGroup](../sktilegroup.md) objects from which to create the tile set from.
- `tileSetType`: The arrangement of the tiles.

<a id="return-value"></a>

## Return Value

A new tile set.

## See Also

### Creating a Tile Set Programmatically

- [init(tileGroups:)](init%28tilegroups_%29.md): Initializes a new tile set with an array of tile groups and rectangular grid layout.

# initWithTileGroups:tileSetType: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile set with an array of tile groups and specified layout.

## Declaration

```objectivec
- (instancetype) initWithTileGroups:(NSArray<SKTileGroup *> *) tileGroups tileSetType:(SKTileSetType) tileSetType;
```

## Parameters

- `tileGroups`: An array of [SKTileGroup](../sktilegroup.md) objects from which to create the tile set from.
- `tileSetType`: The arrangement of the tiles.

<a id="return-value"></a>

## Return Value

A new tile set.

## See Also

### Creating a Tile Set Programmatically

- [initWithTileGroups:](init%28tilegroups_%29.md): Initializes a new tile set with an array of tile groups and rectangular grid layout.
- [tileSetWithTileGroups:](tilesetwithtilegroups_.md)
- [tileSetWithTileGroups:tileSetType:](tilesetwithtilegroups_tilesettype_.md)
