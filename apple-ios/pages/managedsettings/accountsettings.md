> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/accountsettings](https://developer.apple.com/documentation/managedsettings/accountsettings)

# AccountSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that configures whether a user can modify their device’s account settings.

## Declaration

```swift
struct AccountSettings
```

## Topics

### Constraining accounts

- [lockAccounts](accountsettings/lockaccounts-swift.property.md): A Boolean value that indicates whether to prevent the user from changing their account information.
- [lockAccounts](accountsettings/lockaccounts-swift.type.property.md): A description of the setting that controls whether a user can modify their account information.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Restricting device settings

- [account](managedsettingsstore/account.md): Settings that affect accounts.
- [cellular](managedsettingsstore/cellular.md): Settings that affect cellular networking.
- [CellularSettings](cellularsettings.md): Constraints on the user’s cellular networking settings.
- [dateAndTime](managedsettingsstore/dateandtime.md): Settings that affect the date and time.
- [DateAndTimeSettings](dateandtimesettings.md): Constraints on the device’s date and time settings.
- [passcode](managedsettingsstore/passcode.md): Settings that affect the device passcode.
- [PasscodeSettings](passcodesettings.md): Constraints on a user’s ability to change their device’s passcode.
- [shield](managedsettingsstore/shield.md): Settings that affect what activities the system covers with a shielding view on this device.
- [ShieldSettings](shieldsettings.md): Constraints that indicate what apps and websites to cover with a shielding view.
- [siri](managedsettingsstore/siri.md): Settings that affect Siri.
- [SiriSettings](sirisettings.md): Constraints on the device’s Siri settings.
