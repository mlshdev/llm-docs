> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/init(device:delegate:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/init(device:delegate:))

# init(device:delegate:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates an object that controls a connected Bluetooth hands-free phone or headset.

## Declaration

```swift
init!(device: IOBluetoothDevice!, delegate inDelegate: Any!)
```

## Parameters

- `device`: A remote Bluetooth phone or headset.
- `inDelegate`: A delegate that conforms to the [IOBluetoothHandsFreeAudioGatewayDelegate](../iobluetoothhandsfreeaudiogatewaydelegate.md) protocol.

# initWithDevice:delegate: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates an object that controls a connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
- (instancetype) initWithDevice:(IOBluetoothDevice *) device delegate:(id) inDelegate;
```

## Parameters

- `device`: A remote Bluetooth phone or headset.
- `inDelegate`: A delegate that conforms to the [IOBluetoothHandsFreeAudioGatewayDelegate](../iobluetoothhandsfreeaudiogatewaydelegate.md) protocol.
