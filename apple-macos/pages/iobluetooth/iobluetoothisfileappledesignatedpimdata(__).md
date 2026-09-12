> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothisfileappledesignatedpimdata(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothisfileappledesignatedpimdata(_:))

# IOBluetoothIsFileAppleDesignatedPIMData(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs

## Declaration

```swift
func IOBluetoothIsFileAppleDesignatedPIMData(_ inFileName: String!) -> Bool
```

## Parameters

- `inFileName`: Name of file - should include extension!

<a id="return-value"></a>

## Return Value

Yes or no, is it Apple-designated PIM data?

<a id="Discussion"></a>

## Discussion

Not much to talk about.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName(\_:)](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath(\_:\_:)](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothNSStringFromDeviceAddress(\_:)](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress(\_:\_:)](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfAvailableHIDDevices()](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices()](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices()](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices()](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)

# IOBluetoothIsFileAppleDesignatedPIMData (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs

## Declaration

```objectivec
extern Boolean IOBluetoothIsFileAppleDesignatedPIMData(NSString *inFileName);
```

## Parameters

- `inFileName`: Name of file - should include extension!

<a id="return-value"></a>

## Return Value

Yes or no, is it Apple-designated PIM data?

<a id="Discussion"></a>

## Discussion

Not much to talk about.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothNSStringFromDeviceAddress](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfAvailableHIDDevices](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)
- [IOBluetoothPackData](iobluetoothpackdata.md): Packs a variable amount of parameters into a buffer according to a printf-style format string.
- [IOBluetoothUnpackData](iobluetoothunpackdata.md): Unpacks a variable amount of data from a buffer into a variable number of parameters according to a printf-style format string.
