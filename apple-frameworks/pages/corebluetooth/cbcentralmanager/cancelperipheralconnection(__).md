> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/cancelperipheralconnection(_:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/cancelperipheralconnection(_:))

# cancelPeripheralConnection(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels an active or pending local connection to a peripheral.

## Declaration

```swift
func cancelPeripheralConnection(_ peripheral: CBPeripheral)
```

## Parameters

- `peripheral`: The peripheral to which the central manager is either trying to connect or has already connected.

<a id="Discussion"></a>

## Discussion

This method is nonblocking, and any [CBPeripheral](../cbperipheral.md) class commands that are still pending to `peripheral` may not complete. Because other apps may still have a connection to the peripheral, canceling a local connection doesn’t guarantee that the underlying physical link is immediately disconnected. From the app’s perspective, however, the peripheral is effectively disconnected, and the central manager object calls the [centralManager(\_:didDisconnectPeripheral:error:)](../cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_error_%29.md) method of its delegate object.

## See Also

### Establishing or Canceling Connections with Peripherals

- [connect(\_:options:)](connect%28__options_%29.md): Establishes a local connection to a peripheral.
- [Peripheral Connection Options](../peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.

# cancelPeripheralConnection: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels an active or pending local connection to a peripheral.

## Declaration

```objectivec
- (void) cancelPeripheralConnection:(CBPeripheral *) peripheral;
```

## Parameters

- `peripheral`: The peripheral to which the central manager is either trying to connect or has already connected.

<a id="Discussion"></a>

## Discussion

This method is nonblocking, and any [CBPeripheral](../cbperipheral.md) class commands that are still pending to `peripheral` may not complete. Because other apps may still have a connection to the peripheral, canceling a local connection doesn’t guarantee that the underlying physical link is immediately disconnected. From the app’s perspective, however, the peripheral is effectively disconnected, and the central manager object calls the [centralManager:didDisconnectPeripheral:error:](../cbcentralmanagerdelegate/centralmanager%28__diddisconnectperipheral_error_%29.md) method of its delegate object.

## See Also

### Establishing or Canceling Connections with Peripherals

- [connectPeripheral:options:](connect%28__options_%29.md): Establishes a local connection to a peripheral.
- [Peripheral Connection Options](../peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
