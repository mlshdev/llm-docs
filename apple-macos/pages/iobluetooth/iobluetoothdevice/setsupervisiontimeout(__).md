> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/setsupervisiontimeout(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/setsupervisiontimeout(_:))

# setSupervisionTimeout(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the connection supervision timeout.

## Declaration

```swift
func setSupervisionTimeout(_ timeout: UInt16) -> IOReturn
```

## Parameters

- `timeout`: A client-supplied link supervision timeout value to use to monitor the connection. The timeout value should be specified in slots, so you can use the BluetoothGetSlotsFromSeconds macro to get the proper value. e.g. BluetoothGetSlotsFromSeconds( 5.0 ) will give yield the proper number of slots (8000) for 5 seconds.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if it was possible to set the connection supervision timeout.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.5 (Bluetooth v2.0) or later.

# setSupervisionTimeout: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Sets the connection supervision timeout.

## Declaration

```objectivec
- (IOReturn) setSupervisionTimeout:(UInt16) timeout;
```

## Parameters

- `timeout`: A client-supplied link supervision timeout value to use to monitor the connection. The timeout value should be specified in slots, so you can use the BluetoothGetSlotsFromSeconds macro to get the proper value. e.g. BluetoothGetSlotsFromSeconds( 5.0 ) will give yield the proper number of slots (8000) for 5 seconds.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if it was possible to set the connection supervision timeout.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.5 (Bluetooth v2.0) or later.
