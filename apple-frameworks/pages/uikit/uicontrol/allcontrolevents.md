> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/allcontrolevents](https://developer.apple.com/documentation/uikit/uicontrol/allcontrolevents)

# allControlEvents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the events for which the control has associated actions.

## Declaration

```swift
var allControlEvents: UIControl.Event { get }
```

<a id="return-value"></a>

## Return Value

A bitmask of constants indicating the events for which this control has associated actions. For a list of possible constants, see the [UIControl.Event](event.md) type.

<a id="Discussion"></a>

## Discussion

You can use this method to ascertain which control events trigger actions. More than one action method may be called for a given event.

## See Also

### Managing the control’s targets and actions

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction(\_:for:)](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction(\_:for:)](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeAction(identifiedBy:for:)](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actions(forTarget:forControlEvent:)](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [enumerateEventHandlers(\_:)](enumerateeventhandlers%28__%29.md)
- [UIControl.Event](event.md): Constants describing the types of events possible for controls.

# allControlEvents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the events for which the control has associated actions.

## Declaration

```objectivec
@property (nonatomic, readonly) UIControlEvents allControlEvents;
```

<a id="return-value"></a>

## Return Value

A bitmask of constants indicating the events for which this control has associated actions. For a list of possible constants, see the [UIControlEvents](event.md) type.

<a id="Discussion"></a>

## Discussion

You can use this method to ascertain which control events trigger actions. More than one action method may be called for a given event.

## See Also

### Managing the control’s targets and actions

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction:forControlEvents:](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction:forControlEvents:](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeActionForIdentifier:forControlEvents:](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actionsForTarget:forControlEvent:](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [enumerateEventHandlers:](enumerateeventhandlers_.md): Iterate over the event handlers installed on this control at the time this method is called. For each call, either actionHandler or action will be non-nil. controlEvents is always non-zero. Setting \*stop to YES will terminate the enumeration early. It is legal to manipulate the control’s event handlers within the block.
- [UIControlEvents](event.md): Constants describing the types of events possible for controls.
