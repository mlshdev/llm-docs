> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdeviceindependentmodifierflagsmask](https://developer.apple.com/documentation/appkit/nsdeviceindependentmodifierflagsmask)

# NSDeviceIndependentModifierFlagsMask

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.12)

Device-independent modifier flags are masked.

## Declaration

```objectivec
static const NSEventModifierFlags NSDeviceIndependentModifierFlagsMask;
```

<a id="Discussion"></a>

## Discussion

Use this symbol to mask off device-dependent modifier flags, including event coalescing information. The result will contain only key event flags.

## See Also

### Deprecated

- [NSAlphaShiftKeyMask](nsalphashiftkeymask.md): Deprecated. The Caps Lock key has been pressed.
- [NSShiftKeyMask](nsshiftkeymask.md): Deprecated. The Shift key has been pressed.
- [NSControlKeyMask](nscontrolkeymask.md): Deprecated. The Control key has been pressed.
- [NSAlternateKeyMask](nsalternatekeymask.md): Deprecated. The Option or Alt key has been pressed.
- [NSCommandKeyMask](nscommandkeymask.md): Deprecated. The Command key has been pressed.
- [NSNumericPadKeyMask](nsnumericpadkeymask.md): Deprecated. A key in the numeric keypad or an arrow key has been pressed.
- [NSHelpKeyMask](nshelpkeymask.md): Deprecated. The Help key has been pressed.
- [NSFunctionKeyMask](nsfunctionkeymask.md): Deprecated. A function key has been pressed.
