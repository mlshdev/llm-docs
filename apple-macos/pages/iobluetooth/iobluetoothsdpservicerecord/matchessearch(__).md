> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/matchessearch(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/matchessearch(_:))

# matchesSearch(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE any of the UUID arrays in the search array match the target service.

## Declaration

```swift
func matchesSearch(_ searchArray: [Any]!) -> Bool
```

## Parameters

- `searchArray`: An NSArray of NSArrays of IOBluetoothSDPUUID objects.

<a id="return-value"></a>

## Return Value

Returns `TRUE` if any of the UUID arrays match.

<a id="Discussion"></a>

## Discussion

The given array should contain [NSArray](https://developer.apple.com/documentation/foundation/nsarray) objects. Each sub-[NSArray](https://developer.apple.com/documentation/foundation/nsarray) should contain [IOBluetoothSDPUUID](../iobluetoothsdpuuid.md) objects. In turn, each sub-NSArray gets passed to -matchesUUIDArray: If any of those returns `TRUE`, then the search stops and `TRUE` is returned. Essentially the primary NSArray contains the OR operations and each sub-array contains the AND operations.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.

# matchesSearchArray: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE any of the UUID arrays in the search array match the target service.

## Declaration

```objectivec
- (BOOL) matchesSearchArray:(NSArray *) searchArray;
```

## Parameters

- `searchArray`: An NSArray of NSArrays of IOBluetoothSDPUUID objects.

<a id="return-value"></a>

## Return Value

Returns `TRUE` if any of the UUID arrays match.

<a id="Discussion"></a>

## Discussion

The given array should contain [NSArray](https://developer.apple.com/documentation/foundation/nsarray) objects. Each sub-[NSArray](https://developer.apple.com/documentation/foundation/nsarray) should contain [IOBluetoothSDPUUID](../iobluetoothsdpuuid.md) objects. In turn, each sub-NSArray gets passed to -matchesUUIDArray: If any of those returns `TRUE`, then the search stops and `TRUE` is returned. Essentially the primary NSArray contains the OR operations and each sub-array contains the AND operations.

NOTE: This method is only available in macOS 10.2.4 (Bluetooth v1.1) or later.
