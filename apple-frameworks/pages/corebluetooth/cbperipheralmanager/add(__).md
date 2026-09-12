> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/add(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/add(_:))

# add(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.

## Declaration

```swift
func add(_ service: CBMutableService)
```

## Parameters

- `service`: The service you want to publish.

<a id="Discussion"></a>

## Discussion

When you add a service to the database, the peripheral manager calls the [peripheralManager(\_:didAdd:error:)](../cbperipheralmanagerdelegate/peripheralmanager%28__didadd_error_%29.md) method of its delegate object. If the service contains any included services, you must first publish them.

## See Also

### Adding and Removing Services

- [remove(\_:)](remove%28__%29.md): Removes a specified published service from the local GATT database.
- [removeAllServices()](removeallservices%28%29.md): Removes all published services from the local GATT database.

# addService: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.

## Declaration

```objectivec
- (void) addService:(CBMutableService *) service;
```

## Parameters

- `service`: The service you want to publish.

<a id="Discussion"></a>

## Discussion

When you add a service to the database, the peripheral manager calls the [peripheralManager:didAddService:error:](../cbperipheralmanagerdelegate/peripheralmanager%28__didadd_error_%29.md) method of its delegate object. If the service contains any included services, you must first publish them.

## See Also

### Adding and Removing Services

- [removeService:](remove%28__%29.md): Removes a specified published service from the local GATT database.
- [removeAllServices](removeallservices%28%29.md): Removes all published services from the local GATT database.
