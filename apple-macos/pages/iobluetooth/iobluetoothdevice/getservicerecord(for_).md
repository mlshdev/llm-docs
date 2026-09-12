> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getservicerecord(for:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getservicerecord(for:))

# getServiceRecord(for:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Search for a service record containing the given UUID.

## Declaration

```swift
func getServiceRecord(for sdpUUID: IOBluetoothSDPUUID!) -> IOBluetoothSDPServiceRecord!
```

## Parameters

- `sdpUUID`: UUID value to search for.

<a id="return-value"></a>

## Return Value

Returns the first service record that contains the given uuid. If no service record is found, nil is returned.

<a id="Discussion"></a>

## Discussion

This method searches through the device’s services to find a service that contains the given UUID. Only the first service record will be returned. This method only operates on services that have already been queried. It will not initiate a new query. This method should probably be updated to return an array of service records if more than one contains the UUID.

# getServiceRecordForUUID: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Search for a service record containing the given UUID.

## Declaration

```objectivec
- (IOBluetoothSDPServiceRecord *) getServiceRecordForUUID:(IOBluetoothSDPUUID *) sdpUUID;
```

## Parameters

- `sdpUUID`: UUID value to search for.

<a id="return-value"></a>

## Return Value

Returns the first service record that contains the given uuid. If no service record is found, nil is returned.

<a id="Discussion"></a>

## Discussion

This method searches through the device’s services to find a service that contains the given UUID. Only the first service record will be returned. This method only operates on services that have already been queried. It will not initiate a new query. This method should probably be updated to return an array of service records if more than one contains the UUID.
