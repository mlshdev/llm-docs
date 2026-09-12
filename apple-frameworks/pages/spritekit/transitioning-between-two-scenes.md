> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/transitioning-between-two-scenes](https://developer.apple.com/documentation/spritekit/transitioning-between-two-scenes)

# Transitioning Between Two Scenes (Swift)

**Framework:** SpriteKit  
**Kind:** Article

<a id="Overview"></a>

## Overview

Typically, you transition to a new scene based on gameplay or user input. For example, if the user presses a button in your main menu scene, you might transition to a new scene to configure the match the player wants to play.

Listing 1 shows how you might implement the event handler in a sprite. The handler first runs an animation on itself to highlight the button (not described here). Then, it creates a transition object and the new scene. Finally, it calls the view to present the new scene. The transition means that this change is animated.

Listing 1. Transitioning to a new scene

**Swift**

```swift
override func mouseUp(with event: NSEvent) {
    run(buttonPressAnimation)
    let reveal = SKTransition.reveal(with: .down,
                                     duration: 1)
    let newScene = GameConfigScene(size: CGSize(width: 1024, height: 768))
    
    scene.view.presentScene(newScene,
                            transition: reveal)
}
```

**Obj-C**

```objc
- (void)mouseUp:(NSEvent *)theEvent
{
    [self runAction: self.buttonPressAnimation];
    SKTransition *reveal = [SKTransition revealWithDirection:SKTransitionDirectionDown duration:1.0];
    GameConfigScene *newScene = [[GameConfigScene alloc] initWithSize: CGSizeMake(1024,768)]];
    [self.scene.view presentScene: newScene transition: reveal];
}
```

When the transition occurs, the scene property is immediately updated to point to the new scene. Then, the animation occurs. Finally, the strong reference to the old scene is removed. If you need to keep the scene around after the transition occurs, your app needs to keep its own strong reference to the old scene.

When organizing your game, it can be helpful to create a diagram that shows all the scenes in a game, the transitions that occur between scenes, and the data that must be passed to the new scene when a transition occurs. Unlike view controllers in iOS, SpriteKit does not provide a built-in mechanism for passing data between scenes. If you need to provide data during a scene transition, you need to implement your own mechanism to configure the new scene. Typically, this means defining custom methods and properties on each scene.

## See Also

### Creating Transitions

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

# Transitioning Between Two Scenes (Objective-C)

**Framework:** SpriteKit  
**Kind:** Article

<a id="Overview"></a>

## Overview

Typically, you transition to a new scene based on gameplay or user input. For example, if the user presses a button in your main menu scene, you might transition to a new scene to configure the match the player wants to play.

Listing 1 shows how you might implement the event handler in a sprite. The handler first runs an animation on itself to highlight the button (not described here). Then, it creates a transition object and the new scene. Finally, it calls the view to present the new scene. The transition means that this change is animated.

Listing 1. Transitioning to a new scene

**Swift**

```swift
override func mouseUp(with event: NSEvent) {
    run(buttonPressAnimation)
    let reveal = SKTransition.reveal(with: .down,
                                     duration: 1)
    let newScene = GameConfigScene(size: CGSize(width: 1024, height: 768))
    
    scene.view.presentScene(newScene,
                            transition: reveal)
}
```

**Obj-C**

```objc
- (void)mouseUp:(NSEvent *)theEvent
{
    [self runAction: self.buttonPressAnimation];
    SKTransition *reveal = [SKTransition revealWithDirection:SKTransitionDirectionDown duration:1.0];
    GameConfigScene *newScene = [[GameConfigScene alloc] initWithSize: CGSizeMake(1024,768)]];
    [self.scene.view presentScene: newScene transition: reveal];
}
```

When the transition occurs, the scene property is immediately updated to point to the new scene. Then, the animation occurs. Finally, the strong reference to the old scene is removed. If you need to keep the scene around after the transition occurs, your app needs to keep its own strong reference to the old scene.

When organizing your game, it can be helpful to create a diagram that shows all the scenes in a game, the transitions that occur between scenes, and the data that must be passed to the new scene when a transition occurs. Unlike view controllers in iOS, SpriteKit does not provide a built-in mechanism for passing data between scenes. If you need to provide data during a scene transition, you need to implement your own mechanism to configure the new scene. Typically, this means defining custom methods and properties on each scene.

## See Also

### Creating Transitions

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
