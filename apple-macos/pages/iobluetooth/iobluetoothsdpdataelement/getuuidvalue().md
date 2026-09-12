> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpdataelement/getuuidvalue()](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/getuuidvalue())

# getUUIDValue() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is a UUID (type 3), it returns the value as an IOBluetoothSDPUUID.

## Declaration

```swift
func getUUIDValue() -> IOBluetoothSDPUUID!
```

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothSDPUUID representation of the data element if it is a UUID.

# getUUIDValue (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

If the data element is a UUID (type 3), it returns the value as an IOBluetoothSDPUUID.

## Declaration

```objectivec
- (IOBluetoothSDPUUID *) getUUIDValue;
```

<a id="return-value"></a>

## Return Value

Returns an IOBluetoothSDPUUID representation of the data element if it is a UUID.
