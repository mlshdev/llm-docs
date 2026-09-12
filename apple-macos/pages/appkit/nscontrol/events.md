> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/events](https://developer.apple.com/documentation/appkit/nscontrol/events)

# NSControl.Events (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 11.0+

A set of events that a control can report to its target.

## Declaration

```swift
struct Events
```

<a id="Discussion"></a>

## Discussion

You set up a control to send an action message to a target object by associating both target and action with one or more control events. To do this, call [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md) on the control for each target-action pair you want to specify.

```swift
let slider = NSSlider()
slider.addTarget(self, action: #selector(sliderValueChanged), for: .valueChanged)

let button = NSButton()
button.addTarget(self, action: #selector(buttonActivated), for: [.primaryActionTriggered, .menuActionTriggered])
```

Use tracking events to observe the progress of mouse interaction as it unfolds — for example, to respond to a drag in progress rather than only on completion. Use semantic events like [valueChanged](events/valuechanged.md), [primaryActionTriggered](events/primaryactiontriggered.md), or [menuActionTriggered](events/menuactiontriggered.md) to respond to higher-level, input-device-independent meanings. [applicationReserved](events/applicationreserved.md) is a range of bits available for app use.

## Topics

### Tracking events

- [trackingBegan](events/trackingbegan.md): A tracking began event in the control.
- [trackingRepeated](events/trackingrepeated.md): A repeated tracking began event in the control. For this event the click count is greater than one.
- [trackingInside](events/trackinginside.md): An event where the pointer or touch moves inside the bounds of the control.
- [trackingOutside](events/trackingoutside.md): An event where the pointer or touch moves outside the bounds of the control.
- [trackingEntered](events/trackingentered.md): An event where tracking transitions from outside to inside the bounds of the control.
- [trackingExited](events/trackingexited.md): An event where tracking transitions from inside to outside the bounds of the control.
- [trackingEndedInside](events/trackingendedinside.md): A tracking ended event where the pointer or touch is inside the bounds of the control.
- [trackingEndedOutside](events/trackingendedoutside.md): A tracking ended event where the pointer or touch is outside the bounds of the control.
- [trackingCancelled](events/trackingcancelled.md): A system event canceling the current tracking for the control.

### Semantic events

- [valueChanged](events/valuechanged.md): An event where dragging or otherwise manipulating a control causes it to emit a series of different values.
- [primaryActionTriggered](events/primaryactiontriggered.md): A semantic action triggered by buttons.
- [menuActionTriggered](events/menuactiontriggered.md): A menu action has triggered prior to the menu being presented.

### Aggregate events

- [allTrackingEvents](events/alltrackingevents.md): All tracking events.
- [allEvents](events/allevents.md): All events, including system events.

### Reserved ranges

- [applicationReserved](events/applicationreserved.md): A range of control-event values available for app use.
- [systemReserved](events/systemreserved.md): A range of control-event values reserved for internal framework use.

### Initializers

- [init(rawValue:)](events/init%28rawvalue_%29.md)

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

### Handling Control Events

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Registers a target-action pair for the specified control events.
- [removeTarget(\_:action:for:)](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.

# NSControlEvents (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

A set of events that a control can report to its target.

## Declaration

```objectivec
enum NSControlEvents : NSUInteger;
```

<a id="Discussion"></a>

## Discussion

You set up a control to send an action message to a target object by associating both target and action with one or more control events. To do this, call [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md) on the control for each target-action pair you want to specify.

```swift
let slider = NSSlider()
slider.addTarget(self, action: #selector(sliderValueChanged), for: .valueChanged)

let button = NSButton()
button.addTarget(self, action: #selector(buttonActivated), for: [.primaryActionTriggered, .menuActionTriggered])
```

Use tracking events to observe the progress of mouse interaction as it unfolds — for example, to respond to a drag in progress rather than only on completion. Use semantic events like [NSControlEventValueChanged](events/valuechanged.md), [NSControlEventPrimaryActionTriggered](events/primaryactiontriggered.md), or [NSControlEventMenuActionTriggered](events/menuactiontriggered.md) to respond to higher-level, input-device-independent meanings. [NSControlEventApplicationReserved](events/applicationreserved.md) is a range of bits available for app use.

## Topics

### Tracking events

- [NSControlEventTrackingBegan](events/trackingbegan.md): A tracking began event in the control.
- [NSControlEventTrackingRepeated](events/trackingrepeated.md): A repeated tracking began event in the control. For this event the click count is greater than one.
- [NSControlEventTrackingInside](events/trackinginside.md): An event where the pointer or touch moves inside the bounds of the control.
- [NSControlEventTrackingOutside](events/trackingoutside.md): An event where the pointer or touch moves outside the bounds of the control.
- [NSControlEventTrackingEntered](events/trackingentered.md): An event where tracking transitions from outside to inside the bounds of the control.
- [NSControlEventTrackingExited](events/trackingexited.md): An event where tracking transitions from inside to outside the bounds of the control.
- [NSControlEventTrackingEndedInside](events/trackingendedinside.md): A tracking ended event where the pointer or touch is inside the bounds of the control.
- [NSControlEventTrackingEndedOutside](events/trackingendedoutside.md): A tracking ended event where the pointer or touch is outside the bounds of the control.
- [NSControlEventTrackingCancelled](events/trackingcancelled.md): A system event canceling the current tracking for the control.

### Semantic events

- [NSControlEventValueChanged](events/valuechanged.md): An event where dragging or otherwise manipulating a control causes it to emit a series of different values.
- [NSControlEventPrimaryActionTriggered](events/primaryactiontriggered.md): A semantic action triggered by buttons.
- [NSControlEventMenuActionTriggered](events/menuactiontriggered.md): A menu action has triggered prior to the menu being presented.

### Aggregate events

- [NSControlEventAllTrackingEvents](events/alltrackingevents.md): All tracking events.
- [NSControlEventAllEvents](events/allevents.md): All events, including system events.

### Reserved ranges

- [NSControlEventApplicationReserved](events/applicationreserved.md): A range of control-event values available for app use.
- [NSControlEventSystemReserved](events/systemreserved.md): A range of control-event values reserved for internal framework use.

## See Also

### Handling Control Events

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Registers a target-action pair for the specified control events.
- [removeTarget:action:forControlEvents:](removetarget%28__action_for_%29.md): Stops the delivery of events to the specified target object.
