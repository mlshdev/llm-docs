> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/remotecontrolreceived(with:)](https://developer.apple.com/documentation/uikit/uiresponder/remotecontrolreceived(with:))

# remoteControlReceived(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the object when a remote-control event is received.

## Declaration

```swift
func remoteControlReceived(with event: UIEvent?)
```

## Parameters

- `event`: An event object encapsulating a remote-control command. Remote-control events have a type of [UIEvent.EventType.remoteControl](../uievent/eventtype/remotecontrol.md).

<a id="Discussion"></a>

## Discussion

Remote-control events originate as commands from external accessories, including headsets. An app responds to these commands by controlling audio or video media presented to the user. The receiving responder object should examine the [subtype](../uievent/subtype.md) of `event` to determine the intended command — for example, *play* ([UIEvent.EventSubtype.remoteControlPlay](../uievent/eventsubtype/remotecontrolplay.md)) — and then proceed accordingly.

To allow delivery of remote-control events, you must call the [beginReceivingRemoteControlEvents()](../uiapplication/beginreceivingremotecontrolevents%28%29.md) method of [UIApplication](../uiapplication.md). To turn off delivery of remote-control events, call the [endReceivingRemoteControlEvents()](../uiapplication/endreceivingremotecontrolevents%28%29.md) method.

# remoteControlReceivedWithEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the object when a remote-control event is received.

## Declaration

```objectivec
- (void) remoteControlReceivedWithEvent:(UIEvent *) event;
```

## Parameters

- `event`: An event object encapsulating a remote-control command. Remote-control events have a type of [UIEventTypeRemoteControl](../uievent/eventtype/remotecontrol.md).

<a id="Discussion"></a>

## Discussion

Remote-control events originate as commands from external accessories, including headsets. An app responds to these commands by controlling audio or video media presented to the user. The receiving responder object should examine the [subtype](../uievent/subtype.md) of `event` to determine the intended command — for example, *play* ([UIEventSubtypeRemoteControlPlay](../uievent/eventsubtype/remotecontrolplay.md)) — and then proceed accordingly.

To allow delivery of remote-control events, you must call the [beginReceivingRemoteControlEvents](../uiapplication/beginreceivingremotecontrolevents%28%29.md) method of [UIApplication](../uiapplication.md). To turn off delivery of remote-control events, call the [endReceivingRemoteControlEvents](../uiapplication/endreceivingremotecontrolevents%28%29.md) method.
