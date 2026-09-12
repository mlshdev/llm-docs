> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gksknodecomponent/node](https://developer.apple.com/documentation/gameplaykit/gksknodecomponent/node)

# node (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The SpriteKit node managed by the component.

## Declaration

```swift
var node: SKNode { get set }
```

<a id="Discussion"></a>

## Discussion

When you add this component to a [GKEntity](../gkentity.md) object, the component automatically sets the [entity](../../spritekit/sknode/entity.md) property of its SpriteKit node to point to that entity.

# node (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The SpriteKit node managed by the component.

## Declaration

```objectivec
@property (nonatomic, strong) SKNode * node;
```

<a id="Discussion"></a>

## Discussion

When you add this component to a [GKEntity](../gkentity.md) object, the component automatically sets the [entity](../../spritekit/sknode/entity.md) property of its SpriteKit node to point to that entity.
