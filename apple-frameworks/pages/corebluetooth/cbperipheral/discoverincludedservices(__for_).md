> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/discoverincludedservices(_:for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/discoverincludedservices(_:for:))

# discoverIncludedServices(\_:for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the specified included services of a previously-discovered service.

## Declaration

```swift
func discoverIncludedServices(_ includedServiceUUIDs: [CBUUID]?, for service: CBService)
```

## Parameters

- `includedServiceUUIDs`: An array of [CBUUID](../cbuuid.md) objects that you are interested in. Here, each [CBUUID](../cbuuid.md) object represents a UUID that identifies the type of included service you want to discover.
- `service`: The previously-discovered service whose included services you want to discover.

<a id="Discussion"></a>

## Discussion

You can provide an array of [CBUUID](../cbuuid.md) objects—representing included service UUIDs—in the `includedServiceUUIDs` parameter. When you do, the peripheral returns only the services of the peripheral that match the provided UUIDs.

> **Note**

>  If the `servicesUUIDs` parameter is `nil`, this method returns all of the peripheral’s available services. This is much slower than providing an array of service UUIDs to search for.

When the peripheral discovers one or more included services of the specified service, it calls the [peripheral(\_:didDiscoverIncludedServicesFor:error:)](../cbperipheraldelegate/peripheral%28__diddiscoverincludedservicesfor_error_%29.md) method of its delegate object. After the service discovers its included services, you can access them through the service’s [includedServices](../cbservice/includedservices.md) property.

## See Also

### Discovering Services

- [discoverServices(\_:)](discoverservices%28__%29.md): Discovers the specified services of the peripheral.
- [services](services.md): A list of a peripheral’s discovered services.

# discoverIncludedServices:forService: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the specified included services of a previously-discovered service.

## Declaration

```objectivec
- (void) discoverIncludedServices:(NSArray<CBUUID *> *) includedServiceUUIDs forService:(CBService *) service;
```

## Parameters

- `includedServiceUUIDs`: An array of [CBUUID](../cbuuid.md) objects that you are interested in. Here, each [CBUUID](../cbuuid.md) object represents a UUID that identifies the type of included service you want to discover.
- `service`: The previously-discovered service whose included services you want to discover.

<a id="Discussion"></a>

## Discussion

You can provide an array of [CBUUID](../cbuuid.md) objects—representing included service UUIDs—in the `includedServiceUUIDs` parameter. When you do, the peripheral returns only the services of the peripheral that match the provided UUIDs.

> **Note**

>  If the `servicesUUIDs` parameter is `nil`, this method returns all of the peripheral’s available services. This is much slower than providing an array of service UUIDs to search for.

When the peripheral discovers one or more included services of the specified service, it calls the [peripheral:didDiscoverIncludedServicesForService:error:](../cbperipheraldelegate/peripheral%28__diddiscoverincludedservicesfor_error_%29.md) method of its delegate object. After the service discovers its included services, you can access them through the service’s [includedServices](../cbservice/includedservices.md) property.

## See Also

### Discovering Services

- [discoverServices:](discoverservices%28__%29.md): Discovers the specified services of the peripheral.
- [services](services.md): A list of a peripheral’s discovered services.
