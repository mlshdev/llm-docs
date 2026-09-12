> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdeviceinquiry/setsearchcriteria(_:majordeviceclass:minordeviceclass:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/setsearchcriteria(_:majordeviceclass:minordeviceclass:))

# setSearchCriteria(\_:majorDeviceClass:minorDeviceClass:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Use this method to set the criteria for the device search.

## Declaration

```swift
func setSearchCriteria(_ inServiceClassMajor: BluetoothServiceClassMajor, majorDeviceClass inMajorDeviceClass: BluetoothDeviceClassMajor, minorDeviceClass inMinorDeviceClass: BluetoothDeviceClassMinor)
```

## Parameters

- `inServiceClassMajor`: Set the major service class for found devices. Set to kBluetoothServiceClassMajorAny for all devices. See BluetoothAssignedNumbers.h for possible values.
- `inMajorDeviceClass`: Set the major device class for found devices. Set to kBluetoothDeviceClassMajorAny for all devices. See BluetoothAssignedNumbers.h for possible values.
- `inMinorDeviceClass`: Set the minor device class for found devices. Set to kBluetoothDeviceClassMinorAny for all devices. See BluetoothAssignedNumbers.h for possible values.

<a id="Discussion"></a>

## Discussion

The default inquiry object will search for all types of devices. If you wish to find only keyboards, for example, you might use this method like this:

\[myInquiryObject setSearchCriteria:kBluetoothServiceClassMajorAny majorDeviceClass:kBluetoothDeviceClassMajorPeripheral minorDeviceClass:kBluetoothDeviceClassMinorPeripheral1Keyboard\];

However, we recommend only using this if you are certain of the device class you are looking for, as some devices may report a different/unexpected device class, and the search may miss the device you are interested in.

# setSearchCriteria:majorDeviceClass:minorDeviceClass: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Use this method to set the criteria for the device search.

## Declaration

```objectivec
- (void) setSearchCriteria:(BluetoothServiceClassMajor) inServiceClassMajor majorDeviceClass:(BluetoothDeviceClassMajor) inMajorDeviceClass minorDeviceClass:(BluetoothDeviceClassMinor) inMinorDeviceClass;
```

## Parameters

- `inServiceClassMajor`: Set the major service class for found devices. Set to kBluetoothServiceClassMajorAny for all devices. See BluetoothAssignedNumbers.h for possible values.
- `inMajorDeviceClass`: Set the major device class for found devices. Set to kBluetoothDeviceClassMajorAny for all devices. See BluetoothAssignedNumbers.h for possible values.
- `inMinorDeviceClass`: Set the minor device class for found devices. Set to kBluetoothDeviceClassMinorAny for all devices. See BluetoothAssignedNumbers.h for possible values.

<a id="Discussion"></a>

## Discussion

The default inquiry object will search for all types of devices. If you wish to find only keyboards, for example, you might use this method like this:

\[myInquiryObject setSearchCriteria:kBluetoothServiceClassMajorAny majorDeviceClass:kBluetoothDeviceClassMajorPeripheral minorDeviceClass:kBluetoothDeviceClassMinorPeripheral1Keyboard\];

However, we recommend only using this if you are certain of the device class you are looking for, as some devices may report a different/unexpected device class, and the search may miss the device you are interested in.
