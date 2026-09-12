> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/discoverdescriptors(for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/discoverdescriptors(for:))

# discoverDescriptors(for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the descriptors of a characteristic.

## Declaration

```swift
func discoverDescriptors(for characteristic: CBCharacteristic)
```

## Parameters

- `characteristic`: The characteristic whose descriptors you want to discover.

<a id="Discussion"></a>

## Discussion

When the peripheral discovers one or more descriptors of the specified characteristic, it calls the [peripheral(\_:didDiscoverDescriptorsFor:error:)](../cbperipheraldelegate/peripheral%28__diddiscoverdescriptorsfor_error_%29.md) method of its delegate object. After the peripheral discovers the descriptors of the characteristic, you can access them through the characteristic’s [descriptors](../cbcharacteristic/descriptors.md) property.

## See Also

### Discovering Characteristics and Descriptors

- [discoverCharacteristics(\_:for:)](discovercharacteristics%28__for_%29.md): Discovers the specified characteristics of a service.

# discoverDescriptorsForCharacteristic: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Discovers the descriptors of a characteristic.

## Declaration

```objectivec
- (void) discoverDescriptorsForCharacteristic:(CBCharacteristic *) characteristic;
```

## Parameters

- `characteristic`: The characteristic whose descriptors you want to discover.

<a id="Discussion"></a>

## Discussion

When the peripheral discovers one or more descriptors of the specified characteristic, it calls the [peripheral:didDiscoverDescriptorsForCharacteristic:error:](../cbperipheraldelegate/peripheral%28__diddiscoverdescriptorsfor_error_%29.md) method of its delegate object. After the peripheral discovers the descriptors of the characteristic, you can access them through the characteristic’s [descriptors](../cbcharacteristic/descriptors.md) property.

## See Also

### Discovering Characteristics and Descriptors

- [discoverCharacteristics:forService:](discovercharacteristics%28__for_%29.md): Discovers the specified characteristics of a service.
