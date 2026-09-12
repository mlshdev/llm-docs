> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothnsstringtodeviceaddress(_:_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothnsstringtodeviceaddress(_:_:))

# IOBluetoothNSStringToDeviceAddress(\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.

## Declaration

```swift
func IOBluetoothNSStringToDeviceAddress(_ inNameString: String!, _ outDeviceAddress: UnsafeMutablePointer<BluetoothDeviceAddress>!) -> IOReturn
```

## Parameters

- `inNameString`: Ptr to an NSString that contains the data to turn into the device address.
- `outDeviceAddress`: Ptr to an address structure that will be returned.

<a id="return-value"></a>

## Return Value

Returns success (0) or failure code.

<a id="Discussion"></a>

## Discussion

Pass in most types of strings, such as “001122334455” or “00-11-22-33-44-55” and the conversion should be successful. Also, you should have 2 characters per byte for the conversion to work properly.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName(\_:)](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath(\_:\_:)](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothIsFileAppleDesignatedPIMData(\_:)](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress(\_:)](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNumberOfAvailableHIDDevices()](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices()](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices()](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices()](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)

# IOBluetoothNSStringToDeviceAddress (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.

## Declaration

```objectivec
extern IOReturn IOBluetoothNSStringToDeviceAddress(NSString *inNameString, BluetoothDeviceAddress *outDeviceAddress);
```

## Parameters

- `inNameString`: Ptr to an NSString that contains the data to turn into the device address.
- `outDeviceAddress`: Ptr to an address structure that will be returned.

<a id="return-value"></a>

## Return Value

Returns success (0) or failure code.

<a id="Discussion"></a>

## Discussion

Pass in most types of strings, such as “001122334455” or “00-11-22-33-44-55” and the conversion should be successful. Also, you should have 2 characters per byte for the conversion to work properly.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothGetUniqueFileNameAndPath](iobluetoothgetuniquefilenameandpath%28____%29.md)
- [IOBluetoothIsFileAppleDesignatedPIMData](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNumberOfAvailableHIDDevices](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)
- [IOBluetoothPackData](iobluetoothpackdata.md): Packs a variable amount of parameters into a buffer according to a printf-style format string.
- [IOBluetoothUnpackData](iobluetoothunpackdata.md): Unpacks a variable amount of data from a buffer into a variable number of parameters according to a printf-style format string.
