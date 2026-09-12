> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gksknodecomponent/componentwithnode:](https://developer.apple.com/documentation/gameplaykit/gksknodecomponent/componentwithnode:)

# componentWithNode:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a component to manage the specified SpriteKit node.

## Declaration

```objectivec
+ (instancetype) componentWithNode:(SKNode *) node;
```

## Parameters

- `node`: The SpriteKit node to be managed by the component.

<a id="return-value"></a>

## Return Value

A new SpriteKit component.

<a id="Discussion"></a>

## Discussion

When you add this component to a [GKEntity](../gkentity.md) object, the component automatically sets the [entity](../../spritekit/sknode/entity.md) property of its SpriteKit node to point to that entity.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a SpriteKit Component

- [initWithNode:](init%28node_%29.md): Initializes a component to manage the specified SpriteKit node.
