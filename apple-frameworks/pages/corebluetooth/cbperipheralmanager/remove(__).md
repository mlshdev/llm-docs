> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/remove(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/remove(_:))

# remove(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a specified published service from the local GATT database.

## Declaration

```swift
func remove(_ service: CBMutableService)
```

## Parameters

- `service`: The service you want to remove.

<a id="Discussion"></a>

## Discussion

Because apps on the local peripheral device share the GATT database, more than one instance of a service may exist in the database. As a result, this method removes only the instance of the service that your app added to the database (using the [add(\_:)](add%28__%29.md) method). If any other services contains this service, you must first remove them.

## See Also

### Adding and Removing Services

- [add(\_:)](add%28__%29.md): Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.
- [removeAllServices()](removeallservices%28%29.md): Removes all published services from the local GATT database.

# removeService: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes a specified published service from the local GATT database.

## Declaration

```objectivec
- (void) removeService:(CBMutableService *) service;
```

## Parameters

- `service`: The service you want to remove.

<a id="Discussion"></a>

## Discussion

Because apps on the local peripheral device share the GATT database, more than one instance of a service may exist in the database. As a result, this method removes only the instance of the service that your app added to the database (using the [addService:](add%28__%29.md) method). If any other services contains this service, you must first remove them.

## See Also

### Adding and Removing Services

- [addService:](add%28__%29.md): Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.
- [removeAllServices](removeallservices%28%29.md): Removes all published services from the local GATT database.
