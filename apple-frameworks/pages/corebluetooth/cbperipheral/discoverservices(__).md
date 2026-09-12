> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/discoverservices(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/discoverservices(_:))

# discoverServices(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the specified services of the peripheral.

## Declaration

```swift
func discoverServices(_ serviceUUIDs: [CBUUID]?)
```

## Parameters

- `serviceUUIDs`: An array of [CBUUID](../cbuuid.md) objects that you are interested in. Each [CBUUID](../cbuuid.md) object represents a UUID that identifies the type of service you want to discover.

<a id="Discussion"></a>

## Discussion

You can provide an array of [CBUUID](../cbuuid.md) objects—representing service UUIDs—in the `serviceUUIDs` parameter. When you do, the peripheral returns only the services of the peripheral that match the provided UUIDs.

> **Note**

>  If the `servicesUUIDs` parameter is `nil`, this method returns all of the peripheral’s available services. This is much slower than providing an array of service UUIDs to search for.

When the peripheral discovers one or more services, it calls the [peripheral(\_:didDiscoverServices:)](../cbperipheraldelegate/peripheral%28__diddiscoverservices_%29.md): method of its delegate object. After a peripheral discovers services, you can access them through the peripheral’s [services](services.md) property.

## See Also

### Discovering Services

- [discoverIncludedServices(\_:for:)](discoverincludedservices%28__for_%29.md): Discovers the specified included services of a previously-discovered service.
- [services](services.md): A list of a peripheral’s discovered services.

# discoverServices: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the specified services of the peripheral.

## Declaration

```objectivec
- (void) discoverServices:(NSArray<CBUUID *> *) serviceUUIDs;
```

## Parameters

- `serviceUUIDs`: An array of [CBUUID](../cbuuid.md) objects that you are interested in. Each [CBUUID](../cbuuid.md) object represents a UUID that identifies the type of service you want to discover.

<a id="Discussion"></a>

## Discussion

You can provide an array of [CBUUID](../cbuuid.md) objects—representing service UUIDs—in the `serviceUUIDs` parameter. When you do, the peripheral returns only the services of the peripheral that match the provided UUIDs.

> **Note**

>  If the `servicesUUIDs` parameter is `nil`, this method returns all of the peripheral’s available services. This is much slower than providing an array of service UUIDs to search for.

When the peripheral discovers one or more services, it calls the [peripheral:didDiscoverServices:](../cbperipheraldelegate/peripheral%28__diddiscoverservices_%29.md): method of its delegate object. After a peripheral discovers services, you can access them through the peripheral’s [services](services.md) property.

## See Also

### Discovering Services

- [discoverIncludedServices:forService:](discoverincludedservices%28__for_%29.md): Discovers the specified included services of a previously-discovered service.
- [services](services.md): A list of a peripheral’s discovered services.
