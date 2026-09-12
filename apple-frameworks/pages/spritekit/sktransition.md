> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktransition](https://developer.apple.com/documentation/spritekit/sktransition)

# SKTransition (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object used to perform an animated transition to a new scene.

## Declaration

```swift
class SKTransition
```

<a id="overview"></a>

## Overview

Scenes are the basic building blocks of games. Typically, you design self-contained scenes for the parts of your game, and then transition between these scenes as necessary. For example, you might create different scene classes to represent any or all of the following concepts:

- A loading scene to display while other content is loaded
- A main menu scene to choose what kind of game the user wants to play
- A scene to configure the details of the specific kind of game the user chose
- A scene that provides the gameplay
- A scene displayed when gameplay ends

When you present a new scene in a view that is already presenting a scene, you have the option of using a transition to animate the change from the old scene to the new scene. Using a transition provides continuity so that the scene change is not quite so abrupt.

## Topics

### Creating Transitions

- [Transitioning Between Two Scenes](transitioning-between-two-scenes.md)
- [Configuring Whether Animations Play During the Transition](configuring-whether-animations-play-during-the-transition.md)
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

### Pausing

- [pausesIncomingScene](sktransition/pausesincomingscene.md): A Boolean value that determines whether the incoming scene is paused during the transition.
- [pausesOutgoingScene](sktransition/pausesoutgoingscene.md): A Boolean value that determines whether the outgoing scene is paused during the transition.

### Constants

- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.

### Initializers

- [init(CIFilter:duration:)](sktransition/init%28cifilter_duration_%29-9b6m8.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Displaying a Scene

- [scene](skview/scene.md): The scene currently presented by this view.
- [presentScene(\_:)](skview/presentscene%28__%29.md): Presents a scene.
- [presentScene(\_:transition:)](skview/presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.

# SKTransition (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object used to perform an animated transition to a new scene.

## Declaration

```objectivec
@interface SKTransition : NSObject
```

<a id="overview"></a>

## Overview

Scenes are the basic building blocks of games. Typically, you design self-contained scenes for the parts of your game, and then transition between these scenes as necessary. For example, you might create different scene classes to represent any or all of the following concepts:

- A loading scene to display while other content is loaded
- A main menu scene to choose what kind of game the user wants to play
- A scene to configure the details of the specific kind of game the user chose
- A scene that provides the gameplay
- A scene displayed when gameplay ends

When you present a new scene in a view that is already presenting a scene, you have the option of using a transition to animate the change from the old scene to the new scene. Using a transition provides continuity so that the scene change is not quite so abrupt.

## Topics

### Creating Transitions

- [Transitioning Between Two Scenes](transitioning-between-two-scenes.md)
- [Configuring Whether Animations Play During the Transition](configuring-whether-animations-play-during-the-transition.md)
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

### Pausing

- [pausesIncomingScene](sktransition/pausesincomingscene.md): A Boolean value that determines whether the incoming scene is paused during the transition.
- [pausesOutgoingScene](sktransition/pausesoutgoingscene.md): A Boolean value that determines whether the outgoing scene is paused during the transition.

### Constants

- [SKTransitionDirection](sktransitiondirection.md): For some transitions, the direction in which the transition is performed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Displaying a Scene

- [scene](skview/scene.md): The scene currently presented by this view.
- [presentScene:](skview/presentscene%28__%29.md): Presents a scene.
- [presentScene:transition:](skview/presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
