> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothnumberofavailablehiddevices()](https://developer.apple.com/documentation/iobluetooth/iobluetoothnumberofavailablehiddevices())

# IOBluetoothNumberOfAvailableHIDDevices() (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Returns total number of HID devices on the system (Bluetooth + USB)

## Declaration

```swift
func IOBluetoothNumberOfAvailableHIDDevices() -> Int
```

<a id="return-value"></a>

## Return Value

Number of HID devices.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName(\_:)](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath(\_:\_:)](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothIsFileAppleDesignatedPIMData(\_:)](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress(\_:)](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress(\_:\_:)](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfKeyboardHIDDevices()](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices()](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices()](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)

# IOBluetoothNumberOfAvailableHIDDevices (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Returns total number of HID devices on the system (Bluetooth + USB)

## Declaration

```objectivec
extern long IOBluetoothNumberOfAvailableHIDDevices();
```

<a id="return-value"></a>

## Return Value

Number of HID devices.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothIsFileAppleDesignatedPIMData](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfKeyboardHIDDevices](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)
- [IOBluetoothPackData](iobluetoothpackdata.md): Packs a variable amount of parameters into a buffer according to a printf-style format string.
- [IOBluetoothUnpackData](iobluetoothunpackdata.md): Unpacks a variable amount of data from a buffer into a variable number of parameters according to a printf-style format string.
