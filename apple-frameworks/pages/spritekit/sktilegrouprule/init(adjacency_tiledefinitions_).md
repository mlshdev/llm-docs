> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktilegrouprule/init(adjacency:tiledefinitions:)](https://developer.apple.com/documentation/spritekit/sktilegrouprule/init(adjacency:tiledefinitions:))

# init(adjacency:tileDefinitions:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile group rule with adjacency rules and tile definitions.

## Declaration

```swift
init(adjacency: SKTileAdjacencyMask, tileDefinitions: [SKTileDefinition])
```

## Parameters

- `adjacency`: The adjacency requirements for this rule.
- `tileDefinitions`: The tile definitions used for this rule.

<a id="return-value"></a>

## Return Value

A new tile group rule.

# initWithAdjacency:tileDefinitions: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile group rule with adjacency rules and tile definitions.

## Declaration

```objectivec
- (instancetype) initWithAdjacency:(SKTileAdjacencyMask) adjacency tileDefinitions:(NSArray<SKTileDefinition *> *) tileDefinitions;
```

## Parameters

- `adjacency`: The adjacency requirements for this rule.
- `tileDefinitions`: The tile definitions used for this rule.

<a id="return-value"></a>

## Return Value

A new tile group rule.

## See Also

### Creating a Tile Group Rule

- [tileGroupRuleWithAdjacency:tileDefinitions:](tilegrouprulewithadjacency_tiledefinitions_.md)
