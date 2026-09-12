> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/addtarget(_:action:for:)](https://developer.apple.com/documentation/uikit/uicontrol/addtarget(_:action:for:))

# addTarget(\_:action:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Associates a target object and action method with the control.

## Declaration

```swift
func addTarget(_ target: Any?, action: Selector, for controlEvents: UIControl.Event)
```

## Parameters

- `target`: The target object—that is, the object whose `action` method is called. If you specify `nil`, UIKit searches the responder chain for an object that responds to the specified action message and delivers the message to that object.
- `action`: A selector identifying the action method to be called. You may specify a selector whose signature matches any of the signatures in the code example in [UIControl](../uicontrol.md). This parameter must not be `nil`.
- `controlEvents`: A bitmask specifying the control-specific events for which the action method is called. Always specify at least one constant. For a list of possible constants, see [UIControl.Event](event.md).

## Mentioned In

- [Responding to control-based events using target-action](../responding-to-control-based-events-using-target-action.md)

<a id="Discussion"></a>

## Discussion

You may call this method multiple times to configure multiple targets and actions for the control. It is also safe to call this method multiple times with the same values for the `target` and `action` parameters. The control maintains a list of its attached targets and actions along with the events each supports.

The control does not retain the object in the `target` parameter. It is your responsibility to maintain a strong reference to the target object while it is attached to a control.

Specifying a value of `0` for the `controlEvents` parameter does not prevent events from being sent to a previously registered `target` and `action` method. To stop the delivery of events, always call the [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md) method.

## See Also

### Managing the control’s targets and actions

- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction(\_:for:)](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction(\_:for:)](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeAction(identifiedBy:for:)](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actions(forTarget:forControlEvent:)](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers(\_:)](enumerateeventhandlers%28__%29.md)
- [UIControl.Event](event.md): Constants describing the types of events possible for controls.

# addTarget:action:forControlEvents: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Associates a target object and action method with the control.

## Declaration

```objectivec
- (void) addTarget:(id) target action:(SEL) action forControlEvents:(UIControlEvents) controlEvents;
```

## Parameters

- `target`: The target object—that is, the object whose `action` method is called. If you specify `nil`, UIKit searches the responder chain for an object that responds to the specified action message and delivers the message to that object.
- `action`: A selector identifying the action method to be called. You may specify a selector whose signature matches any of the signatures in the code example in [UIControl](../uicontrol.md). This parameter must not be `nil`.
- `controlEvents`: A bitmask specifying the control-specific events for which the action method is called. Always specify at least one constant. For a list of possible constants, see [UIControlEvents](event.md).

## Mentioned In

- [Responding to control-based events using target-action](../responding-to-control-based-events-using-target-action.md)

<a id="Discussion"></a>

## Discussion

You may call this method multiple times to configure multiple targets and actions for the control. It is also safe to call this method multiple times with the same values for the `target` and `action` parameters. The control maintains a list of its attached targets and actions along with the events each supports.

The control does not retain the object in the `target` parameter. It is your responsibility to maintain a strong reference to the target object while it is attached to a control.

Specifying a value of `0` for the `controlEvents` parameter does not prevent events from being sent to a previously registered `target` and `action` method. To stop the delivery of events, always call the [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md) method.

## See Also

### Managing the control’s targets and actions

- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction:forControlEvents:](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction:forControlEvents:](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeActionForIdentifier:forControlEvents:](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actionsForTarget:forControlEvent:](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers:](enumerateeventhandlers_.md): Iterate over the event handlers installed on this control at the time this method is called. For each call, either actionHandler or action will be non-nil. controlEvents is always non-zero. Setting \*stop to YES will terminate the enumeration early. It is legal to manipulate the control’s event handlers within the block.
- [UIControlEvents](event.md): Constants describing the types of events possible for controls.
