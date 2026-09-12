> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/device](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/device)

# device (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the IOBluetoothDevice that the target service belongs to.

## Declaration

```swift
var device: IOBluetoothDevice! { get }
```

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice that the target service belongs to. If the service is one the local host is vending, then nil is returned.

<a id="Discussion"></a>

## Discussion

If the service is a local service (i.e. one the current host is vending out), then nil is returned.

# device (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Returns the IOBluetoothDevice that the target service belongs to.

## Declaration

```objectivec
@property (retain, readonly) IOBluetoothDevice * device;
```

<a id="return-value"></a>

## Return Value

Returns the IOBluetoothDevice that the target service belongs to. If the service is one the local host is vending, then nil is returned.

<a id="Discussion"></a>

## Discussion

If the service is a local service (i.e. one the current host is vending out), then nil is returned.
