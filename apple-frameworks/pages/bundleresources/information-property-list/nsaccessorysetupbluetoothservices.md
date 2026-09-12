> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothservices](https://developer.apple.com/documentation/bundleresources/information-property-list/nsaccessorysetupbluetoothservices)

# NSAccessorySetupBluetoothServices

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An array of strings that represent the hexadecimal values of Bluetooth SIG-defined services or custom services for accessories your app configures.

## Details

`NSAccessorySetupBluetoothServices`

<a id="Discussion"></a>

## Discussion

Each value is a 16- or 128-bit UUID that represents either a Bluetooth Special Interest Group (SIG)-registered service or a custom service.

## See Also

### Accessories

- [NSAccessorySetupKitSupports](nsaccessorysetupkitsupports.md): An array of strings that indicates the wireless technologies AccessorySetupKit uses when discovering and configuring accessories.
- [NSAccessorySetupBluetoothCompanyIdentifiers](nsaccessorysetupbluetoothcompanyidentifiers.md): An array of strings that represent the Bluetooth company identifiers for accessories that your app configures.
- [NSAccessorySetupBluetoothNames](nsaccessorysetupbluetoothnames.md): An array of strings that represent the Bluetooth device names or substrings for accessories that your app configures.
