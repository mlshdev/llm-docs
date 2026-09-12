> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannelincomingeventlistener](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannelincomingeventlistener)

# IOBluetoothL2CAPChannelIncomingEventListener (Swift)

**Framework:** IOBluetooth  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias IOBluetoothL2CAPChannelIncomingEventListener = (IOBluetoothL2CAPChannelRef?, UnsafeMutableRawPointer?, UnsafeMutablePointer<IOBluetoothL2CAPChannelEvent>?) -> Void
```

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

# IOBluetoothL2CAPChannelIncomingEventListener (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef void (*)(struct OpaqueIOBluetoothObjectRef *, void *, struct IOBluetoothL2CAPChannelEvent *) IOBluetoothL2CAPChannelIncomingEventListener;
```

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
