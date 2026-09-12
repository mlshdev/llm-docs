> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfunctionkeymask](https://developer.apple.com/documentation/appkit/nsfunctionkeymask)

# NSFunctionKeyMask

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.12)

A function key has been pressed.

## Declaration

```objectivec
static const NSEventModifierFlags NSFunctionKeyMask;
```

<a id="Discussion"></a>

## Discussion

The numeric keypad is generally on the right side of the keyboard. This is also set if any of the arrow keys are pressed ([NSUpArrowFunctionKey](nsuparrowfunctionkey.md), [NSDownArrowFunctionKey](nsdownarrowfunctionkey.md), [NSLeftArrowFunctionKey](nsleftarrowfunctionkey.md), and [NSRightArrowFunctionKey](nsrightarrowfunctionkey.md)).

## See Also

### Deprecated

- [NSAlphaShiftKeyMask](nsalphashiftkeymask.md): Deprecated. The Caps Lock key has been pressed.
- [NSShiftKeyMask](nsshiftkeymask.md): Deprecated. The Shift key has been pressed.
- [NSControlKeyMask](nscontrolkeymask.md): Deprecated. The Control key has been pressed.
- [NSAlternateKeyMask](nsalternatekeymask.md): Deprecated. The Option or Alt key has been pressed.
- [NSCommandKeyMask](nscommandkeymask.md): Deprecated. The Command key has been pressed.
- [NSNumericPadKeyMask](nsnumericpadkeymask.md): Deprecated. A key in the numeric keypad or an arrow key has been pressed.
- [NSHelpKeyMask](nshelpkeymask.md): Deprecated. The Help key has been pressed.
- [NSDeviceIndependentModifierFlagsMask](nsdeviceindependentmodifierflagsmask.md): Deprecated. Device-independent modifier flags are masked.
