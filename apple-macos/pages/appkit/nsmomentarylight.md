> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmomentarylight](https://developer.apple.com/documentation/appkit/nsmomentarylight)

# NSMomentaryLight

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.9)

When the button is clicked (on state), it appears illuminated.

> Use [NSButtonTypeMomentaryLight](nsbutton/buttontype/momentarylight.md) instead.

## Declaration

```objectivec
static const NSButtonType NSMomentaryLight;
```

## See Also

### Deprecated Button Types

- [NSMomentaryLightButton](nsmomentarylightbutton.md): Deprecated. When the button is clicked (on state), it appears illuminated. If the button has borders, it may also appear recessed. When the button is released, it returns to its normal (off) state.
- [NSPushOnPushOffButton](nspushonpushoffbutton.md): Deprecated. When the button is clicked (on state), it appears illuminated. If the button has borders, it may also appear recessed. A second click returns it to its normal (off) state.
- [NSToggleButton](nstogglebutton.md): Deprecated. After the first click, the button displays its alternate image or title (on state); a second click returns the button to its normal (off) state.
- [NSSwitchButton](nsswitchbutton.md): Deprecated. This style is a variant of `NSToggleButton` that has no border and is typically used to represent a checkbox.
- [NSRadioButton](nsradiobutton.md): Deprecated. This style is similar to `NSSwitchButton`, but it is used to constrain a selection to a single element from several elements.
- [NSMomentaryChangeButton](nsmomentarychangebutton.md): Deprecated. When the button is clicked, the alternate (on state) image and alternate title are displayed.
- [NSOnOffButton](nsonoffbutton.md): Deprecated. The first click highlights the button; a second click returns it to the normal (unhighlighted) state.
- [NSAcceleratorButton](nsacceleratorbutton.md): Deprecated. A button that sends an action when the user first clicks the button and continues sending actions until the user releases pressure entirely.
- [NSMultiLevelAcceleratorButton](nsmultilevelacceleratorbutton.md): Deprecated. A multilevel accelerator button is a variation of a normal accelerator button that allows for a configurable number of stepped pressure levels. As each one is reached, the user receives light tactile feedback and an action is sent.
- [NSMomentaryPushInButton](nsmomentarypushinbutton.md): Deprecated. When the user clicks the button (on state), the button appears illuminated.
- [NSMomentaryPushButton](nsmomentarypushbutton.md): Deprecated. When the button is clicked (on state), it appears illuminated. If the button has a bordered, it may also appear recessed. When the button is released, it returns to its normal (off) state.
