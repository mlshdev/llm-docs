> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsbluetoothalwaysusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsbluetoothalwaysusagedescription)

# NSBluetoothAlwaysUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A message that tells people why the app needs access to Bluetooth.

## Details

`NSBluetoothAlwaysUsageDescription`

<a id="Discussion"></a>

## Discussion

This key is required if your app uses the device’s Bluetooth interface.

> **Important**

>  If your app has a deployment target earlier than iOS 13, add the [NSBluetoothPeripheralUsageDescription](nsbluetoothperipheralusagedescription.md) key to your app’s [Information Property List](../information-property-list.md) file in addition to this key.

## See Also

### Bluetooth

- [NSBluetoothPeripheralUsageDescription](nsbluetoothperipheralusagedescription.md): Deprecated. A message that tells people why the app is requesting the ability to connect to Bluetooth peripherals.
