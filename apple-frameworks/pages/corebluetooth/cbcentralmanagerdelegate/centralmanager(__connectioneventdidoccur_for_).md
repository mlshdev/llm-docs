> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:connectioneventdidoccur:for:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:connectioneventdidoccur:for:))

# centralManager(\_:connectionEventDidOccur:for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that a connection event occurred which matches the registered options.

## Declaration

```swift
optional func centralManager(_ central: CBCentralManager, connectionEventDidOccur event: CBConnectionEvent, for peripheral: CBPeripheral)
```

<a id="Discussion"></a>

## Discussion

The manager calls this method when it observes a connection event that matches the options provided to [registerForConnectionEvents(options:)](../cbcentralmanager/registerforconnectionevents%28options_%29.md).

## See Also

### Monitoring Connections with Peripherals

- [centralManager(\_:didConnect:)](centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager(\_:didDisconnectPeripheral:error:)](centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager(\_:didFailToConnect:error:)](centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.

# centralManager:connectionEventDidOccur:forPeripheral: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that a connection event occurred which matches the registered options.

## Declaration

```objectivec
- (void) centralManager:(CBCentralManager *) central connectionEventDidOccur:(CBConnectionEvent) event forPeripheral:(CBPeripheral *) peripheral;
```

<a id="Discussion"></a>

## Discussion

The manager calls this method when it observes a connection event that matches the options provided to [registerForConnectionEventsWithOptions:](../cbcentralmanager/registerforconnectionevents%28options_%29.md).

## See Also

### Monitoring Connections with Peripherals

- [centralManager:didConnectPeripheral:](centralmanager%28__didconnect_%29.md): Tells the delegate that the central manager connected to a peripheral.
- [centralManager:didDisconnectPeripheral:error:](centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager:didFailToConnectPeripheral:error:](centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
