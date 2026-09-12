> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/sendevent(_:)](https://developer.apple.com/documentation/uikit/uiapplication/sendevent(_:))

# sendEvent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dispatches an event to the appropriate responder objects in the app.

## Declaration

```swift
func sendEvent(_ event: UIEvent)
```

## Parameters

- `event`: A [UIEvent](../uievent.md) object encapsulating the information about an event, including the touches involved.

<a id="Discussion"></a>

## Discussion

If you require it, you can intercept incoming events by subclassing [UIApplication](../uiapplication.md) and overriding this method. For every event you intercept, you must dispatch it by calling `[super sendEvent:event]` after handling the event in your implementation.

## See Also

### Controlling and handling events

- [sendAction(\_:to:from:for:)](sendaction%28__to_from_for_%29.md): Sends an action message identified by the selector to a specified target.
- [applicationSupportsShakeToEdit](applicationsupportsshaketoedit.md): A Boolean value that determines whether shaking the device displays the undo-redo user interface.

# sendEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dispatches an event to the appropriate responder objects in the app.

## Declaration

```objectivec
- (void) sendEvent:(UIEvent *) event;
```

## Parameters

- `event`: A [UIEvent](../uievent.md) object encapsulating the information about an event, including the touches involved.

<a id="Discussion"></a>

## Discussion

If you require it, you can intercept incoming events by subclassing [UIApplication](../uiapplication.md) and overriding this method. For every event you intercept, you must dispatch it by calling `[super sendEvent:event]` after handling the event in your implementation.

## See Also

### Controlling and handling events

- [sendAction:to:from:forEvent:](sendaction%28__to_from_for_%29.md): Sends an action message identified by the selector to a specified target.
- [applicationSupportsShakeToEdit](applicationsupportsshaketoedit.md): A Boolean value that determines whether shaking the device displays the undo-redo user interface.
