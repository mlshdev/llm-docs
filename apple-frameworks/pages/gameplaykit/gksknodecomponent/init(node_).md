> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gksknodecomponent/init(node:)

# init(node:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a component to manage the specified SpriteKit node.

## Declaration

```swift
init(node: SKNode)
```

## Parameters

- `node`: The SpriteKit node to be managed by the component.

<a id="return-value"></a>

## Return Value

A new SpriteKit component.

<a id="Discussion"></a>

## Discussion

When you add this component to a [GKEntity](../gkentity.md) object, the component automatically sets the [entity](../../spritekit/sknode/entity.md) property of its SpriteKit node to point to that entity.

# initWithNode: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a component to manage the specified SpriteKit node.

## Declaration

```objectivec
- (instancetype) initWithNode:(SKNode *) node;
```

## Parameters

- `node`: The SpriteKit node to be managed by the component.

<a id="return-value"></a>

## Return Value

A new SpriteKit component.

<a id="Discussion"></a>

## Discussion

When you add this component to a [GKEntity](../gkentity.md) object, the component automatically sets the [entity](../../spritekit/sknode/entity.md) property of its SpriteKit node to point to that entity.

## See Also

### Creating a SpriteKit Component

- [componentWithNode:](componentwithnode_.md): Creates a component to manage the specified SpriteKit node.
