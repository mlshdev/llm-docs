> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventflags/maskhelp](https://developer.apple.com/documentation/coregraphics/cgeventflags/maskhelp)

# maskHelp (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

Indicates that the Help modifier key is down for a keyboard, mouse, or flag-changed event. This key is not present on most keyboards, and is different than the Help key found in the same row as Home and Page Up.

## Declaration

```swift
static var maskHelp: CGEventFlags { get }
```

## See Also

### Constants

- [maskAlphaShift](maskalphashift.md): Indicates that the Caps Lock key is down for a keyboard, mouse, or flag-changed event.
- [maskShift](maskshift.md): Indicates that the Shift key is down for a keyboard, mouse, or flag-changed event.
- [maskControl](maskcontrol.md): Indicates that the Control key is down for a keyboard, mouse, or flag-changed event.
- [maskAlternate](maskalternate.md): Indicates that the Alt or Option key is down for a keyboard, mouse, or flag-changed event.
- [maskCommand](maskcommand.md): Indicates that the Command key is down for a keyboard, mouse, or flag-changed event.
- [maskSecondaryFn](masksecondaryfn.md): Indicates that the Fn (Function) key is down for a keyboard, mouse, or flag-changed event. This key is found primarily on laptop keyboards.
- [maskNumericPad](masknumericpad.md): Identifies key events from the numeric keypad area on extended keyboards.
- [maskNonCoalesced](masknoncoalesced.md): Indicates that mouse and pen movement events are not being coalesced.

# kCGEventFlagMaskHelp (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

Indicates that the Help modifier key is down for a keyboard, mouse, or flag-changed event. This key is not present on most keyboards, and is different than the Help key found in the same row as Home and Page Up.

## Declaration

```objectivec
kCGEventFlagMaskHelp
```

## See Also

### Constants

- [kCGEventFlagMaskAlphaShift](maskalphashift.md): Indicates that the Caps Lock key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskShift](maskshift.md): Indicates that the Shift key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskControl](maskcontrol.md): Indicates that the Control key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskAlternate](maskalternate.md): Indicates that the Alt or Option key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskCommand](maskcommand.md): Indicates that the Command key is down for a keyboard, mouse, or flag-changed event.
- [kCGEventFlagMaskSecondaryFn](masksecondaryfn.md): Indicates that the Fn (Function) key is down for a keyboard, mouse, or flag-changed event. This key is found primarily on laptop keyboards.
- [kCGEventFlagMaskNumericPad](masknumericpad.md): Identifies key events from the numeric keypad area on extended keyboards.
- [kCGEventFlagMaskNonCoalesced](masknoncoalesced.md): Indicates that mouse and pen movement events are not being coalesced.
