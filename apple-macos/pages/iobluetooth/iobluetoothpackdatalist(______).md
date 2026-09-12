> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothpackdatalist(_:_:_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothpackdatalist(_:_:_:))

# IOBluetoothPackDataList(\_:\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

## Declaration

```swift
func IOBluetoothPackDataList(_ ioBuffer: UnsafeMutableRawPointer!, _ inFormat: UnsafePointer<CChar>!, _ inArgs: CVaListPointer) -> Int
```

## See Also

### Functions

- [IOBluetoothNSStringFromDeviceAddressColon(\_:)](iobluetoothnsstringfromdeviceaddresscolon%28__%29.md)
- [IOBluetoothUnpackDataList(\_:\_:\_:\_:)](iobluetoothunpackdatalist%28________%29.md)

# IOBluetoothPackDataList (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

## Declaration

```objectivec
extern long IOBluetoothPackDataList(void *ioBuffer, const char *inFormat, va_list inArgs);
```

## See Also

### Functions

- [IOBluetoothNSStringFromDeviceAddressColon](iobluetoothnsstringfromdeviceaddresscolon%28__%29.md)
- [IOBluetoothUnpackDataList](iobluetoothunpackdatalist%28________%29.md)
- [OBEXSessionGetAvailableCommandPayloadLength](obexsessiongetavailablecommandpayloadlength.md): Deprecated. Gets space available for your data for a particular command response you are trying to send.
