> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/discovercharacteristics(_:for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/discovercharacteristics(_:for:))

# discoverCharacteristics(\_:for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the specified characteristics of a service.

## Declaration

```swift
func discoverCharacteristics(_ characteristicUUIDs: [CBUUID]?, for service: CBService)
```

## Parameters

- `characteristicUUIDs`: An array of [CBUUID](../cbuuid.md) objects that you are interested in. Each [CBUUID](../cbuuid.md) object represents a UUID that identifies the type of a characteristic you want to discover.
- `service`: The service whose characteristics you want to discover.

<a id="Discussion"></a>

## Discussion

You can provide an array of [CBUUID](../cbuuid.md) objects—representing characteristic UUIDs— in the `characteristicUUIDs` parameter. When you do, the peripheral returns only the characteristics of the service that match the provided UUIDs. If the `characteristicUUIDs` parameter is `nil`, this method returns all characteristics of the service.

> **Note**

>  If the `characteristicUUIDs` parameter is `nil`, this method returns all of the service’s characteristics. This is much slower than providing an array of characteristic UUIDs to search for.

When the peripheral discovers one or more characteristics of the specified service, it calls the [peripheral(\_:didDiscoverCharacteristicsFor:error:)](../cbperipheraldelegate/peripheral%28__diddiscovercharacteristicsfor_error_%29.md) method of its delegate object. After the peripheral discovers the service’s characteristics, you can access them through the service’s [characteristics](../cbservice/characteristics.md) property.

## See Also

### Discovering Characteristics and Descriptors

- [discoverDescriptors(for:)](discoverdescriptors%28for_%29.md): Discovers the descriptors of a characteristic.

# discoverCharacteristics:forService: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the specified characteristics of a service.

## Declaration

```objectivec
- (void) discoverCharacteristics:(NSArray<CBUUID *> *) characteristicUUIDs forService:(CBService *) service;
```

## Parameters

- `characteristicUUIDs`: An array of [CBUUID](../cbuuid.md) objects that you are interested in. Each [CBUUID](../cbuuid.md) object represents a UUID that identifies the type of a characteristic you want to discover.
- `service`: The service whose characteristics you want to discover.

<a id="Discussion"></a>

## Discussion

You can provide an array of [CBUUID](../cbuuid.md) objects—representing characteristic UUIDs— in the `characteristicUUIDs` parameter. When you do, the peripheral returns only the characteristics of the service that match the provided UUIDs. If the `characteristicUUIDs` parameter is `nil`, this method returns all characteristics of the service.

> **Note**

>  If the `characteristicUUIDs` parameter is `nil`, this method returns all of the service’s characteristics. This is much slower than providing an array of characteristic UUIDs to search for.

When the peripheral discovers one or more characteristics of the specified service, it calls the [peripheral:didDiscoverCharacteristicsForService:error:](../cbperipheraldelegate/peripheral%28__diddiscovercharacteristicsfor_error_%29.md) method of its delegate object. After the peripheral discovers the service’s characteristics, you can access them through the service’s [characteristics](../cbservice/characteristics.md) property.

## See Also

### Discovering Characteristics and Descriptors

- [discoverDescriptorsForCharacteristic:](discoverdescriptors%28for_%29.md): Discovers the descriptors of a characteristic.
