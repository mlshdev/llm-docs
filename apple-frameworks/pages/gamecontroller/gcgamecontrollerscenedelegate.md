> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgamecontrollerscenedelegate](https://developer.apple.com/documentation/gamecontroller/gcgamecontrollerscenedelegate)

# GCGameControllerSceneDelegate (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

## Declaration

```swift
protocol GCGameControllerSceneDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [scene(\_:didActivateGameControllerWith:)](gcgamecontrollerscenedelegate/scene%28__didactivategamecontrollerwith_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to a paused controller or controller event

- [controllerPausedHandler](gccontroller/controllerpausedhandler.md): Deprecated. The block that the framework calls when the user presses the pause button on the controller.
- [GCEventInteraction](gceventinteraction.md): An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.

# GCGameControllerSceneDelegate (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

## Declaration

```objectivec
@protocol GCGameControllerSceneDelegate <NSObject>
```

## Topics

### Instance Methods

- [scene:didActivateGameControllerWithContext:](gcgamecontrollerscenedelegate/scene%28__didactivategamecontrollerwith_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to a paused controller or controller event

- [controllerPausedHandler](gccontroller/controllerpausedhandler.md): Deprecated. The block that the framework calls when the user presses the pause button on the controller.
- [GCEventInteraction](gceventinteraction.md): An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.
