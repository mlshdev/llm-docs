> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:didconnect:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:didconnect:))

# centralManager(\_:didConnect:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the central manager connected to a peripheral.

## Declaration

```swift
optional func centralManager(_ central: CBCentralManager, didConnect peripheral: CBPeripheral)
```

## Parameters

- `central`: The central manager that provides this information.
- `peripheral`: The now-connected peripheral.

<a id="Discussion"></a>

## Discussion

The manager invokes this method when a call to [connect(\_:options:)](../cbcentralmanager/connect%28__options_%29.md) succeeds. You typically implement this method to set the peripheral’s delegate and discover its services.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Monitoring Connections with Peripherals

- [centralManager(\_:didDisconnectPeripheral:error:)](centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager(\_:didFailToConnect:error:)](centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
- [centralManager(\_:connectionEventDidOccur:for:)](centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.

# centralManager:didConnectPeripheral: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the central manager connected to a peripheral.

## Declaration

```objectivec
- (void) centralManager:(CBCentralManager *) central didConnectPeripheral:(CBPeripheral *) peripheral;
```

## Parameters

- `central`: The central manager that provides this information.
- `peripheral`: The now-connected peripheral.

<a id="Discussion"></a>

## Discussion

The manager invokes this method when a call to [connectPeripheral:options:](../cbcentralmanager/connect%28__options_%29.md) succeeds. You typically implement this method to set the peripheral’s delegate and discover its services.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Monitoring Connections with Peripherals

- [centralManager:didDisconnectPeripheral:error:](centralmanager%28__diddisconnectperipheral_error_%29.md): Tells the delegate that the central manager disconnected from a peripheral.
- [centralManager:didFailToConnectPeripheral:error:](centralmanager%28__didfailtoconnect_error_%29.md): Tells the delegate the central manager failed to create a connection with a peripheral.
- [centralManager:connectionEventDidOccur:forPeripheral:](centralmanager%28__connectioneventdidoccur_for_%29.md): Tells the delegate that a connection event occurred which matches the registered options.
