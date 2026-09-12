> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/removeallservices()](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/removeallservices())

# removeAllServices() (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all published services from the local GATT database.

## Declaration

```swift
func removeAllServices()
```

<a id="Discussion"></a>

## Discussion

Use this when you want to remove all services you’ve previously published, for example, if your app has a toggle button to expose GATT services.

Because apps on the local peripheral device share the GATT database, this method removes only the services that you added using the [add(\_:)](add%28__%29.md) method. This call doesn’t remove any services published by other apps on the local peripheral device.

## See Also

### Adding and Removing Services

- [add(\_:)](add%28__%29.md): Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.
- [remove(\_:)](remove%28__%29.md): Removes a specified published service from the local GATT database.

# removeAllServices (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all published services from the local GATT database.

## Declaration

```objectivec
- (void) removeAllServices;
```

<a id="Discussion"></a>

## Discussion

Use this when you want to remove all services you’ve previously published, for example, if your app has a toggle button to expose GATT services.

Because apps on the local peripheral device share the GATT database, this method removes only the services that you added using the [addService:](add%28__%29.md) method. This call doesn’t remove any services published by other apps on the local peripheral device.

## See Also

### Adding and Removing Services

- [addService:](add%28__%29.md): Publishes a service and any of its associated characteristics and characteristic descriptors to the local GATT database.
- [removeService:](remove%28__%29.md): Removes a specified published service from the local GATT database.
