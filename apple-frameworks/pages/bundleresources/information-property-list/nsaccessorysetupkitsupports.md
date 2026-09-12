> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsaccessorysetupkitsupports](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupkitsupports)

# NSAccessorySetupKitSupports

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An array of strings that indicates the wireless technologies AccessorySetupKit uses when discovering and configuring accessories.

## Details

`NSAccessorySetupKitSupports`

## Possible Values

- `Bluetooth`: Include this string if your app uses Bluetooth to set up accessories.
- `WiFi`: Include this string if your app uses Wi-Fi to set up accessories.

<a id="discussion"></a>

## Discussion

If you use the `Bluetooth` value in your array, also add the following keys and values to your information property list:

- [NSAccessorySetupBluetoothCompanyIdentifiers](nsaccessorysetupbluetoothcompanyidentifiers.md)
- [NSAccessorySetupBluetoothNames](nsaccessorysetupbluetoothnames.md)
- [NSAccessorySetupBluetoothServices](nsaccessorysetupbluetoothservices.md)

## See Also

### Accessories

- [NSAccessorySetupBluetoothCompanyIdentifiers](nsaccessorysetupbluetoothcompanyidentifiers.md): An array of strings that represent the Bluetooth company identifiers for accessories that your app configures.
- [NSAccessorySetupBluetoothNames](nsaccessorysetupbluetoothnames.md): An array of strings that represent the Bluetooth device names or substrings for accessories that your app configures.
- [NSAccessorySetupBluetoothServices](nsaccessorysetupbluetoothservices.md): An array of strings that represent the hexadecimal values of Bluetooth SIG-defined services or custom services for accessories your app configures.
