> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation/animationevents](https://developer.apple.com/documentation/quartzcore/caanimation/animationevents)

# animationEvents (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS

For animations attached to SceneKit objects, a list of events attached to an animation.

## Declaration

```swift
var animationEvents: [SCNAnimationEvent]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array of [SCNAnimationEvent](../../scenekit/scnanimationevent.md) objects, each of which adds a timed action to the animation.

For example, you can create animation events that play sound effects timed to match the footsteps of an animated game character or that add new nodes to the scene when an animation completes.

To attach animations to SceneKit objects, see [SCNAnimatable](../../scenekit/scnanimatable.md).

# animationEvents (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS

For animations attached to SceneKit objects, a list of events attached to an animation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<SCNAnimationEvent *> * animationEvents;
```

<a id="Discussion"></a>

## Discussion

An array of [SCNAnimationEvent](../../scenekit/scnanimationevent.md) objects, each of which adds a timed action to the animation.

For example, you can create animation events that play sound effects timed to match the footsteps of an animated game character or that add new nodes to the scene when an animation completes.

To attach animations to SceneKit objects, see [SCNAnimatable](../../scenekit/scnanimatable.md).
