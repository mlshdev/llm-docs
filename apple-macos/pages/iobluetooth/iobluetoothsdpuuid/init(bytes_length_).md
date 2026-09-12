> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid/init(bytes:length:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/init(bytes:length:))

# init(bytes:length:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.

## Declaration

```swift
convenience init!(bytes: UnsafeRawPointer!, length: UInt32)
```

## Parameters

- `bytes`: An array of bytes representing the UUID.
- `length`: The length of the array of bytes.

<a id="return-value"></a>

## Return Value

Returns the new IOBluetoothSDPUUID object or nil on failure.

<a id="Discussion"></a>

## Discussion

If the length is invalid for a UUID, nil is returned.

## See Also

### Initializers

- [init(data:)](init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [init(uuid16:)](init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [init(uuid32:)](init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

# uuidWithBytes:length: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Type Method  
**Availability:** macOS

Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.

## Declaration

```objectivec
+ (instancetype) uuidWithBytes:(const void *) bytes length:(unsigned int) length;
```

## Parameters

- `bytes`: An array of bytes representing the UUID.
- `length`: The length of the array of bytes.

<a id="return-value"></a>

## Return Value

Returns the new IOBluetoothSDPUUID object or nil on failure.

<a id="Discussion"></a>

## Discussion

If the length is invalid for a UUID, nil is returned.

## See Also

### Initializers

- [uuidWithData:](init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [initWithUUID16:](init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
- [initWithUUID32:](init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32
