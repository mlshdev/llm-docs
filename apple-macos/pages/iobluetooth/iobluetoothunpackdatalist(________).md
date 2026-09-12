> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothunpackdatalist(_:_:_:_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothunpackdatalist(_:_:_:_:))

# IOBluetoothUnpackDataList(\_:\_:\_:\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

## Declaration

```swift
func IOBluetoothUnpackDataList(_ inBufferSize: Int, _ inBuffer: UnsafeRawPointer!, _ inFormat: UnsafePointer<CChar>!, _ inArgs: CVaListPointer) -> Int
```

## See Also

### Functions

- [IOBluetoothNSStringFromDeviceAddressColon(\_:)](iobluetoothnsstringfromdeviceaddresscolon%28__%29.md)
- [IOBluetoothPackDataList(\_:\_:\_:)](iobluetoothpackdatalist%28______%29.md)

# IOBluetoothUnpackDataList (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Function  
**Availability:** macOS

## Declaration

```objectivec
extern long IOBluetoothUnpackDataList(ByteCount inBufferSize, const void *inBuffer, const char *inFormat, va_list inArgs);
```

## See Also

### Functions

- [IOBluetoothNSStringFromDeviceAddressColon](iobluetoothnsstringfromdeviceaddresscolon%28__%29.md)
- [IOBluetoothPackDataList](iobluetoothpackdatalist%28______%29.md)
- [OBEXSessionGetAvailableCommandPayloadLength](obexsessiongetavailablecommandpayloadlength.md): Deprecated. Gets space available for your data for a particular command response you are trying to send.
