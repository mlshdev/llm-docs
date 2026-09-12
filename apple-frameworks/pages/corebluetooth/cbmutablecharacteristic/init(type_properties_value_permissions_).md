> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmutablecharacteristic/init(type:properties:value:permissions:)](https://developer.apple.com/documentation/corebluetooth/cbmutablecharacteristic/init(type:properties:value:permissions:))

# init(type:properties:value:permissions:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Creates a mutable characteristic with specified permissions, properties, and value.

## Declaration

```swift
init(type UUID: CBUUID, properties: CBCharacteristicProperties, value: Data?, permissions: CBAttributePermissions)
```

## Parameters

- `UUID`: A 128-bit UUID that identifies the characteristic.
- `properties`: The properties of the characteristic.
- `value`: The characteristic value to cache. If `nil`, the value is dynamic and the peripheral manager fetches it on demand.
- `permissions`: The permissions of the characteristic value.

<a id="return-value"></a>

## Return Value

A newly initialized mutable characteristic.

<a id="Discussion"></a>

## Discussion

If you specify a value for the characteristic, the characteristic caches the value and sets its properties and permissions to [read](../cbcharacteristicproperties/read.md) and [readable](../cbattributepermissions/readable.md), respectively. Therefore, if you need the value of a characteristic to be writeable, or if you expect the value to change during the lifetime of the published service to which the characteristic belongs, you must specify the value as `nil`. This ensures that the characteristic treats the value dynamically. With a dynamic value, the peripheral manager requests the value whenever the peripheral manager receives a read or write request from a central. The peripheral does this by calling the [peripheralManager(\_:didReceiveRead:)](../cbperipheralmanagerdelegate/peripheralmanager%28__didreceiveread_%29.md) and [peripheralManager(\_:didReceiveWrite:)](../cbperipheralmanagerdelegate/peripheralmanager%28__didreceivewrite_%29.md) methods of its delegate object, respectively.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

# initWithType:properties:value:permissions: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+

Creates a mutable characteristic with specified permissions, properties, and value.

## Declaration

```objectivec
- (instancetype) initWithType:(CBUUID *) UUID properties:(CBCharacteristicProperties) properties value:(NSData *) value permissions:(CBAttributePermissions) permissions;
```

## Parameters

- `UUID`: A 128-bit UUID that identifies the characteristic.
- `properties`: The properties of the characteristic.
- `value`: The characteristic value to cache. If `nil`, the value is dynamic and the peripheral manager fetches it on demand.
- `permissions`: The permissions of the characteristic value.

<a id="return-value"></a>

## Return Value

A newly initialized mutable characteristic.

<a id="Discussion"></a>

## Discussion

If you specify a value for the characteristic, the characteristic caches the value and sets its properties and permissions to [CBCharacteristicPropertyRead](../cbcharacteristicproperties/read.md) and [CBAttributePermissionsReadable](../cbattributepermissions/readable.md), respectively. Therefore, if you need the value of a characteristic to be writeable, or if you expect the value to change during the lifetime of the published service to which the characteristic belongs, you must specify the value as `nil`. This ensures that the characteristic treats the value dynamically. With a dynamic value, the peripheral manager requests the value whenever the peripheral manager receives a read or write request from a central. The peripheral does this by calling the [peripheralManager:didReceiveReadRequest:](../cbperipheralmanagerdelegate/peripheralmanager%28__didreceiveread_%29.md) and [peripheralManager:didReceiveWriteRequests:](../cbperipheralmanagerdelegate/peripheralmanager%28__didreceivewrite_%29.md) methods of its delegate object, respectively.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).
