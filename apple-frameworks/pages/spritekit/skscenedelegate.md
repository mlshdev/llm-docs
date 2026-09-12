> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscenedelegate](https://developer.apple.com/documentation/spritekit/skscenedelegate)

# SKSceneDelegate (Swift)

**Framework:** SpriteKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Methods that, when implemented, allow any class to participate in the SpriteKit render loop callbacks.

## Declaration

```swift
protocol SKSceneDelegate : NSObjectProtocol
```

## Mentioned In

- [Configuring a Physics Body](configuring-a-physics-body.md)
- [Detecting Changes at Each Step of an Animation](detecting-changes-at-each-step-of-an-animation.md)
- [Disconnecting Bodies from Joints](disconnecting-bodies-from-joints.md)
- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md)
- [Getting Started with Actions](getting-started-with-actions.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)
- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md)
- [Use SpriteKit Objects within Scene Delegate Callbacks](use-spritekit-objects-within-scene-delegate-callbacks.md)

<a id="overview"></a>

## Overview

The [SKSceneDelegate](skscenedelegate.md) protocol is used to implement a delegate to be called whenever the scene is being animated. Typically, you supply a delegate when you want to use a scene without requiring the scene to be subclassed. The methods in this protocol all correspond to methods implemented by the [SKScene](skscene.md) class. If the delegate implements a particular method, that method is called instead of the corresponding method on the scene object.

When processing a scene, SpriteKit runs a loop that processes and renders the scene. The [SKSceneDelegate](skscenedelegate.md) methods allows you to add logic at any step of the loop.

![Frame processing in a scene](https://developer.apple.com/images/com.apple.spritekit/media-2527821@2x.png)

> **Important**

>  If your view has a [SKViewDelegate](skviewdelegate.md) and its [view(\_:shouldRenderAtTime:)](skviewdelegate/view%28__shouldrenderattime_%29.md) method returns [false](https://developer.apple.com/documentation/swift/false), the update is skipped and none of the scene delegate methods are called.

## Topics

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [update(\_:for:)](skscenedelegate/update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didEvaluateActions(for:)](skscenedelegate/didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics(for:)](skscenedelegate/didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints(for:)](skscenedelegate/didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdate(for:)](skscenedelegate/didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a Delegate

- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md): Use a scene delegate to share app logic across various scenes.
- [delegate](skscene/delegate.md): A delegate to be called during the animation loop.

# SKSceneDelegate (Objective-C)

**Framework:** SpriteKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Methods that, when implemented, allow any class to participate in the SpriteKit render loop callbacks.

## Declaration

```objectivec
@protocol SKSceneDelegate <NSObject>
```

## Mentioned In

- [Configuring a Physics Body](configuring-a-physics-body.md)
- [Detecting Changes at Each Step of an Animation](detecting-changes-at-each-step-of-an-animation.md)
- [Disconnecting Bodies from Joints](disconnecting-bodies-from-joints.md)
- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md)
- [Getting Started with Actions](getting-started-with-actions.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)
- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md)
- [Use SpriteKit Objects within Scene Delegate Callbacks](use-spritekit-objects-within-scene-delegate-callbacks.md)

<a id="overview"></a>

## Overview

The [SKSceneDelegate](skscenedelegate.md) protocol is used to implement a delegate to be called whenever the scene is being animated. Typically, you supply a delegate when you want to use a scene without requiring the scene to be subclassed. The methods in this protocol all correspond to methods implemented by the [SKScene](skscene.md) class. If the delegate implements a particular method, that method is called instead of the corresponding method on the scene object.

When processing a scene, SpriteKit runs a loop that processes and renders the scene. The [SKSceneDelegate](skscenedelegate.md) methods allows you to add logic at any step of the loop.

![Frame processing in a scene](https://developer.apple.com/images/com.apple.spritekit/media-2527821@2x.png)

> **Important**

>  If your view has a [SKViewDelegate](skviewdelegate.md) and its [view:shouldRenderAtTime:](skviewdelegate/view%28__shouldrenderattime_%29.md) method returns [false](https://developer.apple.com/documentation/swift/false), the update is skipped and none of the scene delegate methods are called.

## Topics

### Handling Animation Events

- [Use SpriteKit Objects within Scene Delegate Callbacks](use-spritekit-objects-within-scene-delegate-callbacks.md): Follow threading guidelines to keep your SpriteKit app thread safe.
- [update:forScene:](skscenedelegate/update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didEvaluateActionsForScene:](skscenedelegate/didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysicsForScene:](skscenedelegate/didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraintsForScene:](skscenedelegate/didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdateForScene:](skscenedelegate/didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a Delegate

- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md): Use a scene delegate to share app logic across various scenes.
- [delegate](skscene/delegate.md): A delegate to be called during the animation loop.
