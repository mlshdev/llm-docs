> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/events/trackingentered](https://developer.apple.com/documentation/appkit/nscontrol/events/trackingentered)

# trackingEntered (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

An event where tracking transitions from outside to inside the bounds of the control.

## Declaration

```swift
static var trackingEntered: NSControl.Events { get }
```

## See Also

### Tracking events

- [trackingBegan](trackingbegan.md): A tracking began event in the control.
- [trackingRepeated](trackingrepeated.md): A repeated tracking began event in the control. For this event the click count is greater than one.
- [trackingInside](trackinginside.md): An event where the pointer or touch moves inside the bounds of the control.
- [trackingOutside](trackingoutside.md): An event where the pointer or touch moves outside the bounds of the control.
- [trackingExited](trackingexited.md): An event where tracking transitions from inside to outside the bounds of the control.
- [trackingEndedInside](trackingendedinside.md): A tracking ended event where the pointer or touch is inside the bounds of the control.
- [trackingEndedOutside](trackingendedoutside.md): A tracking ended event where the pointer or touch is outside the bounds of the control.
- [trackingCancelled](trackingcancelled.md): A system event canceling the current tracking for the control.

# NSControlEventTrackingEntered (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

An event where tracking transitions from outside to inside the bounds of the control.

## Declaration

```objectivec
NSControlEventTrackingEntered
```

## See Also

### Tracking events

- [NSControlEventTrackingBegan](trackingbegan.md): A tracking began event in the control.
- [NSControlEventTrackingRepeated](trackingrepeated.md): A repeated tracking began event in the control. For this event the click count is greater than one.
- [NSControlEventTrackingInside](trackinginside.md): An event where the pointer or touch moves inside the bounds of the control.
- [NSControlEventTrackingOutside](trackingoutside.md): An event where the pointer or touch moves outside the bounds of the control.
- [NSControlEventTrackingExited](trackingexited.md): An event where tracking transitions from inside to outside the bounds of the control.
- [NSControlEventTrackingEndedInside](trackingendedinside.md): A tracking ended event where the pointer or touch is inside the bounds of the control.
- [NSControlEventTrackingEndedOutside](trackingendedoutside.md): A tracking ended event where the pointer or touch is outside the bounds of the control.
- [NSControlEventTrackingCancelled](trackingcancelled.md): A system event canceling the current tracking for the control.
