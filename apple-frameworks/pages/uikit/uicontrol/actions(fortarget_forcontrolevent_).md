> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/actions(fortarget:forcontrolevent:)](https://developer.apple.com/documentation/uikit/uicontrol/actions(fortarget:forcontrolevent:))

# actions(forTarget:forControlEvent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the actions performed on a target object when the specified event occurs.

## Declaration

```swift
func actions(forTarget target: Any?, forControlEvent controlEvent: UIControl.Event) -> [String]?
```

## Parameters

- `target`: The target object—that is, an object that has an action method associated with this control. You must pass an explicit object for this method to return a meaningful result. Specifying `nil` always returns `nil`.
- `controlEvent`: A single control event constant representing the event for which you want the list of action methods. For a list of possible constants, see [UIControl.Event](event.md)

<a id="return-value"></a>

## Return Value

An array [NSString](../../foundation/nsstring.md) objects containing the selector names of the corresponding action methods, or `nil` if there are no action methods associated with the specified target object and control event.

<a id="Discussion"></a>

## Discussion

Use this method to determine what action methods are called on the specified object in response to a particular control event. You can use the [NSSelectorFromString(\_:)](../../foundation/nsselectorfromstring%28__%29.md) function to convert the returned strings to valid selectors, as needed.

## See Also

### Related Documentation

- [sendAction(\_:to:for:)](sendaction%28__to_for_%29.md): Calls the specified action method.
- [sendActions(for:)](sendactions%28for_%29.md): Calls the action methods associated with the specified events.

### Managing the control’s targets and actions

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction(\_:for:)](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction(\_:for:)](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeAction(identifiedBy:for:)](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers(\_:)](enumerateeventhandlers%28__%29.md)
- [UIControl.Event](event.md): Constants describing the types of events possible for controls.

# actionsForTarget:forControlEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the actions performed on a target object when the specified event occurs.

## Declaration

```objectivec
- (NSArray<NSString *> *) actionsForTarget:(id) target forControlEvent:(UIControlEvents) controlEvent;
```

## Parameters

- `target`: The target object—that is, an object that has an action method associated with this control. You must pass an explicit object for this method to return a meaningful result. Specifying `nil` always returns `nil`.
- `controlEvent`: A single control event constant representing the event for which you want the list of action methods. For a list of possible constants, see [UIControlEvents](event.md)

<a id="return-value"></a>

## Return Value

An array [NSString](../../foundation/nsstring.md) objects containing the selector names of the corresponding action methods, or `nil` if there are no action methods associated with the specified target object and control event.

<a id="Discussion"></a>

## Discussion

Use this method to determine what action methods are called on the specified object in response to a particular control event. You can use the [NSSelectorFromString](../../foundation/nsselectorfromstring%28__%29.md) function to convert the returned strings to valid selectors, as needed.

## See Also

### Related Documentation

- [sendAction:to:forEvent:](sendaction%28__to_for_%29.md): Calls the specified action method.
- [sendActionsForControlEvents:](sendactions%28for_%29.md): Calls the action methods associated with the specified events.

### Managing the control’s targets and actions

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction:forControlEvents:](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction:forControlEvents:](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeActionForIdentifier:forControlEvents:](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers:](enumerateeventhandlers_.md): Iterate over the event handlers installed on this control at the time this method is called. For each call, either actionHandler or action will be non-nil. controlEvents is always non-zero. Setting \*stop to YES will terminate the enumeration early. It is legal to manipulate the control’s event handlers within the block.
- [UIControlEvents](event.md): Constants describing the types of events possible for controls.
