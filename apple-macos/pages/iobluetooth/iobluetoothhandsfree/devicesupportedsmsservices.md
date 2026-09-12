> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/devicesupportedsmsservices](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/devicesupportedsmsservices)

# deviceSupportedSMSServices (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the device’s supported SMS services.

## Declaration

```swift
var deviceSupportedSMSServices: UInt32 { get }
```

<a id="return-value"></a>

## Return Value

The SMS services supported

<a id="Discussion"></a>

## Discussion

Returns the device’s supported SMS services bitmap. The values are described in “IOBluetoothHandsFreeSMSSupport.”

# deviceSupportedSMSServices (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Return the device’s supported SMS services.

## Declaration

```objectivec
@property (readonly) uint32_t deviceSupportedSMSServices;
```

<a id="return-value"></a>

## Return Value

The SMS services supported

<a id="Discussion"></a>

## Discussion

Returns the device’s supported SMS services bitmap. The values are described in “IOBluetoothHandsFreeSMSSupport.”
