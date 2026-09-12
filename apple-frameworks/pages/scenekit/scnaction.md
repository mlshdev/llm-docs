> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction](https://developer.apple.com/documentation/scenekit/scnaction)

# SCNAction (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A simple, reusable animation that changes attributes of any node you attach it to.

## Declaration

```swift
class SCNAction
```

<a id="overview"></a>

## Overview

You use actions most often to change the structure and content of the [SCNNode](scnnode.md) object to which they are attached, but you can also use actions to make other changes to the scene. In SceneKit, actions provide an easy way to implement animated behaviors that frequently change in response to user input.

<a id="Working-with-Actions"></a>

### Working with Actions

To create an action, call the class method for the action you are interested in. Then, configure the action’s properties. Finally, to execute the action, call a node object’s [run(\_:)](../spritekit/sknode/run%28__%29.md) method (or a similar method from the [SCNActionable](scnactionable.md) protocol) and pass it the action object.

Most actions allow you to change a node’s properties, such as its position, rotation, or scale. Many of these actions are animated by SceneKit, meaning that they change the properties of the associated node over more than one frame of animation rendered by the scene. When an action is animated, the [duration](scnaction/duration.md) property states how long that action takes to complete in seconds and its [timingMode](scnaction/timingmode.md) property defines the rate at which the animation executes. The action’s [speed](scnaction/speed.md) property allows you to adjust the timing of the animation by increasing or decreasing its playback speed.

Many actions can be *reversed*, allowing you to create another action object that reverses the effect of that action. For example, if an action object moves a node `20` units in the positive X direction of its parent’s local coordinate space, the reversed action moves the node `20` units in the negative X direction. To create a reversed action object, call an action object’s [reversed()](scnaction/reversed%28%29.md) method.

Some actions include other actions as children:

- A *sequence action* has multiple child actions. Each action in the sequence begins after the previous action ends.
- A *group action* has multiple child actions. All actions stored in the group begin executing at the same time.
- A *repeating action* stores a single child action. When the child action completes, it is restarted.

You can nest groups, sequences, and repeating actions. By combining actions together, you can add sophisticated behaviors to a node.

<a id="Using-Actions-for-Scene-Animation"></a>

### Using Actions for Scene Animation

Actions are easily reused, can be added and removed while running, and directly affect presented nodes. For these reasons, actions work well when your scene changes frequently in response to user input—such as when building a game. Not all elements of a scene can be animated using actions. For other kinds of animation, use implicitly animated object properties (see the [SCNTransaction](scntransaction.md) class) or explicitly created Core Animation objects (see the [SCNAnimatable](scnanimatable.md) protocol), or change the scene graph directly for each rendered frame (see the [SCNSceneRendererDelegate](scnscenerendererdelegate.md) protocol).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You never subclass [SCNAction](scnaction.md) directly. Instead, create actions that call methods on arbitrary objects or execute blocks of code. See Creating Custom Actions.

## Topics

### Creating Actions That Move a Node

- [moveBy(x:y:z:duration:)](scnaction/moveby%28x_y_z_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(by:duration:)](scnaction/move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [move(to:duration:)](scnaction/move%28to_duration_%29.md): Creates an action that moves a node to a new position.

### Creating Actions That Rotate a Node

- [rotateBy(x:y:z:duration:)](scnaction/rotateby%28x_y_z_duration_%29.md): Creates an action that rotates the node in each of the three principal axes by angles relative to its current orientation.
- [rotateTo(x:y:z:duration:)](scnaction/rotateto%28x_y_z_duration_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateTo(x:y:z:duration:usesShortestUnitArc:)](scnaction/rotateto%28x_y_z_duration_usesshortestunitarc_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotate(by:around:duration:)](scnaction/rotate%28by_around_duration_%29.md): Creates an action that rotates the node by an angle around a specified axis.
- [rotate(toAxisAngle:duration:)](scnaction/rotate%28toaxisangle_duration_%29.md): Creates an action that rotates the node to an absolute angle around a specified axis.

### Creating Actions That Change a Node’s Scale

- [scale(by:duration:)](scnaction/scale%28by_duration_%29.md): Creates an action that uniformly changes the scale factor of a node by a relative value.
- [scale(to:duration:)](scnaction/scale%28to_duration_%29.md): Creates an action that uniformly changes the scale factor of a node to an absolute value.

### Creating Actions That Change a Node’s Opacity

- [fadeIn(duration:)](scnaction/fadein%28duration_%29.md): Creates an action that changes the opacity of the node to `1.0`.
- [fadeOut(duration:)](scnaction/fadeout%28duration_%29.md): Creates an action that changes the opacity of the node to `0.0`.
- [fadeOpacity(by:duration:)](scnaction/fadeopacity%28by_duration_%29.md): Creates an action that adjusts the opacity of a node by a relative value.
- [fadeOpacity(to:duration:)](scnaction/fadeopacity%28to_duration_%29.md): Creates an action that adjusts the opacity of a node to a new value.

### Creating Actions That Change a Node’s Visibility

- [hide()](scnaction/hide%28%29.md): Creates an action that hides a node.
- [unhide()](scnaction/unhide%28%29.md): Creates an action that ensures a node is not hidden.

### Creating Actions That Remove Nodes from the Scene

- [removeFromParentNode()](scnaction/removefromparentnode%28%29.md): Creates an action that removes the node from its parent.

### Creating Actions That Play Audio

- [playAudio(\_:waitForCompletion:)](scnaction/playaudio%28__waitforcompletion_%29.md): Creates an action that plays an audio source.

### Creating Actions That Combine or Repeat Other Actions

- [group(\_:)](scnaction/group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence(\_:)](scnaction/sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeat(\_:count:)](scnaction/repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatForever(\_:)](scnaction/repeatforever%28__%29.md): Creates an action that repeats another action forever.

### Creating Actions That Add Delays to Action Sequences

- [wait(duration:)](scnaction/wait%28duration_%29.md): Creates an action that idles for a specified period of time.
- [wait(duration:withRange:)](scnaction/wait%28duration_withrange_%29.md): Creates an action that idles for a randomized period of time.

### Creating Custom Actions

- [run(\_:)](scnaction/run%28__%29.md): Creates an action that executes a block.
- [run(\_:queue:)](scnaction/run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [customAction(duration:action:)](scnaction/customaction%28duration_action_%29.md): Creates an action that executes a block periodically over a specified duration.
- [javaScriptAction(withScript:duration:)](scnaction/javascriptaction%28withscript_duration_%29.md): Creates an action that executes a JavaScript script periodically over a specified duration.

### Reversing an Action

- [reversed()](scnaction/reversed%28%29.md): Creates an action that reverses the behavior of another action.

### Adjusting an Action’s Animation Properties

- [duration](scnaction/duration.md): The duration required to complete an action.
- [speed](scnaction/speed.md): A speed factor that modifies how fast an action runs.
- [timingMode](scnaction/timingmode.md): The timing mode used to execute an action.
- [timingFunction](scnaction/timingfunction.md): A block SceneKit calls to determine the action’s animation timing.

### Constants

- [SCNActionTimingMode](scnactiontimingmode.md): Constants affecting the animation curve of an action, used by the [timingMode](scnaction/timingmode.md) property.
- [SCNActionTimingFunction](scnactiontimingfunction.md): The signature for a block that manages animation timing, used by the [timingFunction](scnaction/timingfunction.md) property.

### Initializers

- [init(coder:)](scnaction/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Actions

- [SCNActionable](scnactionable.md): Methods for running actions on nodes.

# SCNAction (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A simple, reusable animation that changes attributes of any node you attach it to.

## Declaration

```objectivec
@interface SCNAction : NSObject
```

<a id="overview"></a>

## Overview

You use actions most often to change the structure and content of the [SCNNode](scnnode.md) object to which they are attached, but you can also use actions to make other changes to the scene. In SceneKit, actions provide an easy way to implement animated behaviors that frequently change in response to user input.

<a id="Working-with-Actions"></a>

### Working with Actions

To create an action, call the class method for the action you are interested in. Then, configure the action’s properties. Finally, to execute the action, call a node object’s [runAction:](../spritekit/sknode/run%28__%29.md) method (or a similar method from the [SCNActionable](scnactionable.md) protocol) and pass it the action object.

Most actions allow you to change a node’s properties, such as its position, rotation, or scale. Many of these actions are animated by SceneKit, meaning that they change the properties of the associated node over more than one frame of animation rendered by the scene. When an action is animated, the [duration](scnaction/duration.md) property states how long that action takes to complete in seconds and its [timingMode](scnaction/timingmode.md) property defines the rate at which the animation executes. The action’s [speed](scnaction/speed.md) property allows you to adjust the timing of the animation by increasing or decreasing its playback speed.

Many actions can be *reversed*, allowing you to create another action object that reverses the effect of that action. For example, if an action object moves a node `20` units in the positive X direction of its parent’s local coordinate space, the reversed action moves the node `20` units in the negative X direction. To create a reversed action object, call an action object’s [reversedAction](scnaction/reversed%28%29.md) method.

Some actions include other actions as children:

- A *sequence action* has multiple child actions. Each action in the sequence begins after the previous action ends.
- A *group action* has multiple child actions. All actions stored in the group begin executing at the same time.
- A *repeating action* stores a single child action. When the child action completes, it is restarted.

You can nest groups, sequences, and repeating actions. By combining actions together, you can add sophisticated behaviors to a node.

<a id="Using-Actions-for-Scene-Animation"></a>

### Using Actions for Scene Animation

Actions are easily reused, can be added and removed while running, and directly affect presented nodes. For these reasons, actions work well when your scene changes frequently in response to user input—such as when building a game. Not all elements of a scene can be animated using actions. For other kinds of animation, use implicitly animated object properties (see the [SCNTransaction](scntransaction.md) class) or explicitly created Core Animation objects (see the [SCNAnimatable](scnanimatable.md) protocol), or change the scene graph directly for each rendered frame (see the [SCNSceneRendererDelegate](scnscenerendererdelegate.md) protocol).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You never subclass [SCNAction](scnaction.md) directly. Instead, create actions that call methods on arbitrary objects or execute blocks of code. See Creating Custom Actions.

## Topics

### Creating Actions That Move a Node

- [moveByX:y:z:duration:](scnaction/moveby%28x_y_z_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveBy:duration:](scnaction/move%28by_duration_%29.md): Creates an action that moves a node relative to its current position.
- [moveTo:duration:](scnaction/move%28to_duration_%29.md): Creates an action that moves a node to a new position.

### Creating Actions That Rotate a Node

- [rotateByX:y:z:duration:](scnaction/rotateby%28x_y_z_duration_%29.md): Creates an action that rotates the node in each of the three principal axes by angles relative to its current orientation.
- [rotateToX:y:z:duration:](scnaction/rotateto%28x_y_z_duration_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateToX:y:z:duration:shortestUnitArc:](scnaction/rotateto%28x_y_z_duration_usesshortestunitarc_%29.md): Creates an action that rotates the node to absolute angles in each of the three principal axes.
- [rotateByAngle:aroundAxis:duration:](scnaction/rotate%28by_around_duration_%29.md): Creates an action that rotates the node by an angle around a specified axis.
- [rotateToAxisAngle:duration:](scnaction/rotate%28toaxisangle_duration_%29.md): Creates an action that rotates the node to an absolute angle around a specified axis.

### Creating Actions That Change a Node’s Scale

- [scaleBy:duration:](scnaction/scale%28by_duration_%29.md): Creates an action that uniformly changes the scale factor of a node by a relative value.
- [scaleTo:duration:](scnaction/scale%28to_duration_%29.md): Creates an action that uniformly changes the scale factor of a node to an absolute value.

### Creating Actions That Change a Node’s Opacity

- [fadeInWithDuration:](scnaction/fadein%28duration_%29.md): Creates an action that changes the opacity of the node to `1.0`.
- [fadeOutWithDuration:](scnaction/fadeout%28duration_%29.md): Creates an action that changes the opacity of the node to `0.0`.
- [fadeOpacityBy:duration:](scnaction/fadeopacity%28by_duration_%29.md): Creates an action that adjusts the opacity of a node by a relative value.
- [fadeOpacityTo:duration:](scnaction/fadeopacity%28to_duration_%29.md): Creates an action that adjusts the opacity of a node to a new value.

### Creating Actions That Change a Node’s Visibility

- [hide](scnaction/hide%28%29.md): Creates an action that hides a node.
- [unhide](scnaction/unhide%28%29.md): Creates an action that ensures a node is not hidden.

### Creating Actions That Remove Nodes from the Scene

- [removeFromParentNode](scnaction/removefromparentnode%28%29.md): Creates an action that removes the node from its parent.

### Creating Actions That Play Audio

- [playAudioSource:waitForCompletion:](scnaction/playaudio%28__waitforcompletion_%29.md): Creates an action that plays an audio source.

### Creating Actions That Combine or Repeat Other Actions

- [group:](scnaction/group%28__%29.md): Creates an action that runs a collection of actions in parallel.
- [sequence:](scnaction/sequence%28__%29.md): Creates an action that runs a collection of actions sequentially.
- [repeatAction:count:](scnaction/repeat%28__count_%29.md): Creates an action that repeats another action a specified number of times.
- [repeatActionForever:](scnaction/repeatforever%28__%29.md): Creates an action that repeats another action forever.

### Creating Actions That Add Delays to Action Sequences

- [waitForDuration:](scnaction/wait%28duration_%29.md): Creates an action that idles for a specified period of time.
- [waitForDuration:withRange:](scnaction/wait%28duration_withrange_%29.md): Creates an action that idles for a randomized period of time.

### Creating Custom Actions

- [runBlock:](scnaction/run%28__%29.md): Creates an action that executes a block.
- [runBlock:queue:](scnaction/run%28__queue_%29.md): Creates an action that executes a block on a specific dispatch queue.
- [customActionWithDuration:actionBlock:](scnaction/customaction%28duration_action_%29.md): Creates an action that executes a block periodically over a specified duration.
- [javaScriptActionWithScript:duration:](scnaction/javascriptaction%28withscript_duration_%29.md): Creates an action that executes a JavaScript script periodically over a specified duration.

### Reversing an Action

- [reversedAction](scnaction/reversed%28%29.md): Creates an action that reverses the behavior of another action.

### Adjusting an Action’s Animation Properties

- [duration](scnaction/duration.md): The duration required to complete an action.
- [speed](scnaction/speed.md): A speed factor that modifies how fast an action runs.
- [timingMode](scnaction/timingmode.md): The timing mode used to execute an action.
- [timingFunction](scnaction/timingfunction.md): A block SceneKit calls to determine the action’s animation timing.

### Constants

- [SCNActionTimingMode](scnactiontimingmode.md): Constants affecting the animation curve of an action, used by the [timingMode](scnaction/timingmode.md) property.
- [SCNActionTimingFunction](scnactiontimingfunction.md): The signature for a block that manages animation timing, used by the [timingFunction](scnaction/timingfunction.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Actions

- [SCNActionable](scnactionable.md): Methods for running actions on nodes.
