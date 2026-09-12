> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/events/trackingrepeated](https://developer.apple.com/documentation/appkit/nscontrol/events/trackingrepeated)

# trackingRepeated (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

A repeated tracking began event in the control. For this event the click count is greater than one.

## Declaration

```swift
static var trackingRepeated: NSControl.Events { get }
```

## See Also

### Tracking events

- [trackingBegan](trackingbegan.md): A tracking began event in the control.
- [trackingInside](trackinginside.md): An event where the pointer or touch moves inside the bounds of the control.
- [trackingOutside](trackingoutside.md): An event where the pointer or touch moves outside the bounds of the control.
- [trackingEntered](trackingentered.md): An event where tracking transitions from outside to inside the bounds of the control.
- [trackingExited](trackingexited.md): An event where tracking transitions from inside to outside the bounds of the control.
- [trackingEndedInside](trackingendedinside.md): A tracking ended event where the pointer or touch is inside the bounds of the control.
- [trackingEndedOutside](trackingendedoutside.md): A tracking ended event where the pointer or touch is outside the bounds of the control.
- [trackingCancelled](trackingcancelled.md): A system event canceling the current tracking for the control.

# NSControlEventTrackingRepeated (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

A repeated tracking began event in the control. For this event the click count is greater than one.

## Declaration

```objectivec
NSControlEventTrackingRepeated
```

## See Also

### Tracking events

- [NSControlEventTrackingBegan](trackingbegan.md): A tracking began event in the control.
- [NSControlEventTrackingInside](trackinginside.md): An event where the pointer or touch moves inside the bounds of the control.
- [NSControlEventTrackingOutside](trackingoutside.md): An event where the pointer or touch moves outside the bounds of the control.
- [NSControlEventTrackingEntered](trackingentered.md): An event where tracking transitions from outside to inside the bounds of the control.
- [NSControlEventTrackingExited](trackingexited.md): An event where tracking transitions from inside to outside the bounds of the control.
- [NSControlEventTrackingEndedInside](trackingendedinside.md): A tracking ended event where the pointer or touch is inside the bounds of the control.
- [NSControlEventTrackingEndedOutside](trackingendedoutside.md): A tracking ended event where the pointer or touch is outside the bounds of the control.
- [NSControlEventTrackingCancelled](trackingcancelled.md): A system event canceling the current tracking for the control.
