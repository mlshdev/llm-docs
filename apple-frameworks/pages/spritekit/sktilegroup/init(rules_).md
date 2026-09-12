> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilegroup/init(rules:)](https://developer.apple.com/documentation/spritekit/sktilegroup/init(rules:))

# init(rules:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and initializes a tile group with the specified tile group rules.

## Declaration

```swift
init(rules: [SKTileGroupRule])
```

## Parameters

- `rules`: The tile group rules to determine tile placement.

<a id="return-value"></a>

## Return Value

A new tile group.

## Mentioned In

- [Creating Tile Groups Programmatically](../creating-tile-groups-programmatically.md)

## See Also

### Creating Tile Groups

- [Creating Tile Groups Programmatically](../creating-tile-groups-programmatically.md): Paint tiles on a map by putting tile definitions in a group that you create in code.
- [init(tileDefinition:)](init%28tiledefinition_%29.md): Creates and initializes a simple tile group with a single tile definition.

# initWithRules: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and initializes a tile group with the specified tile group rules.

## Declaration

```objectivec
- (instancetype) initWithRules:(NSArray<SKTileGroupRule *> *) rules;
```

## Parameters

- `rules`: The tile group rules to determine tile placement.

<a id="return-value"></a>

## Return Value

A new tile group.

## Mentioned In

- [Creating Tile Groups Programmatically](../creating-tile-groups-programmatically.md)

## See Also

### Creating Tile Groups

- [Creating Tile Groups Programmatically](../creating-tile-groups-programmatically.md): Paint tiles on a map by putting tile definitions in a group that you create in code.
- [initWithTileDefinition:](init%28tiledefinition_%29.md): Creates and initializes a simple tile group with a single tile definition.
- [tileGroupWithTileDefinition:](tilegroupwithtiledefinition_.md)
- [tileGroupWithRules:](tilegroupwithrules_.md)
