> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/controllerpausedhandler](https://developer.apple.com/documentation/gamecontroller/gccontroller/controllerpausedhandler)

# controllerPausedHandler (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The block that the framework calls when the user presses the pause button on the controller.

> Instead use the Menu button found on the controller’s profile, if it exists.

## Declaration

```swift
var controllerPausedHandler: ((GCController) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

Implement this handler to toggle between pausing and resuming gameplay. Provide an interface that displays when the user pauses the game, and allows the user to resume gameplay. If your game suspends gameplay for some other reason, also implement this handler to resume gameplay when it’s possible.

## See Also

### Responding to a paused controller or controller event

- [GCGameControllerSceneDelegate](../gcgamecontrollerscenedelegate.md)
- [GCEventInteraction](../gceventinteraction.md): An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.

# controllerPausedHandler (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The block that the framework calls when the user presses the pause button on the controller.

> Instead use the Menu button found on the controller’s profile, if it exists.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^controllerPausedHandler)(GCController *controller);
```

<a id="Discussion"></a>

## Discussion

Implement this handler to toggle between pausing and resuming gameplay. Provide an interface that displays when the user pauses the game, and allows the user to resume gameplay. If your game suspends gameplay for some other reason, also implement this handler to resume gameplay when it’s possible.

## See Also

### Responding to a paused controller or controller event

- [GCGameControllerSceneDelegate](../gcgamecontrollerscenedelegate.md)
- [GCEventInteraction](../gceventinteraction.md): An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.
