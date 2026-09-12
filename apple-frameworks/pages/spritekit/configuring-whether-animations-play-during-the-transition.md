> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/configuring-whether-animations-play-during-the-transition](https://developer.apple.com/documentation/spritekit/configuring-whether-animations-play-during-the-transition)

# Configuring Whether Animations Play During the Transition (Swift)

**Framework:** SpriteKit  
**Kind:** Article

<a id="Overview"></a>

## Overview

The [pausesIncomingScene](sktransition/pausesincomingscene.md) and [pausesOutgoingScene](sktransition/pausesoutgoingscene.md) properties on the transition object define which animations are played during the transition. By default, both scenes are paused during the transition. However, you might want to enable animation on either scene during the transition.

Figure 1 illustrates which frames of the incoming and outgoing scenes are displayed on screen during a three frame transition with different permutations of [pausesIncomingScene](sktransition/pausesincomingscene.md) and [pausesOutgoingScene](sktransition/pausesoutgoingscene.md).

![Frame progression during transitions](https://developer.apple.com/images/com.apple.spritekit/media-2975371@2x.png)

For example, consider the code again in . Because the button is going to run an action, this code expects the outgoing scene to be animated. But perhaps the incoming scene should not animate its content until the transition completes. Adding the code in Listing 1 has the desired effect.

Listing 1. Pausing frame processing during a transition

**Swift**

```swift
reveal.pausesOutgoingScene = true;
reveal.pausesIncomingScene = false;
```

**Obj-C**

```objc
reveal.pausesOutgoingScene = YES;
reveal.pausesIncomingScene = NO;
```

## See Also

### Creating Transitions

- [Transitioning Between Two Scenes](transitioning-between-two-scenes.md)
- [crossFade(withDuration:)](sktransition/crossfade%28withduration_%29.md): Creates a cross fade transition.
- [doorsCloseHorizontal(withDuration:)](sktransition/doorsclosehorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing horizontal doors.
- [doorsCloseVertical(withDuration:)](sktransition/doorsclosevertical%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing vertical doors.
- [doorsOpenHorizontal(withDuration:)](sktransition/doorsopenhorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of opening horizontal doors.
- [doorsOpenVertical(withDuration:)](sktransition/doorsopenvertical%28withduration_%29.md): Creates a transition where the new scene appears as a pair of opening vertical doors.
- [doorway(withDuration:)](sktransition/doorway%28withduration_%29.md): Creates a transition where the previous scene disappears as a pair of opening doors.
- [fade(with:duration:)](sktransition/fade%28with_duration_%29.md): Creates a transition that first fades to a constant color and then fades to the new scene.
- [fade(withDuration:)](sktransition/fade%28withduration_%29.md): Creates a transition that first fades to black and then fades to the new scene.
- [flipHorizontal(withDuration:)](sktransition/fliphorizontal%28withduration_%29.md): Creates a transition where the two scenes are flipped across a horizontal line running through the center of the view.
- [flipVertical(withDuration:)](sktransition/flipvertical%28withduration_%29.md): Creates a transition where the two scenes are flipped across a vertical line running through the center of the view.
- [moveIn(with:duration:)](sktransition/movein%28with_duration_%29.md): Creates a transition where the new scene moves in on top of the old scene.
- [push(with:duration:)](sktransition/push%28with_duration_%29.md): Creates a transition where the new scene moves in, pushing the old scene out of the view.
- [reveal(with:duration:)](sktransition/reveal%28with_duration_%29.md): Creates a transition where the old scene moves out of the view, revealing the new scene underneath it.
- [init(ciFilter:duration:)](sktransition/init%28cifilter_duration_%29-451za.md): Creates a transition that uses a Core Image filter to perform the transition.

# Configuring Whether Animations Play During the Transition (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

<a id="Overview"></a>

## Overview

The [pausesIncomingScene](sktransition/pausesincomingscene.md) and [pausesOutgoingScene](sktransition/pausesoutgoingscene.md) properties on the transition object define which animations are played during the transition. By default, both scenes are paused during the transition. However, you might want to enable animation on either scene during the transition.

Figure 1 illustrates which frames of the incoming and outgoing scenes are displayed on screen during a three frame transition with different permutations of [pausesIncomingScene](sktransition/pausesincomingscene.md) and [pausesOutgoingScene](sktransition/pausesoutgoingscene.md).

![Frame progression during transitions](https://developer.apple.com/images/com.apple.spritekit/media-2975371@2x.png)

For example, consider the code again in . Because the button is going to run an action, this code expects the outgoing scene to be animated. But perhaps the incoming scene should not animate its content until the transition completes. Adding the code in Listing 1 has the desired effect.

Listing 1. Pausing frame processing during a transition

**Swift**

```swift
reveal.pausesOutgoingScene = true;
reveal.pausesIncomingScene = false;
```

**Obj-C**

```objc
reveal.pausesOutgoingScene = YES;
reveal.pausesIncomingScene = NO;
```

## See Also

### Creating Transitions

- [Transitioning Between Two Scenes](transitioning-between-two-scenes.md)
- [crossFadeWithDuration:](sktransition/crossfade%28withduration_%29.md): Creates a cross fade transition.
- [doorsCloseHorizontalWithDuration:](sktransition/doorsclosehorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing horizontal doors.
- [doorsCloseVerticalWithDuration:](sktransition/doorsclosevertical%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing vertical doors.
- [doorsOpenHorizontalWithDuration:](sktransition/doorsopenhorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of opening horizontal doors.
- [doorsOpenVerticalWithDuration:](sktransition/doorsopenvertical%28withduration_%29.md): Creates a transition where the new scene appears as a pair of opening vertical doors.
- [doorwayWithDuration:](sktransition/doorway%28withduration_%29.md): Creates a transition where the previous scene disappears as a pair of opening doors.
- [fadeWithColor:duration:](sktransition/fade%28with_duration_%29.md): Creates a transition that first fades to a constant color and then fades to the new scene.
- [fadeWithDuration:](sktransition/fade%28withduration_%29.md): Creates a transition that first fades to black and then fades to the new scene.
- [flipHorizontalWithDuration:](sktransition/fliphorizontal%28withduration_%29.md): Creates a transition where the two scenes are flipped across a horizontal line running through the center of the view.
- [flipVerticalWithDuration:](sktransition/flipvertical%28withduration_%29.md): Creates a transition where the two scenes are flipped across a vertical line running through the center of the view.
- [moveInWithDirection:duration:](sktransition/movein%28with_duration_%29.md): Creates a transition where the new scene moves in on top of the old scene.
- [pushWithDirection:duration:](sktransition/push%28with_duration_%29.md): Creates a transition where the new scene moves in, pushing the old scene out of the view.
- [revealWithDirection:duration:](sktransition/reveal%28with_duration_%29.md): Creates a transition where the old scene moves out of the view, revealing the new scene underneath it.
- [transitionWithCIFilter:duration:](sktransition/init%28cifilter_duration_%29-451za.md): Creates a transition that uses a Core Image filter to perform the transition.
