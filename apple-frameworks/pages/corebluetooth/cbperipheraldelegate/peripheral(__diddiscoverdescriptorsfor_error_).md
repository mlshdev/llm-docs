> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscoverdescriptorsfor:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscoverdescriptorsfor:error:))

# peripheral(\_:didDiscoverDescriptorsFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the peripheral found descriptors for a characteristic.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didDiscoverDescriptorsFor characteristic: CBCharacteristic, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `characteristic`: The characteristic to which the characteristic descriptors belong.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverDescriptors(for:)](../cbperipheral/discoverdescriptors%28for_%29.md) method. If the peripheral successfully discovers the descriptors of the specified characteristic, you can access them through the characteristic’s [descriptors](../cbcharacteristic/descriptors.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Discovering Characteristics and their Descriptors

- [peripheral(\_:didDiscoverCharacteristicsFor:error:)](peripheral%28__diddiscovercharacteristicsfor_error_%29.md): Tells the delegate that the peripheral found characteristics for a service.

# peripheral:didDiscoverDescriptorsForCharacteristic:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral found descriptors for a characteristic.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didDiscoverDescriptorsForCharacteristic:(CBCharacteristic *) characteristic error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `characteristic`: The characteristic to which the characteristic descriptors belong.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverDescriptorsForCharacteristic:](../cbperipheral/discoverdescriptors%28for_%29.md) method. If the peripheral successfully discovers the descriptors of the specified characteristic, you can access them through the characteristic’s [descriptors](../cbcharacteristic/descriptors.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Discovering Characteristics and their Descriptors

- [peripheral:didDiscoverCharacteristicsForService:error:](peripheral%28__diddiscovercharacteristicsfor_error_%29.md): Tells the delegate that the peripheral found characteristics for a service.
