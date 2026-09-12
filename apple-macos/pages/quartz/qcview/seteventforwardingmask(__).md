> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/seteventforwardingmask(_:)](https://developer.apple.com/documentation/quartz/qcview/seteventforwardingmask(_:))

# setEventForwardingMask(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the mask used to filter which types of events are forwarded from the view to the composition during rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func setEventForwardingMask(_ mask: Int)
```

## Parameters

- `mask`: An event filtering mask. The mask can be a combination of any of the mask constants listed below, or the constant `NSAnyEventMask`.

  | Event | Description |
  | --- | --- |
  | `NSLeftMouseDownMask` | The user pressed the left button. |
  | `NSLeftMouseDraggedMask` | The user moved the mouse with the left button down. |
  | `NSLeftMouseUpMask` | The user released the left button. |
  | `NSRightMouseDownMask` | The user pressed the right button. |
  | `NSRightMouseDraggedMask` | The user moved the mouse with the right button down. |
  | `NSRightMouseUpMask` | The user released the right button. |
  | `NSOtherMouseDownMask` | The user pressed the middle button, or some button other than the left or right button. |
  | `NSOtherMouseDraggedMask` | The user moved the mouse with the middle button down, or some button other than the left or right button. |
  | `NSOtherMouseUpMask` | The user released the middle button, or some button other than the left or right button. |
  | `NSMouseMovedMask` | The user moved the mouse without holding down a mouse button. |
  | `NSScrollWheelMask` | The user moved the mouse scroll wheel. |
  | `NSKeyDownMask` | The user generated a character or characters by pressing a key. |
  | `NSKeyUpMask` | The user released a key. |
  | `NSFlagsChangedMask` | The user pressed or released a modifier key, or toggled the Caps Lock key. |

## See Also

### Setting and Getting Event Masks

- [eventForwardingMask()](eventforwardingmask%28%29.md): Deprecated. Retrieves the mask used to filter which types of events are forwarded from the view to the composition during rendering.

# setEventForwardingMask: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Sets the mask used to filter which types of events are forwarded from the view to the composition during rendering.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) setEventForwardingMask:(NSUInteger) mask;
```

## Parameters

- `mask`: An event filtering mask. The mask can be a combination of any of the mask constants listed below, or the constant `NSAnyEventMask`.

  | Event | Description |
  | --- | --- |
  | `NSLeftMouseDownMask` | The user pressed the left button. |
  | `NSLeftMouseDraggedMask` | The user moved the mouse with the left button down. |
  | `NSLeftMouseUpMask` | The user released the left button. |
  | `NSRightMouseDownMask` | The user pressed the right button. |
  | `NSRightMouseDraggedMask` | The user moved the mouse with the right button down. |
  | `NSRightMouseUpMask` | The user released the right button. |
  | `NSOtherMouseDownMask` | The user pressed the middle button, or some button other than the left or right button. |
  | `NSOtherMouseDraggedMask` | The user moved the mouse with the middle button down, or some button other than the left or right button. |
  | `NSOtherMouseUpMask` | The user released the middle button, or some button other than the left or right button. |
  | `NSMouseMovedMask` | The user moved the mouse without holding down a mouse button. |
  | `NSScrollWheelMask` | The user moved the mouse scroll wheel. |
  | `NSKeyDownMask` | The user generated a character or characters by pressing a key. |
  | `NSKeyUpMask` | The user released a key. |
  | `NSFlagsChangedMask` | The user pressed or released a modifier key, or toggled the Caps Lock key. |

## See Also

### Setting and Getting Event Masks

- [eventForwardingMask](eventforwardingmask%28%29.md): Deprecated. Retrieves the mask used to filter which types of events are forwarded from the view to the composition during rendering.
