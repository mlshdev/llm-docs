> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/cellularsettings](https://developer.apple.com/documentation/managedsettings/cellularsettings)

# CellularSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on the user’s cellular networking settings.

## Declaration

```swift
struct CellularSettings
```

<a id="overview"></a>

## Overview

Use `CellularSettings` to constrain the user’s ability to modify cellular settings in the Settings app.

## Topics

### Locking app access to cell data

- [lockAppCellularData](cellularsettings/lockappcellulardata-swift.property.md): A Boolean value that indicates whether to prevent the user from changing cellular data settings.
- [lockAppCellularData](cellularsettings/lockappcellulardata-swift.type.property.md): The metadata associated with the constraint that locks the cellular data setting.

### Locking the device’s cell plan

- [lockCellularPlan](cellularsettings/lockcellularplan-swift.property.md): A Boolean value that indicates whether to prevent the user from changing their cellular plan.
- [lockCellularPlan](cellularsettings/lockcellularplan-swift.type.property.md): The metadata associated with the constraint that locks the user’s cellular plan.

### Locking the device’s eSIM settings

- [lockESIM](cellularsettings/lockesim-swift.property.md): A Boolean value that indicates whether to prevent the user from changing their eSIM settings.
- [lockESIM](cellularsettings/lockesim-swift.type.property.md): The metadata associated with the constraint that locks the user’s eSIM settings.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Restricting device settings

- [account](managedsettingsstore/account.md): Settings that affect accounts.
- [AccountSettings](accountsettings.md): An object that configures whether a user can modify their device’s account settings.
- [cellular](managedsettingsstore/cellular.md): Settings that affect cellular networking.
- [dateAndTime](managedsettingsstore/dateandtime.md): Settings that affect the date and time.
- [DateAndTimeSettings](dateandtimesettings.md): Constraints on the device’s date and time settings.
- [passcode](managedsettingsstore/passcode.md): Settings that affect the device passcode.
- [PasscodeSettings](passcodesettings.md): Constraints on a user’s ability to change their device’s passcode.
- [shield](managedsettingsstore/shield.md): Settings that affect what activities the system covers with a shielding view on this device.
- [ShieldSettings](shieldsettings.md): Constraints that indicate what apps and websites to cover with a shielding view.
- [siri](managedsettingsstore/siri.md): Settings that affect Siri.
- [SiriSettings](sirisettings.md): Constraints on the device’s Siri settings.
