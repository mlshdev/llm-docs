> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktileset/init(tilegroups:)](https://developer.apple.com/documentation/spritekit/sktileset/init(tilegroups:))

# init(tileGroups:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile set with an array of tile groups and rectangular grid layout.

## Declaration

```swift
init(tileGroups: [SKTileGroup])
```

## Parameters

- `tileGroups`: An array of [SKTileGroup](../sktilegroup.md) objects from which to create the tile set from.

<a id="return-value"></a>

## Return Value

A new tile set.

## See Also

### Creating a Tile Set Programmatically

- [init(tileGroups:tileSetType:)](init%28tilegroups_tilesettype_%29.md): Initializes a new tile set with an array of tile groups and specified layout.

# initWithTileGroups: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile set with an array of tile groups and rectangular grid layout.

## Declaration

```objectivec
- (instancetype) initWithTileGroups:(NSArray<SKTileGroup *> *) tileGroups;
```

## Parameters

- `tileGroups`: An array of [SKTileGroup](../sktilegroup.md) objects from which to create the tile set from.

<a id="return-value"></a>

## Return Value

A new tile set.

## See Also

### Creating a Tile Set Programmatically

- [tileSetWithTileGroups:](tilesetwithtilegroups_.md)
- [initWithTileGroups:tileSetType:](init%28tilegroups_tilesettype_%29.md): Initializes a new tile set with an array of tile groups and specified layout.
- [tileSetWithTileGroups:tileSetType:](tilesetwithtilegroups_tilesettype_.md)
