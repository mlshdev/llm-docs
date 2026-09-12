> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/init(device:delegate:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/init(device:delegate:))

# init(device:delegate:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates an object to manage phone calls on a hands-free Bluetooth device.

## Declaration

```swift
init!(device: IOBluetoothDevice!, delegate: Any!)
```

## Parameters

- `device`: A Bluetooth device.
- `delegate`: A delegate that conforms to the [IOBluetoothHandsFreeDeviceDelegate](../iobluetoothhandsfreedevicedelegate.md) protocol.

# initWithDevice:delegate: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates an object to manage phone calls on a hands-free Bluetooth device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(IOBluetoothDevice *) device delegate:(id) delegate;
```

## Parameters

- `device`: A Bluetooth device.
- `delegate`: A delegate that conforms to the [IOBluetoothHandsFreeDeviceDelegate](../iobluetoothhandsfreedevicedelegate.md) protocol.
