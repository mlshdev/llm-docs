> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkscenerootnodetype](https://developer.apple.com/documentation/gameplaykit/gkscenerootnodetype)

# GKSceneRootNodeType (Swift)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Identifies scene classes from other frameworks that support embedded GameplayKit information.

## Declaration

```swift
protocol GKSceneRootNodeType : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You do not define classes that adopt this protocol. GameplayKit adds this protocol declaration to classes (such as [SKScene](../spritekit/skscene.md)) for which the [GKScene](gkscene.md) class supports archiving and loading embedded GameplayKit information.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Xcode and SpriteKit Integration

- [GKScene](gkscene.md): A container for associating GameplayKit objects with a SpriteKit scene.
- [GKSKNodeComponent](gksknodecomponent.md): A component that manages a SpriteKit node.

# GKSceneRootNodeType (Objective-C)

**Framework:** GameplayKit  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Identifies scene classes from other frameworks that support embedded GameplayKit information.

## Declaration

```objectivec
@protocol GKSceneRootNodeType <NSObject>
```

<a id="overview"></a>

## Overview

You do not define classes that adopt this protocol. GameplayKit adds this protocol declaration to classes (such as [SKScene](../spritekit/skscene.md)) for which the [GKScene](gkscene.md) class supports archiving and loading embedded GameplayKit information.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Xcode and SpriteKit Integration

- [GKScene](gkscene.md): A container for associating GameplayKit objects with a SpriteKit scene.
- [GKSKNodeComponent](gksknodecomponent.md): A component that manages a SpriteKit node.
