> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscovercharacteristicsfor:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscovercharacteristicsfor:error:))

# peripheral(\_:didDiscoverCharacteristicsFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the peripheral found characteristics for a service.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didDiscoverCharacteristicsFor service: CBService, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `service`: The service to which the characteristics belong.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverCharacteristics(\_:for:)](../cbperipheral/discovercharacteristics%28__for_%29.md) method. If the peripheral successfully discovers the characteristics of the specified service, you can access them through the service’s [characteristics](../cbservice/characteristics.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Discovering Characteristics and their Descriptors

- [peripheral(\_:didDiscoverDescriptorsFor:error:)](peripheral%28__diddiscoverdescriptorsfor_error_%29.md): Tells the delegate that the peripheral found descriptors for a characteristic.

# peripheral:didDiscoverCharacteristicsForService:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral found characteristics for a service.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didDiscoverCharacteristicsForService:(CBService *) service error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `service`: The service to which the characteristics belong.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverCharacteristics:forService:](../cbperipheral/discovercharacteristics%28__for_%29.md) method. If the peripheral successfully discovers the characteristics of the specified service, you can access them through the service’s [characteristics](../cbservice/characteristics.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Discovering Characteristics and their Descriptors

- [peripheral:didDiscoverDescriptorsForCharacteristic:error:](peripheral%28__diddiscoverdescriptorsfor_error_%29.md): Tells the delegate that the peripheral found descriptors for a characteristic.
