> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/matchesuuidarray(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/matchesuuidarray(_:))

# matchesUUIDArray(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE if ALL of the UUIDs in the given array is found in the target service.

## Declaration

```swift
func matchesUUIDArray(_ uuidArray: [Any]!) -> Bool
```

## Parameters

- `uuidArray`: An NSArray of IOBluetoothSDPUUID objects to search for in the target service.

<a id="return-value"></a>

## Return Value

Returns TRUE if all of the given UUIDs are present in the service.

<a id="Discussion"></a>

## Discussion

The given array should contain IOBluetoothSDPUUID objects. It only returns TRUE if all of the UUIDs are found. This method is like hasServiceFromArray: except that it requires that all UUIDs match instead of any of them matching.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# matchesUUIDArray: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE if ALL of the UUIDs in the given array is found in the target service.

## Declaration

```objectivec
- (BOOL) matchesUUIDArray:(NSArray *) uuidArray;
```

## Parameters

- `uuidArray`: An NSArray of IOBluetoothSDPUUID objects to search for in the target service.

<a id="return-value"></a>

## Return Value

Returns TRUE if all of the given UUIDs are present in the service.

<a id="Discussion"></a>

## Discussion

The given array should contain IOBluetoothSDPUUID objects. It only returns TRUE if all of the UUIDs are found. This method is like hasServiceFromArray: except that it requires that all UUIDs match instead of any of them matching.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
