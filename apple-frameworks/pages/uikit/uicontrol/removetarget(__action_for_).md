> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/removetarget(_:action:for:)](https://developer.apple.com/documentation/uikit/uicontrol/removetarget(_:action:for:))

# removeTarget(\_:action:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stops the delivery of events to the specified target object.

## Declaration

```swift
func removeTarget(_ target: Any?, action: Selector?, for controlEvents: UIControl.Event)
```

## Parameters

- `target`: A target object registered with the control. Specify `nil` to remove the specified control events for all target objects.
- `action`: A selector identifying a registered action method. You may specify `nil` for this parameter.
- `controlEvents`: A bitmask specifying the control events that you want to remove for the specified `target` object. For a list of possible constants, see [UIControl.Event](event.md).

<a id="Discussion"></a>

## Discussion

Use this method to prevent the delivery of control events to target objects associated with control. If you specify a valid object in the `target` parameter, this method stops the delivery of the specified events to all action methods associated with that object. If you specify `nil` for the `target` parameter, this method prevents the delivery of those events to all action methods of all target objects.

Although the `action` parameter is not considered when stopping the delivery of events, you should specify an appropriate value anyway. If the specified target/action combination no longer has any valid control events associated with it, the control cleans up its corresponding internal data structures. Doing so can affect the set of objects returned by the [allTargets](alltargets.md) method.

## See Also

### Managing the control’s targets and actions

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction(\_:for:)](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction(\_:for:)](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeAction(identifiedBy:for:)](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actions(forTarget:forControlEvent:)](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers(\_:)](enumerateeventhandlers%28__%29.md)
- [UIControl.Event](event.md): Constants describing the types of events possible for controls.

# removeTarget:action:forControlEvents: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Stops the delivery of events to the specified target object.

## Declaration

```objectivec
- (void) removeTarget:(id) target action:(SEL) action forControlEvents:(UIControlEvents) controlEvents;
```

## Parameters

- `target`: A target object registered with the control. Specify `nil` to remove the specified control events for all target objects.
- `action`: A selector identifying a registered action method. You may specify `nil` for this parameter.
- `controlEvents`: A bitmask specifying the control events that you want to remove for the specified `target` object. For a list of possible constants, see [UIControlEvents](event.md).

<a id="Discussion"></a>

## Discussion

Use this method to prevent the delivery of control events to target objects associated with control. If you specify a valid object in the `target` parameter, this method stops the delivery of the specified events to all action methods associated with that object. If you specify `nil` for the `target` parameter, this method prevents the delivery of those events to all action methods of all target objects.

Although the `action` parameter is not considered when stopping the delivery of events, you should specify an appropriate value anyway. If the specified target/action combination no longer has any valid control events associated with it, the control cleans up its corresponding internal data structures. Doing so can affect the set of objects returned by the [allTargets](alltargets.md) method.

## See Also

### Managing the control’s targets and actions

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction:forControlEvents:](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction:forControlEvents:](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeActionForIdentifier:forControlEvents:](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actionsForTarget:forControlEvent:](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers:](enumerateeventhandlers_.md): Iterate over the event handlers installed on this control at the time this method is called. For each call, either actionHandler or action will be non-nil. controlEvents is always non-zero. Setting \*stop to YES will terminate the enumeration early. It is legal to manipulate the control’s event handlers within the block.
- [UIControlEvents](event.md): Constants describing the types of events possible for controls.
