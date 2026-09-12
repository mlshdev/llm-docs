> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplayitem/setupoptions-swift.struct/confirmauthorization](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplayitem/setupoptions-swift.struct/confirmauthorization)

# confirmAuthorization (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An option to require the app to finish accessory authorization before showing the setup view.

## Declaration

```swift
static var confirmAuthorization: ASPickerDisplayItem.SetupOptions { get }
```

<a id="discussion"></a>

## Discussion

If the accessory supports [bluetoothPairingLE](../../asaccessory/supportoptions/bluetoothpairingle.md), then the app needs to start pairing by accessing a protected GATT characteristic.

## See Also

### Options

- [rename](rename.md): An option to ask the person using the app to rename the accessory.
- [finishInApp](finishinapp.md): An option to ask the person setting up the accessory to finish additional setup in the app after the accessory is authorized.

# ASPickerDisplayItemSetupConfirmAuthorization (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst

An option to require the app to finish accessory authorization before showing the setup view.

## Declaration

```objectivec
ASPickerDisplayItemSetupConfirmAuthorization
```

<a id="discussion"></a>

## Discussion

If the accessory supports [ASAccessorySupportBluetoothPairingLE](../../asaccessory/supportoptions/bluetoothpairingle.md), then the app needs to start pairing by accessing a protected GATT characteristic.

## See Also

### Options

- [ASPickerDisplayItemSetupRename](rename.md): An option to ask the person using the app to rename the accessory.
- [ASPickerDisplayItemSetupFinishInApp](finishinapp.md): An option to ask the person setting up the accessory to finish additional setup in the app after the accessory is authorized.
