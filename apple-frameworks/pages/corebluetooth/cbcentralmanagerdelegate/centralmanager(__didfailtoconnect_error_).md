> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:didfailtoconnect:error:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:didfailtoconnect:error:))

# centralManager(\_:didFailToConnect:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate the central manager failed to create a connection with a peripheral.

## Declaration

```swift
optional func centralManager(_ central: CBCentralManager, didFailToConnect peripheral: CBPeripheral, error: (any Error)?)
```

## Parameters

- `central`: The central manager that provides this information.
- `peripheral`: The peripheral that failed to connect.
- `error`: The cause of the failure, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The manager invokes this method when a connection initiated with the [connect(\_:options:)](../cbcentralmanager/connect%28__options_%29.md) method fails to complete. Because connection attempts don’t time out, a failed connection usually indicates a transient issue, in which case you may attempt connecting to the peripheral again.

## See Also

### Monitoring Connections with Peripherals

- [centralManager(\_:didConnect:)](centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager(\_:didDisconnectPeripheral:error:)](centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager(\_:connectionEventDidOccur:for:)](centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.

# centralManager:didFailToConnectPeripheral:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate the central manager failed to create a connection with a peripheral.

## Declaration

```objectivec
- (void) centralManager:(CBCentralManager *) central didFailToConnectPeripheral:(CBPeripheral *) peripheral error:(NSError *) error;
```

## Parameters

- `central`: The central manager that provides this information.
- `peripheral`: The peripheral that failed to connect.
- `error`: The cause of the failure, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

The manager invokes this method when a connection initiated with the [connectPeripheral:options:](../cbcentralmanager/connect%28__options_%29.md) method fails to complete. Because connection attempts don’t time out, a failed connection usually indicates a transient issue, in which case you may attempt connecting to the peripheral again.

## See Also

### Monitoring Connections with Peripherals

- [centralManager:didConnectPeripheral:](centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager:didDisconnectPeripheral:error:](centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager:connectionEventDidOccur:forPeripheral:](centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.
