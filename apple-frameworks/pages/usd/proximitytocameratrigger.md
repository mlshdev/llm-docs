> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/proximitytocameratrigger](https://developer.apple.com/documentation/usd/proximitytocameratrigger)

# ProximityToCameraTrigger

A trigger that fires when the camera crosses the distance threshold of an object.

<a id="overview"></a>

## Overview

The runtime fires this trigger one time when the distance threshold it specifies is met. The runtime can fire the trigger again only if the user moves away from the threshold and then returns.

<a id="Declaration"></a>

### Declaration

```swift
class Preliminary_Trigger "ProximityToCameraTrigger"
```

## Topics

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
- [distance](distance.md): A threshold that measures the user’s proximity to one or more prims.

## See Also

### Triggers

- [Preliminary_Trigger](preliminary-trigger.md): A condition that, when met, performs an action.
- [CollideTrigger](collidetrigger.md): A trigger that activates when specified objects collide.
- [SceneTransitionTrigger](scenetransitiontrigger.md): A trigger that fires during scene transitions.
- [TapGestureTrigger](tapgesturetrigger.md): A trigger that fires when the user taps.
- [NotificationTrigger](notificationtrigger.md): A trigger that fires when an app posts a notification.
