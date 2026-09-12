> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktransition/doorsopenvertical(withduration:)](https://developer.apple.com/documentation/spritekit/sktransition/doorsopenvertical(withduration:))

# doorsOpenVertical(withDuration:) (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a transition where the new scene appears as a pair of opening vertical doors.

## Declaration

```swift
class func doorsOpenVertical(withDuration sec: TimeInterval) -> SKTransition
```

## Parameters

- `sec`: The duration of the transition.

<a id="return-value"></a>

## Return Value

A new transition.

## See Also

### Creating Transitions

- [Transitioning Between Two Scenes](../transitioning-between-two-scenes.md)
- [Configuring Whether Animations Play During the Transition](../configuring-whether-animations-play-during-the-transition.md)
- [crossFade(withDuration:)](crossfade%28withduration_%29.md): Creates a cross fade transition.
- [doorsCloseHorizontal(withDuration:)](doorsclosehorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing horizontal doors.
- [doorsCloseVertical(withDuration:)](doorsclosevertical%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing vertical doors.
- [doorsOpenHorizontal(withDuration:)](doorsopenhorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of opening horizontal doors.
- [doorway(withDuration:)](doorway%28withduration_%29.md): Creates a transition where the previous scene disappears as a pair of opening doors.
- [fade(with:duration:)](fade%28with_duration_%29.md): Creates a transition that first fades to a constant color and then fades to the new scene.
- [fade(withDuration:)](fade%28withduration_%29.md): Creates a transition that first fades to black and then fades to the new scene.
- [flipHorizontal(withDuration:)](fliphorizontal%28withduration_%29.md): Creates a transition where the two scenes are flipped across a horizontal line running through the center of the view.
- [flipVertical(withDuration:)](flipvertical%28withduration_%29.md): Creates a transition where the two scenes are flipped across a vertical line running through the center of the view.
- [moveIn(with:duration:)](movein%28with_duration_%29.md): Creates a transition where the new scene moves in on top of the old scene.
- [push(with:duration:)](push%28with_duration_%29.md): Creates a transition where the new scene moves in, pushing the old scene out of the view.
- [reveal(with:duration:)](reveal%28with_duration_%29.md): Creates a transition where the old scene moves out of the view, revealing the new scene underneath it.
- [init(ciFilter:duration:)](init%28cifilter_duration_%29-451za.md): Creates a transition that uses a Core Image filter to perform the transition.

# doorsOpenVerticalWithDuration: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a transition where the new scene appears as a pair of opening vertical doors.

## Declaration

```objectivec
+ (SKTransition *) doorsOpenVerticalWithDuration:(NSTimeInterval) sec;
```

## Parameters

- `sec`: The duration of the transition.

<a id="return-value"></a>

## Return Value

A new transition.

## See Also

### Creating Transitions

- [Transitioning Between Two Scenes](../transitioning-between-two-scenes.md)
- [Configuring Whether Animations Play During the Transition](../configuring-whether-animations-play-during-the-transition.md)
- [crossFadeWithDuration:](crossfade%28withduration_%29.md): Creates a cross fade transition.
- [doorsCloseHorizontalWithDuration:](doorsclosehorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing horizontal doors.
- [doorsCloseVerticalWithDuration:](doorsclosevertical%28withduration_%29.md): Creates a transition where the new scene appears as a pair of closing vertical doors.
- [doorsOpenHorizontalWithDuration:](doorsopenhorizontal%28withduration_%29.md): Creates a transition where the new scene appears as a pair of opening horizontal doors.
- [doorwayWithDuration:](doorway%28withduration_%29.md): Creates a transition where the previous scene disappears as a pair of opening doors.
- [fadeWithColor:duration:](fade%28with_duration_%29.md): Creates a transition that first fades to a constant color and then fades to the new scene.
- [fadeWithDuration:](fade%28withduration_%29.md): Creates a transition that first fades to black and then fades to the new scene.
- [flipHorizontalWithDuration:](fliphorizontal%28withduration_%29.md): Creates a transition where the two scenes are flipped across a horizontal line running through the center of the view.
- [flipVerticalWithDuration:](flipvertical%28withduration_%29.md): Creates a transition where the two scenes are flipped across a vertical line running through the center of the view.
- [moveInWithDirection:duration:](movein%28with_duration_%29.md): Creates a transition where the new scene moves in on top of the old scene.
- [pushWithDirection:duration:](push%28with_duration_%29.md): Creates a transition where the new scene moves in, pushing the old scene out of the view.
- [revealWithDirection:duration:](reveal%28with_duration_%29.md): Creates a transition where the old scene moves out of the view, revealing the new scene underneath it.
- [transitionWithCIFilter:duration:](init%28cifilter_duration_%29-451za.md): Creates a transition that uses a Core Image filter to perform the transition.
