> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpuuid/init(uuid16:)-7j3zk](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/init(uuid16:)-7j3zk)

# init(uuid16:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS

Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16

## Declaration

```swift
init!(uuid16: BluetoothSDPUUID16)
```

## Parameters

- `uuid16`: A scalar representing a 16-bit UUID

<a id="return-value"></a>

## Return Value

Returns self.

## See Also

### Initializers

- [init(bytes:length:)](init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [init(data:)](init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [init(uuid32:)](init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32

# initWithUUID16: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a new 16-bit IOBluetoothSDPUUID with the given UUID16

## Declaration

```objectivec
- (instancetype) initWithUUID16:(BluetoothSDPUUID16) uuid16;
```

## Parameters

- `uuid16`: A scalar representing a 16-bit UUID

<a id="return-value"></a>

## Return Value

Returns self.

## See Also

### Initializers

- [uuidWithBytes:length:](init%28bytes_length_%29.md): Creates a new IOBluetoothSDPUUID object with the given bytes of the given length.
- [uuidWithData:](init%28data_%29.md): Creates a new IOBluetoothSDPUUID object from the given NSData.
- [initWithUUID32:](init%28uuid32_%29-7qjwq.md): Creates a new 32-bit IOBluetoothSDPUUID with the given UUID32
