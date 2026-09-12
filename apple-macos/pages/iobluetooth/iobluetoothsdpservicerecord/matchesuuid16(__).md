> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/matchesuuid16(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/matchesuuid16(_:))

# matchesUUID16(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE the UUID16 is found in the target service.

## Declaration

```swift
func matchesUUID16(_ uuid16: BluetoothSDPUUID16) -> Bool
```

## Parameters

- `uuid16`: A BluetoothSDPUUID16 to search for in the target service.

<a id="return-value"></a>

## Return Value

Returns TRUE if the UUID16 is present in the service.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.7 or later.

# matchesUUID16: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns TRUE the UUID16 is found in the target service.

## Declaration

```objectivec
- (BOOL) matchesUUID16:(BluetoothSDPUUID16) uuid16;
```

## Parameters

- `uuid16`: A BluetoothSDPUUID16 to search for in the target service.

<a id="return-value"></a>

## Return Value

Returns TRUE if the UUID16 is present in the service.

<a id="Discussion"></a>

## Discussion

NOTE: This method is only available in macOS 10.7 or later.
