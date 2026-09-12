> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/shieldsettings](https://developer.apple.com/documentation/managedsettings/shieldsettings)

# ShieldSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints that indicate what apps and websites to cover with a shielding view.

## Declaration

```swift
struct ShieldSettings
```

## Topics

### Blocking apps and websites

- [applications](shieldsettings/applications-swift.property.md): Applications for the system to cover with a shielding view.
- [applications](shieldsettings/applications-swift.type.property.md): The metadata for the configuration that specifies apps for the system to cover with a shielding view.
- [webDomains](shieldsettings/webdomains-swift.property.md): Websites for the system to cover with a shielding view.
- [webDomains](shieldsettings/webdomains-swift.type.property.md): The metadata for the configuration that specifies websites for the system to shield.

### Blocking categories of apps and websites

- [ShieldSettings.ActivityCategoryPolicy](shieldsettings/activitycategorypolicy.md): Policies available for shielding activities based on their category.
- [applicationCategories](shieldsettings/applicationcategories-swift.property.md): Categories of apps for the system to cover with a shielding view.
- [applicationCategories](shieldsettings/applicationcategories-swift.type.property.md): The metadata for the configuration that specifies categories of apps for the system to cover with a shielding view.
- [webDomainCategories](shieldsettings/webdomaincategories-swift.property.md): Categories of websites for the system to cover with a shielding view.
- [webDomainCategories](shieldsettings/webdomaincategories-swift.type.property.md): The metadata for the configuration that specifies categories of websites for the system to shield.

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
- [PasscodeSettings](passcodesettings.md): Constraints on a user’s ability to change their device’s passcode.
- [shield](managedsettingsstore/shield.md): Settings that affect what activities the system covers with a shielding view on this device.
- [siri](managedsettingsstore/siri.md): Settings that affect Siri.
- [SiriSettings](sirisettings.md): Constraints on the device’s Siri settings.
