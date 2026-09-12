> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/passcodesettings](https://developer.apple.com/documentation/managedsettings/passcodesettings)

# PasscodeSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on a user’s ability to change their device’s passcode.

## Declaration

```swift
struct PasscodeSettings
```

## Topics

### Blocking passcode changes

- [lockPasscode](passcodesettings/lockpasscode-swift.property.md): A Boolean value that indicates whether to prevent changing the device passcode.
- [lockPasscode](passcodesettings/lockpasscode-swift.type.property.md): The metadata for the setting that prevents the user from changing their passcode.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Restricting device settings

- [account](managedsettingsstore/account.md): Settings that affect accounts.
- [AccountSettings](accountsettings.md): An object that configures whether a user can modify their device’s account settings.
- [cellular](managedsettingsstore/cellular.md): Settings that affect cellular networking.
- [CellularSettings](cellularsettings.md): Constraints on the user’s cellular networking settings.
- [dateAndTime](managedsettingsstore/dateandtime.md): Settings that affect the date and time.
- [DateAndTimeSettings](dateandtimesettings.md): Constraints on the device’s date and time settings.
- [passcode](managedsettingsstore/passcode.md): Settings that affect the device passcode.
- [shield](managedsettingsstore/shield.md): Settings that affect what activities the system covers with a shielding view on this device.
- [ShieldSettings](shieldsettings.md): Constraints that indicate what apps and websites to cover with a shielding view.
- [siri](managedsettingsstore/siri.md): Settings that affect Siri.
- [SiriSettings](sirisettings.md): Constraints on the device’s Siri settings.
