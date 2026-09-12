> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicesearchtypesbits](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicesearchtypesbits)

# IOBluetoothDeviceSearchTypesBits (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Bits to determine what Bluetooth devices to search for

## Declaration

```swift
struct IOBluetoothDeviceSearchTypesBits
```

<a id="overview"></a>

## Overview

You can search for general device classes and service classes, or you can search for a specific device address or name. If you pass NULL as the attribute structure, you will get ALL devices in the vicinity found during a search. Note that passing a zeroed out block of attributes is NOT equivalent to passing in NULL!

## Topics

### Constants

- [kIOBluetoothDeviceSearchClassic](kiobluetoothdevicesearchclassic.md)
- [kIOBluetoothDeviceSearchLE](kiobluetoothdevicesearchle.md)

### Initializers

- [init(\_:)](iobluetoothdevicesearchtypesbits/init%28__%29.md)
- [init(rawValue:)](iobluetoothdevicesearchtypesbits/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](iobluetoothdevicesearchtypesbits/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [BluetoothAFHMode](bluetoothafhmode.md)
- [BluetoothAirMode](bluetoothairmode.md)
- [BluetoothAllowRoleSwitch](bluetoothallowroleswitch.md)
- [BluetoothAuthenticationRequirements](bluetoothauthenticationrequirements.md)
- [BluetoothAuthenticationRequirementsValues](bluetoothauthenticationrequirementsvalues.md)
- [BluetoothClassOfDevice](bluetoothclassofdevice.md)
- [BluetoothClockOffset](bluetoothclockoffset.md)
- [BluetoothCompanyIdentifers](bluetoothcompanyidentifers.md)
- [BluetoothConnectionHandle](bluetoothconnectionhandle.md)
- [BluetoothDeviceClassMajor](bluetoothdeviceclassmajor.md)
- [BluetoothDeviceClassMinor](bluetoothdeviceclassminor.md)
- [BluetoothDeviceName](bluetoothdevicename.md)
- [BluetoothEncryptionEnable](bluetoothencryptionenable.md)
- [BluetoothFeatureBits](bluetoothfeaturebits.md)
- [BluetoothHCIACLDataByteCount](bluetoothhciacldatabytecount.md)

# IOBluetoothDeviceSearchTypesBits (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Enumeration  
**Availability:** macOS

Bits to determine what Bluetooth devices to search for

## Declaration

```objectivec
enum IOBluetoothDeviceSearchTypesBits : unsigned int;
```

<a id="overview"></a>

## Overview

You can search for general device classes and service classes, or you can search for a specific device address or name. If you pass NULL as the attribute structure, you will get ALL devices in the vicinity found during a search. Note that passing a zeroed out block of attributes is NOT equivalent to passing in NULL!

## Topics

### Constants

- [kIOBluetoothDeviceSearchClassic](kiobluetoothdevicesearchclassic.md)
- [kIOBluetoothDeviceSearchLE](kiobluetoothdevicesearchle.md)

## See Also

### Data Types

- [BluetoothAFHMode](bluetoothafhmode.md)
- [BluetoothAirMode](bluetoothairmode.md)
- [BluetoothAllowRoleSwitch](bluetoothallowroleswitch.md)
- [BluetoothAuthenticationRequirements](bluetoothauthenticationrequirements.md)
- [BluetoothAuthenticationRequirementsValues](bluetoothauthenticationrequirementsvalues.md)
- [BluetoothClassOfDevice](bluetoothclassofdevice.md)
- [BluetoothClockOffset](bluetoothclockoffset.md)
- [BluetoothCompanyIdentifers](bluetoothcompanyidentifers.md)
- [BluetoothConnectionHandle](bluetoothconnectionhandle.md)
- [BluetoothDeviceClassMajor](bluetoothdeviceclassmajor.md)
- [BluetoothDeviceClassMinor](bluetoothdeviceclassminor.md)
- [BluetoothDeviceName](bluetoothdevicename.md)
- [BluetoothEncryptionEnable](bluetoothencryptionenable.md)
- [BluetoothFeatureBits](bluetoothfeaturebits.md)
- [BluetoothHCIACLDataByteCount](bluetoothhciacldatabytecount.md)
