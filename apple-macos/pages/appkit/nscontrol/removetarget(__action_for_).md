> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/removetarget(_:action:for:)](https://developer.apple.com/documentation/appkit/nscontrol/removetarget(_:action:for:))

# removeTarget(\_:action:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Stops the delivery of events to the specified target object.

## Declaration

```swift
func removeTarget(_ target: Any?, action: Selector?, for controlEvents: NSControl.Events)
```

## Parameters

- `target`: A target object registered with the control. Specify `nil` to remove the specified control events for all target objects.
- `action`: A selector identifying a registered action method. You may specify `nil` for this parameter.
- `controlEvents`: A bit mask specifying the control events to remove for the specified `target` object. For a list of possible constants, see [NSControl.Events](events.md).

<a id="Discussion"></a>

## Discussion

Use this method to prevent the delivery of control events to a target object. If you specify a valid object in the `target` parameter, this method stops the delivery of the specified events to all action methods associated with that object. If you specify `nil` for the `target` parameter, this method prevents the delivery of those events to all action methods of all target objects.

## See Also

### Handling Control Events

- [NSControl.Events](events.md): A set of events that a control can report to its target.
- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Registers a target-action pair for the specified control events.

# removeTarget:action:forControlEvents: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Stops the delivery of events to the specified target object.

## Declaration

```objectivec
- (void) removeTarget:(id) target action:(SEL) action forControlEvents:(NSControlEvents) controlEvents;
```

## Parameters

- `target`: A target object registered with the control. Specify `nil` to remove the specified control events for all target objects.
- `action`: A selector identifying a registered action method. You may specify `nil` for this parameter.
- `controlEvents`: A bit mask specifying the control events to remove for the specified `target` object. For a list of possible constants, see [NSControlEvents](events.md).

<a id="Discussion"></a>

## Discussion

Use this method to prevent the delivery of control events to a target object. If you specify a valid object in the `target` parameter, this method stops the delivery of the specified events to all action methods associated with that object. If you specify `nil` for the `target` parameter, this method prevents the delivery of those events to all action methods of all target objects.

## See Also

### Handling Control Events

- [NSControlEvents](events.md): A set of events that a control can report to its target.
- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Registers a target-action pair for the specified control events.
