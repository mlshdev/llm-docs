> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/tabbingmode-swift.enum/automatic](https://developer.apple.com/documentation/appkit/nswindow/tabbingmode-swift.enum/automatic)

# NSWindow.TabbingMode.automatic (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.12+

A window that automatically tabs together based on the user’s tabbing preference.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

A window with the [NSWindow.TabbingMode.automatic](automatic.md) tabbing mode consults the value of [userTabbingPreference](../usertabbingpreference-swift.type.property.md) to decide if it should join a tab group with other windows.

## See Also

### Modes

- [NSWindow.TabbingMode.disallowed](disallowed.md): A window that explicitly does not prefer to tab together with other windows.
- [NSWindow.TabbingMode.preferred](preferred.md): A window that explicitly prefers to tab together with other windows with the same tabbing identifier.

# NSWindowTabbingModeAutomatic (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

A window that automatically tabs together based on the user’s tabbing preference.

## Declaration

```objectivec
NSWindowTabbingModeAutomatic
```

<a id="Discussion"></a>

## Discussion

A window with the [NSWindowTabbingModeAutomatic](automatic.md) tabbing mode consults the value of [userTabbingPreference](../usertabbingpreference-swift.type.property.md) to decide if it should join a tab group with other windows.

## See Also

### Modes

- [NSWindowTabbingModeDisallowed](disallowed.md): A window that explicitly does not prefer to tab together with other windows.
- [NSWindowTabbingModePreferred](preferred.md): A window that explicitly prefers to tab together with other windows with the same tabbing identifier.
