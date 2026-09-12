> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfree/init(device:delegate:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/init(device:delegate:))

# init(device:delegate:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Create a new IOBluetoothHandsFree object

## Declaration

```swift
init!(device: IOBluetoothDevice!, delegate inDelegate: (any IOBluetoothHandsFreeDelegate)!)
```

## Parameters

- `device`: An IOBluetoothDevice
- `inDelegate`: An object to act as delegate that implements the IOBluetoothHandsFreeDelegate protocol.

<a id="return-value"></a>

## Return Value

A newly created IOBluetoothHandsFreeAudioGateway object on success, nil on failure

<a id="Discussion"></a>

## Discussion

This method should be called on a subclass (IOBluetoothHandsFreeDevice or IOBluetoothHandsFreeAudioGateway) to get full functionality.

# initWithDevice:delegate: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Create a new IOBluetoothHandsFree object

## Declaration

```objectivec
- (instancetype) initWithDevice:(IOBluetoothDevice *) device delegate:(id<IOBluetoothHandsFreeDelegate>) inDelegate;
```

## Parameters

- `device`: An IOBluetoothDevice
- `inDelegate`: An object to act as delegate that implements the IOBluetoothHandsFreeDelegate protocol.

<a id="return-value"></a>

## Return Value

A newly created IOBluetoothHandsFreeAudioGateway object on success, nil on failure

<a id="Discussion"></a>

## Discussion

This method should be called on a subclass (IOBluetoothHandsFreeDevice or IOBluetoothHandsFreeAudioGateway) to get full functionality.
