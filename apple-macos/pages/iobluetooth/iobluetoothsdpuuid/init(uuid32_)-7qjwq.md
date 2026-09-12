> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid/init(uuid32:)-7qjwq](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/init(uuid32:)-7qjwq)

# init(uuid32:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

## Declaration

```swift
init!(uuid32: BluetoothSDPUUID32)
```

## Parameters

- `uuid32`: A scalar representing a 32-bit UUID

<a id="return-value"></a>

## Return Value

Returns self.

## See Also

### Initializers

- [init(bytes:length:)](init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [init(data:)](init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [init(uuid16:)](init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16

# initWithUUID32: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

## Declaration

```objectivec
- (instancetype) initWithUUID32:(BluetoothSDPUUID32) uuid32;
```

## Parameters

- `uuid32`: A scalar representing a 32-bit UUID

<a id="return-value"></a>

## Return Value

Returns self.

## See Also

### Initializers

- [uuidWithBytes:length:](init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [uuidWithData:](init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [initWithUUID16:](init%28uuid16_%29-7j3zk.md): Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16
