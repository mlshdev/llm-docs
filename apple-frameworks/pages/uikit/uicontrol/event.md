> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/event](https://developer.apple.com/documentation/uikit/uicontrol/event)

# UIControl.Event (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants describing the types of events possible for controls.

## Declaration

```swift
struct Event
```

## Mentioned In

- [Responding to control-based events using target-action](../responding-to-control-based-events-using-target-action.md)

<a id="overview"></a>

## Overview

You set up a control so that it sends an action message to a target object by associating both target and action with one or more control events. To do this, send [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md) to the control for each target-action pair you want to specify.

## Topics

### Constants

- [touchDown](event/touchdown.md): A touch-down event in the control.
- [touchDownRepeat](event/touchdownrepeat.md): A repeated touch-down event in the control; for this event the value of the UITouch `tapCount` method is greater than one.
- [touchDragInside](event/touchdraginside.md): An event where a finger is dragged inside the bounds of the control.
- [touchDragOutside](event/touchdragoutside.md): An event where a finger is dragged just outside the bounds of the control.
- [touchDragEnter](event/touchdragenter.md): An event where a finger is dragged into the bounds of the control.
- [touchDragExit](event/touchdragexit.md): An event where a finger is dragged from within a control to outside its bounds.
- [touchUpInside](event/touchupinside.md): A touch-up event in the control where the finger is inside the bounds of the control.
- [touchUpOutside](event/touchupoutside.md): A touch-up event in the control where the finger is outside the bounds of the control.
- [touchCancel](event/touchcancel.md): A system event canceling the current touches for the control.
- [valueChanged](event/valuechanged.md): A touch dragging or otherwise manipulating a control, causing it to emit a series of different values.
- [menuActionTriggered](event/menuactiontriggered.md): A menu action has triggered prior to the menu being presented.
- [primaryActionTriggered](event/primaryactiontriggered.md): A semantic action triggered by buttons.
- [editingDidBegin](event/editingdidbegin.md): A touch initiating an editing session in a text field by entering its bounds.
- [editingChanged](event/editingchanged.md): A touch making an editing change in a text field.
- [editingDidEnd](event/editingdidend.md): A touch ending an editing session in a text field by leaving its bounds.
- [editingDidEndOnExit](event/editingdidendonexit.md): A touch ending an editing session in a text field.
- [allTouchEvents](event/alltouchevents.md): All touch events.
- [allEditingEvents](event/alleditingevents.md): All editing touches for text fields.
- [applicationReserved](event/applicationreserved.md): A range of control-event values available for app use.
- [systemReserved](event/systemreserved.md): A range of control-event values reserved for internal framework use.
- [allEvents](event/allevents.md): All events, including system events.

### Initializers

- [init(rawValue:)](event/init%28rawvalue_%29.md): Creates a control event with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the control’s targets and actions

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction(\_:for:)](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction(\_:for:)](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeAction(identifiedBy:for:)](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actions(forTarget:forControlEvent:)](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers(\_:)](enumerateeventhandlers%28__%29.md)

# UIControlEvents (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants describing the types of events possible for controls.

## Declaration

```objectivec
enum UIControlEvents : NSUInteger;
```

## Mentioned In

- [Responding to control-based events using target-action](../responding-to-control-based-events-using-target-action.md)

<a id="overview"></a>

## Overview

You set up a control so that it sends an action message to a target object by associating both target and action with one or more control events. To do this, send [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md) to the control for each target-action pair you want to specify.

## Topics

### Constants

- [UIControlEventTouchDown](event/touchdown.md): A touch-down event in the control.
- [UIControlEventTouchDownRepeat](event/touchdownrepeat.md): A repeated touch-down event in the control; for this event the value of the UITouch `tapCount` method is greater than one.
- [UIControlEventTouchDragInside](event/touchdraginside.md): An event where a finger is dragged inside the bounds of the control.
- [UIControlEventTouchDragOutside](event/touchdragoutside.md): An event where a finger is dragged just outside the bounds of the control.
- [UIControlEventTouchDragEnter](event/touchdragenter.md): An event where a finger is dragged into the bounds of the control.
- [UIControlEventTouchDragExit](event/touchdragexit.md): An event where a finger is dragged from within a control to outside its bounds.
- [UIControlEventTouchUpInside](event/touchupinside.md): A touch-up event in the control where the finger is inside the bounds of the control.
- [UIControlEventTouchUpOutside](event/touchupoutside.md): A touch-up event in the control where the finger is outside the bounds of the control.
- [UIControlEventTouchCancel](event/touchcancel.md): A system event canceling the current touches for the control.
- [UIControlEventValueChanged](event/valuechanged.md): A touch dragging or otherwise manipulating a control, causing it to emit a series of different values.
- [UIControlEventMenuActionTriggered](event/menuactiontriggered.md): A menu action has triggered prior to the menu being presented.
- [UIControlEventPrimaryActionTriggered](event/primaryactiontriggered.md): A semantic action triggered by buttons.
- [UIControlEventEditingDidBegin](event/editingdidbegin.md): A touch initiating an editing session in a text field by entering its bounds.
- [UIControlEventEditingChanged](event/editingchanged.md): A touch making an editing change in a text field.
- [UIControlEventEditingDidEnd](event/editingdidend.md): A touch ending an editing session in a text field by leaving its bounds.
- [UIControlEventEditingDidEndOnExit](event/editingdidendonexit.md): A touch ending an editing session in a text field.
- [UIControlEventAllTouchEvents](event/alltouchevents.md): All touch events.
- [UIControlEventAllEditingEvents](event/alleditingevents.md): All editing touches for text fields.
- [UIControlEventApplicationReserved](event/applicationreserved.md): A range of control-event values available for app use.
- [UIControlEventSystemReserved](event/systemreserved.md): A range of control-event values reserved for internal framework use.
- [UIControlEventAllEvents](event/allevents.md): All events, including system events.

## See Also

### Managing the control’s targets and actions

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.
- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
- [allTargets](alltargets.md): Returns all target objects associated with the control.
- [addAction:forControlEvents:](addaction%28__for_%29.md): Adds the UIAction to a given event. UIActions are uniqued based on their identifier, and subsequent actions with the same identifier replace previously added actions. You may add multiple UIActions for corresponding controlEvents, and you may add the same action to multiple controlEvents.
- [removeAction:forControlEvents:](removeaction%28__for_%29.md): Removes the action from the set of passed control events.
- [removeActionForIdentifier:forControlEvents:](removeaction%28identifiedby_for_%29.md): Removes the action with the provided identifier from the set of passed control events.
- [actionsForTarget:forControlEvent:](actions%28fortarget_forcontrolevent_%29.md): Returns the actions performed on a target object when the specified event occurs.
- [allControlEvents](allcontrolevents.md): Returns the events for which the control has associated actions.
- [enumerateEventHandlers:](enumerateeventhandlers_.md): Iterate over the event handlers installed on this control at the time this method is called. For each call, either actionHandler or action will be non-nil. controlEvents is always non-zero. Setting \*stop to YES will terminate the enumeration early. It is legal to manipulate the control’s event handlers within the block.
