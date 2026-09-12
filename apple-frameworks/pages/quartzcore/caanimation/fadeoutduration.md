> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimation/fadeoutduration](https://developer.apple.com/documentation/quartzcore/caanimation/fadeoutduration)

# fadeOutDuration (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS

For animations attached to SceneKit objects, the duration for transitioning out of the animation’s effect as it ends.

## Declaration

```swift
var fadeOutDuration: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to create smooth transitions between the effects of multiple animations. These transitions are especially useful for geometry animations created with external 3D authoring tools.

For example, the geometry loaded from a scene file for a game character may have associated animations for player actions such as walking and jumping. When the player jumps, if the fade duration is zero, SceneKit abruptly switches from the current frame of the walk animation to the first frame of the jump animation. If the fade duration is greater than zero, SceneKit plays both animations at once during that duration and interpolates vertex positions from one animation to the other, creating a smooth transition.

To attach animations to SceneKit objects, see [SCNAnimatable](../../scenekit/scnanimatable.md).

## See Also

### Fading between SceneKit Animations

- [fadeInDuration](fadeinduration.md): For animations attached to SceneKit objects, the duration for transitioning into the animation’s effect as it begins.

# fadeOutDuration (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS

For animations attached to SceneKit objects, the duration for transitioning out of the animation’s effect as it ends.

## Declaration

```objectivec
@property CGFloat fadeOutDuration;
```

<a id="Discussion"></a>

## Discussion

Use this property to create smooth transitions between the effects of multiple animations. These transitions are especially useful for geometry animations created with external 3D authoring tools.

For example, the geometry loaded from a scene file for a game character may have associated animations for player actions such as walking and jumping. When the player jumps, if the fade duration is zero, SceneKit abruptly switches from the current frame of the walk animation to the first frame of the jump animation. If the fade duration is greater than zero, SceneKit plays both animations at once during that duration and interpolates vertex positions from one animation to the other, creating a smooth transition.

To attach animations to SceneKit objects, see [SCNAnimatable](../../scenekit/scnanimatable.md).

## See Also

### Fading between SceneKit Animations

- [fadeInDuration](fadeinduration.md): For animations attached to SceneKit objects, the duration for transitioning into the animation’s effect as it begins.
