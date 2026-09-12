> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhostcontroller/powerstate](https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/powerstate)

# powerState (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Gets the controller power state

## Declaration

```swift
var powerState: BluetoothHCIPowerState { get }
```

<a id="return-value"></a>

## Return Value

The current controller’s power state. This will be 1 for on, or 0 for off. Only Apple Bluetooth adapters support power off

# powerState (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Property  
**Availability:** macOS

Gets the controller power state

## Declaration

```objectivec
@property (readonly) BluetoothHCIPowerState powerState;
```

<a id="return-value"></a>

## Return Value

The current controller’s power state. This will be 1 for on, or 0 for off. Only Apple Bluetooth adapters support power off
