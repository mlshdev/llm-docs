> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothgetuniquefilenameandpath(_:_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothgetuniquefilenameandpath(_:_:))

# IOBluetoothGetUniqueFileNameAndPath(\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

## Declaration

```swift
func IOBluetoothGetUniqueFileNameAndPath(_ inName: String!, _ inPath: String!) -> String!
```

## Parameters

- `inName`: Name of file that needs unique name in the specified path.
- `inPath`: Path you are trying to put file into.

<a id="return-value"></a>

## Return Value

String with a unique name appended on it for the provided path.

<a id="Discussion"></a>

## Discussion

When passed a VALID filename and a VALID path, this routine will return you a the path with the name appended onto it. If it already exist, it will insert a #1, #2, etc. Example: If you pass @“TestFile.txt” and @”~/Documents”, you will get @“~Documents/TestFile.txt”. If one already exists, you will be returned: @“~Documents/TestFile #1.txt”.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName(\_:)](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothIsFileAppleDesignatedPIMData(\_:)](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress(\_:)](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress(\_:\_:)](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfAvailableHIDDevices()](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices()](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices()](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices()](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)

# IOBluetoothGetUniqueFileNameAndPath (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

## Declaration

```objectivec
extern NSString *IOBluetoothGetUniqueFileNameAndPath(NSString *inName, NSString *inPath);
```

## Parameters

- `inName`: Name of file that needs unique name in the specified path.
- `inPath`: Path you are trying to put file into.

<a id="return-value"></a>

## Return Value

String with a unique name appended on it for the provided path.

<a id="Discussion"></a>

## Discussion

When passed a VALID filename and a VALID path, this routine will return you a the path with the name appended onto it. If it already exist, it will insert a #1, #2, etc. Example: If you pass @“TestFile.txt” and @”~/Documents”, you will get @“~Documents/TestFile.txt”. If one already exists, you will be returned: @“~Documents/TestFile #1.txt”.

## See Also

### Miscellaneous

- [IOBluetoothFindNumberOfRegistryEntriesOfClassName](iobluetoothfindnumberofregistryentriesofclassname%28__%29.md): The number of registry entries with a device classname.
- [IOBluetoothIsFileAppleDesignatedPIMData](iobluetoothisfileappledesignatedpimdata%28__%29.md): Apple designated PIM data is classified as: .vcard, .vcal, .vcf, .vnote, .vmsg, .vcs
- [IOBluetoothNSStringFromDeviceAddress](iobluetoothnsstringfromdeviceaddress%28__%29.md): Convenience routine to take a device address structure and create an NSString.
- [IOBluetoothNSStringToDeviceAddress](iobluetoothnsstringtodeviceaddress%28____%29.md): Convenience routine to take an NSString and turn it into a BluetoothDeviceAddress structure.
- [IOBluetoothNumberOfAvailableHIDDevices](iobluetoothnumberofavailablehiddevices%28%29.md): Returns total number of HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfKeyboardHIDDevices](iobluetoothnumberofkeyboardhiddevices%28%29.md): Returns number of keyboard HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfPointingHIDDevices](iobluetoothnumberofpointinghiddevices%28%29.md): Returns number of “pointing” HID devices on the system (Bluetooth + USB)
- [IOBluetoothNumberOfTabletHIDDevices](iobluetoothnumberoftablethiddevices%28%29.md): Returns number of “Tablet” HID devices on the system (Bluetooth + USB)
- [IOBluetoothPackData](iobluetoothpackdata.md): Packs a variable amount of parameters into a buffer according to a printf-style format string.
- [IOBluetoothUnpackData](iobluetoothunpackdata.md): Unpacks a variable amount of data from a buffer into a variable number of parameters according to a printf-style format string.
