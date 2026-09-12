> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid/init(data:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/init(data:))

# init(data:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Creates a new IOBluetoothSDPUUID object from the given NSData.

## Declaration

```swift
convenience init!(data: Data!)
```

## Parameters

- `data`: The NSData containing the UUID bytes.

<a id="return-value"></a>

## Return Value

Returns the new IOBluetoothSDPUUID object or nil on failure.

<a id="Discussion"></a>

## Discussion

If the length of the NSData is invalid for a UUID, nil is returned.

## See Also

### Initializers

- [init(bytes:length:)](init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [init(uuid16:)](init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [init(uuid32:)](init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

# uuidWithData: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new IOBluetoothSDPUUID object from the given NSData.

## Declaration

```objectivec
+ (instancetype) uuidWithData:(NSData *) data;
```

## Parameters

- `data`: The NSData containing the UUID bytes.

<a id="return-value"></a>

## Return Value

Returns the new IOBluetoothSDPUUID object or nil on failure.

<a id="Discussion"></a>

## Discussion

If the length of the NSData is invalid for a UUID, nil is returned.

## See Also

### Initializers

- [uuidWithBytes:length:](init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [initWithUUID16:](init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [initWithUUID32:](init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32
