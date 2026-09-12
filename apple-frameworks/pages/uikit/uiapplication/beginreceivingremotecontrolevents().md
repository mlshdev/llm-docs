> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/beginreceivingremotecontrolevents()](https://developer.apple.com/documentation/uikit/uiapplication/beginreceivingremotecontrolevents())

# beginReceivingRemoteControlEvents() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the app to begin receiving remote-control events.

## Declaration

```swift
func beginReceivingRemoteControlEvents()
```

<a id="Discussion"></a>

## Discussion

In iOS 7.1 and later, use the shared [MPRemoteCommandCenter](../../mediaplayer/mpremotecommandcenter.md) object to register for remote control events. You do not need to call this method when using the shared command center object.

This method starts the delivery of remote control events using the responder chain. Remote-control events originate as commands issued by headsets and external accessories that are intended to control multimedia presented by an app. To stop the reception of remote-control events, you must call [endReceivingRemoteControlEvents()](endreceivingremotecontrolevents%28%29.md).

## See Also

### Receiving remote control events

- [endReceivingRemoteControlEvents()](endreceivingremotecontrolevents%28%29.md): Tells the app to stop receiving remote-control events.

# beginReceivingRemoteControlEvents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells the app to begin receiving remote-control events.

## Declaration

```objectivec
- (void) beginReceivingRemoteControlEvents;
```

<a id="Discussion"></a>

## Discussion

In iOS 7.1 and later, use the shared [MPRemoteCommandCenter](../../mediaplayer/mpremotecommandcenter.md) object to register for remote control events. You do not need to call this method when using the shared command center object.

This method starts the delivery of remote control events using the responder chain. Remote-control events originate as commands issued by headsets and external accessories that are intended to control multimedia presented by an app. To stop the reception of remote-control events, you must call [endReceivingRemoteControlEvents](endreceivingremotecontrolevents%28%29.md).

## See Also

### Receiving remote control events

- [endReceivingRemoteControlEvents](endreceivingremotecontrolevents%28%29.md): Tells the app to stop receiving remote-control events.
