> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/use-spritekit-objects-within-scene-delegate-callbacks](https://developer.apple.com/documentation/spritekit/use-spritekit-objects-within-scene-delegate-callbacks)

# Use SpriteKit Objects within Scene Delegate Callbacks (Swift)

**Framework:** SpriteKit  
**Kind:** Article

Follow threading guidelines to keep your SpriteKit app thread safe.

<a id="overview"></a>

## Overview

SpriteKit is largely a single threaded game engine and as such the API provides developers with callbacks to implement your custom game logic. The primary callback for your game logic is [update(\_:for:)](skscenedelegate/update%28__for_%29.md). Other callbacks are illustrated in [SKSceneDelegate](skscenedelegate.md). Modifying SpriteKit objects outside of the scene delegate callbacks (such as in a background queue or anything else not running on the main thread) can result in concurrency related problems. Even dispatching work on the main thread asynchronously or at a later time is risky because the closure is likely to be done outside of the timeframe SpriteKit expects. If you’re experiencing a segmentation fault or other type of crash occurring deep within the SpriteKit framework, there’s a good chance your code is modifying a SpriteKit object outside of the scene delegate callbacks.

> **Note**

>  To check at runtime if a particular block of code is running on the main thread, inspect [isMainThread](../foundation/thread/ismainthread-swift.property.md).

## See Also

### Handling Animation Events

- [update(\_:for:)](skscenedelegate/update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didEvaluateActions(for:)](skscenedelegate/didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics(for:)](skscenedelegate/didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints(for:)](skscenedelegate/didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdate(for:)](skscenedelegate/didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.

# Use SpriteKit Objects within Scene Delegate Callbacks (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

Follow threading guidelines to keep your SpriteKit app thread safe.

<a id="overview"></a>

## Overview

SpriteKit is largely a single threaded game engine and as such the API provides developers with callbacks to implement your custom game logic. The primary callback for your game logic is [update:forScene:](skscenedelegate/update%28__for_%29.md). Other callbacks are illustrated in [SKSceneDelegate](skscenedelegate.md). Modifying SpriteKit objects outside of the scene delegate callbacks (such as in a background queue or anything else not running on the main thread) can result in concurrency related problems. Even dispatching work on the main thread asynchronously or at a later time is risky because the closure is likely to be done outside of the timeframe SpriteKit expects. If you’re experiencing a segmentation fault or other type of crash occurring deep within the SpriteKit framework, there’s a good chance your code is modifying a SpriteKit object outside of the scene delegate callbacks.

> **Note**

>  To check at runtime if a particular block of code is running on the main thread, inspect [isMainThread](../foundation/thread/ismainthread-swift.property.md).

## See Also

### Handling Animation Events

- [update:forScene:](skscenedelegate/update%28__for_%29.md): Tells you to perform any app specific logic to update your scene.
- [didEvaluateActionsForScene:](skscenedelegate/didevaluateactions%28for_%29.md): Tells you to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysicsForScene:](skscenedelegate/didsimulatephysics%28for_%29.md): Tells you to peform any necessary logic after physics simulations are performed.
- [didApplyConstraintsForScene:](skscenedelegate/didapplyconstraints%28for_%29.md): Tells you to peform any necessary logic after constraints are applied.
- [didFinishUpdateForScene:](skscenedelegate/didfinishupdate%28for_%29.md): Tells you to peform any necessary logic after the scene has finished all of the steps required to process animations.
