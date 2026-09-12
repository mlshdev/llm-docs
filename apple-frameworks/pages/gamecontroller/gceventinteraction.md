> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gceventinteraction](https://developer.apple.com/documentation/gamecontroller/gceventinteraction)

# GCEventInteraction (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.

## Declaration

```swift
class GCEventInteraction
```

## Mentioned In

- [Discovering game controllers](discovering-game-controllers.md)

<a id="overview"></a>

## Overview

On visionOS, users can interact with your app using a game controller. By default, the system converts game controller actions into pinch events and sends them to the view the user is gazing at, its gesture recognizers, and then up the responder chain.

If you use the Game Controller framework to handle game controller events for part of your user interface, add an instance of `GCEventInteraction` to the root of that part of your app’s view hierarchy.  For example, if you are writing a game using Metal, add this interaction to the view that hosts your game’s `CAMetalLayer`.

> **Note**

> This class should not be subclassed.

## Topics

### Creating an interaction

- [init()](gceventinteraction/init%28%29.md)

### Receiving view events

- [receivesEventsInView](gceventinteraction/receiveseventsinview.md): A Boolean value that determines whether events are delivered exclusively through the Game Controller framework.
- [GameControllerEventHandlingOptions](gamecontrollereventhandlingoptions.md)

### Getting the event types

- [handledEventTypes](gceventinteraction/handledeventtypes.md): The types of game controller events that should be delivered through the Game Controller framework.
- [GCUIEventTypes](gcuieventtypes.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### Responding to a paused controller or controller event

- [controllerPausedHandler](gccontroller/controllerpausedhandler.md): Deprecated. The block that the framework calls when the user presses the pause button on the controller.
- [GCGameControllerSceneDelegate](gcgamecontrollerscenedelegate.md)

# GCEventInteraction (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An interaction that indicates the view’s intent to receive game controller events through the Game Controller framework.

## Declaration

```objectivec
@interface GCEventInteraction : NSObject
```

## Mentioned In

- [Discovering game controllers](discovering-game-controllers.md)

<a id="overview"></a>

## Overview

On visionOS, users can interact with your app using a game controller. By default, the system converts game controller actions into pinch events and sends them to the view the user is gazing at, its gesture recognizers, and then up the responder chain.

If you use the Game Controller framework to handle game controller events for part of your user interface, add an instance of `GCEventInteraction` to the root of that part of your app’s view hierarchy.  For example, if you are writing a game using Metal, add this interaction to the view that hosts your game’s `CAMetalLayer`.

> **Note**

> This class should not be subclassed.

## Topics

### Creating an interaction

- [init](gceventinteraction/init%28%29.md)

### Receiving view events

- [receivesEventsInView](gceventinteraction/receiveseventsinview.md): A Boolean value that determines whether events are delivered exclusively through the Game Controller framework.

### Getting the event types

- [handledEventTypes](gceventinteraction/handledeventtypes.md): The types of game controller events that should be delivered through the Game Controller framework.
- [GCUIEventTypes](gcuieventtypes.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### Responding to a paused controller or controller event

- [controllerPausedHandler](gccontroller/controllerpausedhandler.md): Deprecated. The block that the framework calls when the user presses the pause button on the controller.
- [GCGameControllerSceneDelegate](gcgamecontrollerscenedelegate.md)
