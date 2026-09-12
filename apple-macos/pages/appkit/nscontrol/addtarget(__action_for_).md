> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/addtarget(_:action:for:)](https://developer.apple.com/documentation/appkit/nscontrol/addtarget(_:action:for:))

# addTarget(\_:action:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Registers a target-action pair for the specified control events.

## Declaration

```swift
func addTarget(_ target: Any?, action: Selector, for controlEvents: NSControl.Events)
```

## Parameters

- `target`: The object to receive the action message. Pass `nil` to send the action up the responder chain.
- `action`: The selector to invoke on `target` when the specified events occur. This parameter can’t be `nil`. The selector may include the sender, the event, or both as parameters, in that order.
- `controlEvents`: A bit mask of [NSControl.Events](events.md) values specifying which events initiate the action.

<a id="Discussion"></a>

## Discussion

You can call this method multiple times to register additional target-action pairs for the same or different events. You can also register multiple targets or multiple actions for the same event. The control holds a weak reference to each registered target.

## See Also

### Handling Control Events

- [NSControl.Events](events.md): A set of events that a control can report to its target.
- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.

# addTarget:action:forControlEvents: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Registers a target-action pair for the specified control events.

## Declaration

```objectivec
- (void) addTarget:(id) target action:(SEL) action forControlEvents:(NSControlEvents) controlEvents;
```

## Parameters

- `target`: The object to receive the action message. Pass `nil` to send the action up the responder chain.
- `action`: The selector to invoke on `target` when the specified events occur. This parameter can’t be `nil`. The selector may include the sender, the event, or both as parameters, in that order.
- `controlEvents`: A bit mask of [NSControlEvents](events.md) values specifying which events initiate the action.

<a id="Discussion"></a>

## Discussion

You can call this method multiple times to register additional target-action pairs for the same or different events. You can also register multiple targets or multiple actions for the same event. The control holds a weak reference to each registered target.

## See Also

### Handling Control Events

- [NSControlEvents](events.md): A set of events that a control can report to its target.
- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
