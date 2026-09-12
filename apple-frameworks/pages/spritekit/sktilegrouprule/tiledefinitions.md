> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilegrouprule/tiledefinitions](https://developer.apple.com/documentation/spritekit/sktilegrouprule/tiledefinitions)

# tileDefinitions (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The tile definitions used for this rule.

## Declaration

```swift
var tileDefinitions: [SKTileDefinition] { get set }
```

<a id="Discussion"></a>

## Discussion

When this rule is evaluated and its conditions met, one of the definitions is randomly selected for placement based on their placement weights.

## See Also

### Accessing or Setting Tile Group Rule Properties

- [adjacency](adjacency.md): The adjacency requirement for this rule.
- [SKTileAdjacencyMask](../sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [name](name.md): A name associated with the tile group rule.

# tileDefinitions (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The tile definitions used for this rule.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<SKTileDefinition *> * tileDefinitions;
```

<a id="Discussion"></a>

## Discussion

When this rule is evaluated and its conditions met, one of the definitions is randomly selected for placement based on their placement weights.

## See Also

### Accessing or Setting Tile Group Rule Properties

- [adjacency](adjacency.md): The adjacency requirement for this rule.
- [SKTileAdjacencyMask](../sktileadjacencymask.md): An enumeration defining how neighboring tiles are automatically placed next to each other.
- [name](name.md): A name associated with the tile group rule.
