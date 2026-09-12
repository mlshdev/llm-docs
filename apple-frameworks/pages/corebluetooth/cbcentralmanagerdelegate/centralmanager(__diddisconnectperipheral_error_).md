> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:diddisconnectperipheral:error:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:diddisconnectperipheral:error:))

# centralManager(\_:didDisconnectPeripheral:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the central manager disconnected from a peripheral.

## Declaration

```swift
optional func centralManager(_ central: CBCentralManager, didDisconnectPeripheral peripheral: CBPeripheral, error: (any Error)?)
```

## Parameters

- `central`: The central manager that provides this information.
- `peripheral`: The now-disconnected peripheral.
- `error`: The cause of the failure, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The manager invokes this method when disconnecting a peripheral previously connected with the [connect(\_:options:)](../cbcentralmanager/connect%28__options_%29.md) method. The error parameter contains the reason for the disconnection, unless the disconnect resulted from a call to [cancelPeripheralConnection(\_:)](../cbcentralmanager/cancelperipheralconnection%28__%29.md). After this method executes, the peripheral device’s [CBPeripheralDelegate](../cbperipheraldelegate.md) object receives no further method calls.

All services, characteristics, and characteristic descriptors a peripheral become invalidated after it disconnects.

## See Also

### Monitoring Connections with Peripherals

- [centralManager(\_:didConnect:)](centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager(\_:didFailToConnect:error:)](centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
- [centralManager(\_:connectionEventDidOccur:for:)](centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.

# centralManager:didDisconnectPeripheral:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the central manager disconnected from a peripheral.

## Declaration

```objectivec
- (void) centralManager:(CBCentralManager *) central didDisconnectPeripheral:(CBPeripheral *) peripheral error:(NSError *) error;
```

## Parameters

- `central`: The central manager that provides this information.
- `peripheral`: The now-disconnected peripheral.
- `error`: The cause of the failure, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The manager invokes this method when disconnecting a peripheral previously connected with the [connectPeripheral:options:](../cbcentralmanager/connect%28__options_%29.md) method. The error parameter contains the reason for the disconnection, unless the disconnect resulted from a call to [cancelPeripheralConnection:](../cbcentralmanager/cancelperipheralconnection%28__%29.md). After this method executes, the peripheral device’s [CBPeripheralDelegate](../cbperipheraldelegate.md) object receives no further method calls.

All services, characteristics, and characteristic descriptors a peripheral become invalidated after it disconnects.

## See Also

### Monitoring Connections with Peripherals

- [centralManager:didConnectPeripheral:](centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager:didFailToConnectPeripheral:error:](centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
- [centralManager:connectionEventDidOccur:forPeripheral:](centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.
