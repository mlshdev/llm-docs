> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/removeaction(_:for:)](https://developer.apple.com/documentation/uikit/uicontrol/removeaction(_:for:))

# removeAction(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Removes the action from the set of passed control events.

## Declaration

```swift
func removeAction(_ action: UIAction, for controlEvents: UIControl.Event)
```

## See Also

### Managing the control’s targets and actions

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction(\_:for:)](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction(identifiedBy:for:)](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actions(forTarget:forControlEvent:)](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers(\_:)](enumerateeventhandlers%28__%29.md)
- [UIControl.Event](event.md): Constants describing the types of events possible for controls.

# removeAction:forControlEvents: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Removes the action from the set of passed control events.

## Declaration

```objectivec
- (void) removeAction:(UIAction *) action forControlEvents:(UIControlEvents) controlEvents;
```

## See Also

### Managing the control’s targets and actions

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction:forControlEvents:](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeActionForIdentifier:forControlEvents:](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actionsForTarget:forControlEvent:](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers:](enumerateeventhandlers_.md): Iterate over the event handlers installed on this control at the time this method is called. For each call, either actionHandler or action will be non-nil. controlEvents is always non-zero. Setting \*stop to YES will terminate the enumeration early. It is legal to manipulate the control’s event handlers within the block.
- [UIControlEvents](event.md): Constants describing the types of events possible for controls.
