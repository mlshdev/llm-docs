> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid/isequal(to:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Compares the target IOBluetoothSDPUUID object with the given otherUUID object.

## Declaration

```swift
func isEqual(to otherUUID: IOBluetoothSDPUUID!) -> Bool
```

## Parameters

- `otherUUID`: The UUID object to be compared with the target.

<a id="return-value"></a>

## Return Value

Returns true if the UUID values of each object are equal. This includes the case where the sizes are different but the data itself is the same when the Bluetooth UUID base is applied.

<a id="Discussion"></a>

## Discussion

This method will compare the two UUID values independent of their length.

# isEqualToUUID: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Compares the target IOBluetoothSDPUUID object with the given otherUUID object.

## Declaration

```objectivec
- (BOOL) isEqualToUUID:(IOBluetoothSDPUUID *) otherUUID;
```

## Parameters

- `otherUUID`: The UUID object to be compared with the target.

<a id="return-value"></a>

## Return Value

Returns true if the UUID values of each object are equal. This includes the case where the sizes are different but the data itself is the same when the Bluetooth UUID base is applied.

<a id="Discussion"></a>

## Discussion

This method will compare the two UUID values independent of their length.
