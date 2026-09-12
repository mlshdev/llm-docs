> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/gethandle(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/gethandle(_:))

# getHandle(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows the discovery of the service record handle assigned to the service.

## Declaration

```swift
func getHandle(_ outServiceRecordHandle: UnsafeMutablePointer<BluetoothSDPServiceRecordHandle>!) -> IOReturn
```

## Parameters

- `outServiceRecordHandle`: A pointer to the location that will get the found service record handle.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the service record handle is found.

<a id="Discussion"></a>

## Discussion

This method will search through the attributes to find the one representing the service record handle. If one is found the outServiceRecordHandle param is set with the value. The outServiceRecordHandle value only gets set when kIOReturnSuccess is returned.

# getServiceRecordHandle: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows the discovery of the service record handle assigned to the service.

## Declaration

```objectivec
- (IOReturn) getServiceRecordHandle:(BluetoothSDPServiceRecordHandle *) outServiceRecordHandle;
```

## Parameters

- `outServiceRecordHandle`: A pointer to the location that will get the found service record handle.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the service record handle is found.

<a id="Discussion"></a>

## Discussion

This method will search through the attributes to find the one representing the service record handle. If one is found the outServiceRecordHandle param is set with the value. The outServiceRecordHandle value only gets set when kIOReturnSuccess is returned.
