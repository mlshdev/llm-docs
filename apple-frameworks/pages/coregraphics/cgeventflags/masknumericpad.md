> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventflags/masknumericpad](https://developer.apple.com/documentation/coregraphics/cgeventflags/masknumericpad)

# maskNumericPad (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

Identifies key events from the numeric keypad area on extended keyboards.

## Declaration

```swift
static var maskNumericPad: CGEventFlags { get }
```

## See Also

### Constants

- [maskAlphaShift](maskalphashift.md): Indicates that the Caps Lock key is down for a keyboard, mouse, or flag-changed event.
- [maskShift](maskshift.md): Indicates that the Shift key is down for a keyboard, mouse, or flag-changed event.
- [maskControl](maskcontrol.md): Indicates that the Control key is down for a keyboard, mouse, or flag-changed event.
- [maskAlternate](maskalternate.md): Indicates that the Alt or Option key is down for a keyboard, mouse, or flag-changed event.
- [maskCommand](maskcommand.md): Indicates that the Command key is down for a keyboard, mouse, or flag-changed event.
- [maskHelp](maskhelp.md): Indicates that the Help modifier key is down for a keyboard, mouse, or flag-changed event. This key is not present on most keyboards, and is different than the Help key found in the same row as Home and Page Up.
- [maskSecondaryFn](masksecondaryfn.md): Indicates that the Fn (Function) key is down for a keyboard, mouse, or flag-changed event. This key is found primarily on laptop keyboards.
- [maskNonCoalesced](masknoncoalesced.md): Indicates that mouse and pen movement events are not being coalesced.

# kCGEventFlagMaskNumericPad (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Identifies key events from the numeric keypad area on extended keyboards.

## Declaration

```objectivec
kCGEventFlagMaskNumericPad
```

## See Also

### Constants

- [kCGEventFlagMaskAlphaShift](maskalphashift.md): Indicates that the Caps Lock key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskShift](maskshift.md): Indicates that the Shift key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskControl](maskcontrol.md): Indicates that the Control key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskAlternate](maskalternate.md): Indicates that the Alt or Option key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskCommand](maskcommand.md): Indicates that the Command key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskHelp](maskhelp.md): Indicates that the Help modifier key is down for a keyboard, mouse, or flag-changed event. This key is not present on most keyboards, and is different than the Help key found in the same row as Home and Page Up.
- [kCGEventFlagMaskSecondaryFn](masksecondaryfn.md): Indicates that the Fn (Function) key is down for a keyboard, mouse, or flag-changed event. This key is found primarily on laptop keyboards.
- [kCGEventFlagMaskNonCoalesced](masknoncoalesced.md): Indicates that mouse and pen movement events are not being coalesced.
