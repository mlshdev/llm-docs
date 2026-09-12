> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfkeychainsettingspanel/runmodal(for:keychain:)](https://developer.apple.com/documentation/securityinterface/sfkeychainsettingspanel/runmodal(for:keychain:))

# runModal(for:keychain:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a panel that allows users to change keychain settings.

## Declaration

```swift
func runModal(for settings: UnsafeMutablePointer<SecKeychainSettings>!, keychain: SecKeychain!) -> Int
```

## Parameters

- `settings`: A pointer to a keychain settngs structure. Because this structure is versioned, you must preallocate it and fill in the version of the structure.
- `keychain`: The keychain whose settings you wish to have the user change.

<a id="Discussion"></a>

## Discussion

The method result indicates which button the user clicks: [NSOKButton](../../appkit/nsokbutton.md) or [NSCancelButton](../../appkit/nscancelbutton.md) .

If the user attempts to chanage the settings of a locked keychain, the unlock authorization dialog appears.

## See Also

### Displaying a sheet or panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:settings:keychain:)](beginsheet%28for_modaldelegate_didend_contextinfo_settings_keychain_%29.md): Displays a sheet that allows users to change keychain settings.

# runModalForSettings:keychain: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a panel that allows users to change keychain settings.

## Declaration

```objectivec
- (NSInteger) runModalForSettings:(SecKeychainSettings *) settings keychain:(SecKeychainRef) keychain;
```

## Parameters

- `settings`: A pointer to a keychain settngs structure. Because this structure is versioned, you must preallocate it and fill in the version of the structure.
- `keychain`: The keychain whose settings you wish to have the user change.

<a id="Discussion"></a>

## Discussion

The method result indicates which button the user clicks: [NSOKButton](../../appkit/nsokbutton.md) or [NSCancelButton](../../appkit/nscancelbutton.md) .

If the user attempts to chanage the settings of a locked keychain, the unlock authorization dialog appears.

## See Also

### Displaying a sheet or panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:settings:keychain:](beginsheet%28for_modaldelegate_didend_contextinfo_settings_keychain_%29.md): Displays a sheet that allows users to change keychain settings.
