> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/hasservice(from:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/hasservice(from:))

# hasService(from:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE if any one of the UUIDs in the given array is found in the target service.

## Declaration

```swift
func hasService(from array: [Any]!) -> Bool
```

## Parameters

- `array`: An NSArray of IOBluetoothSDPUUID objects to search for in the target service.

<a id="return-value"></a>

## Return Value

Returns TRUE if any of the given UUIDs are present in the service.

<a id="Discussion"></a>

## Discussion

The given array should contain IOBluetoothSDPUUID objects. It is currently implemented such that it returns TRUE if any of the UUIDs are found. However in the future, it is likely that this will change to more closely match the functionality in the SDP spec so that it only returns TRUE if all of the given UUIDs are present. That way, both AND and OR comparisons can be implemented. Please make a note of this potential change.

# hasServiceFromArray: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE if any one of the UUIDs in the given array is found in the target service.

## Declaration

```objectivec
- (BOOL) hasServiceFromArray:(NSArray *) array;
```

## Parameters

- `array`: An NSArray of IOBluetoothSDPUUID objects to search for in the target service.

<a id="return-value"></a>

## Return Value

Returns TRUE if any of the given UUIDs are present in the service.

<a id="Discussion"></a>

## Discussion

The given array should contain IOBluetoothSDPUUID objects. It is currently implemented such that it returns TRUE if any of the UUIDs are found. However in the future, it is likely that this will change to more closely match the functionality in the SDP spec so that it only returns TRUE if all of the given UUIDs are present. That way, both AND and OR comparisons can be implemented. Please make a note of this potential change.
