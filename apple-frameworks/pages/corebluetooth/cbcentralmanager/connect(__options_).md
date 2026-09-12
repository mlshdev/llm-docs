> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/connect(_:options:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/connect(_:options:))

# connect(\_:options:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Establishes a local connection to a peripheral.

## Declaration

```swift
func connect(_ peripheral: CBPeripheral, options: [String : Any]? = nil)
```

## Parameters

- `peripheral`: The peripheral to which the central is attempting to connect.
- `options`: A dictionary to customize the behavior of the connection. For available options, see [Peripheral Connection Options](../peripheral-connection-options.md).

<a id="Discussion"></a>

## Discussion

After successfully establishing a local connection to a peripheral, the central manager object calls the [centralManager(\_:didConnect:)](../cbcentralmanagerdelegate/centralmanager%28__didconnect_%29.md) method of its delegate object. If the connection attempt fails, the central manager object calls the [centralManager(\_:didFailToConnect:error:)](../cbcentralmanagerdelegate/centralmanager%28__didfailtoconnect_error_%29.md) method of its delegate object instead. Attempts to connect to a peripheral don’t time out. To explicitly cancel a pending connection to a peripheral, call the [cancelPeripheralConnection(\_:)](cancelperipheralconnection%28__%29.md) method. Deallocating `peripheral` also implicitly calls [cancelPeripheralConnection(\_:)](cancelperipheralconnection%28__%29.md).

## See Also

### Establishing or Canceling Connections with Peripherals

- [Peripheral Connection Options](../peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [cancelPeripheralConnection(\_:)](cancelperipheralconnection%28__%29.md): Cancels an active or pending local connection to a peripheral.

# connectPeripheral:options: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Establishes a local connection to a peripheral.

## Declaration

```objectivec
- (void) connectPeripheral:(CBPeripheral *) peripheral options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `peripheral`: The peripheral to which the central is attempting to connect.
- `options`: A dictionary to customize the behavior of the connection. For available options, see [Peripheral Connection Options](../peripheral-connection-options.md).

<a id="Discussion"></a>

## Discussion

After successfully establishing a local connection to a peripheral, the central manager object calls the [centralManager:didConnectPeripheral:](../cbcentralmanagerdelegate/centralmanager%28__didconnect_%29.md) method of its delegate object. If the connection attempt fails, the central manager object calls the [centralManager:didFailToConnectPeripheral:error:](../cbcentralmanagerdelegate/centralmanager%28__didfailtoconnect_error_%29.md) method of its delegate object instead. Attempts to connect to a peripheral don’t time out. To explicitly cancel a pending connection to a peripheral, call the [cancelPeripheralConnection:](cancelperipheralconnection%28__%29.md) method. Deallocating `peripheral` also implicitly calls [cancelPeripheralConnection:](cancelperipheralconnection%28__%29.md).

## See Also

### Establishing or Canceling Connections with Peripherals

- [Peripheral Connection Options](../peripheral-connection-options.md): Keys used to pass options when connecting to a peripheral.
- [cancelPeripheralConnection:](cancelperipheralconnection%28__%29.md): Cancels an active or pending local connection to a peripheral.
