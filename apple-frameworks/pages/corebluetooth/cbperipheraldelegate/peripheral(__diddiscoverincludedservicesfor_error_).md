> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscoverincludedservicesfor:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscoverincludedservicesfor:error:))

# peripheral(\_:didDiscoverIncludedServicesFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that discovering included services within the indicated service completed.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didDiscoverIncludedServicesFor service: CBService, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `service`: The [CBService](../cbservice.md) object containing the included service.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverIncludedServices(\_:for:)](../cbperipheral/discoverincludedservices%28__for_%29.md) method. If the peripheral successfully discovers services, you can access them through the service’s [includedServices](../cbservice/includedservices.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Discovering Services

- [peripheral(\_:didDiscoverServices:)](peripheral%28__diddiscoverservices_%29.md): Tells the delegate that peripheral service discovery succeeded.

# peripheral:didDiscoverIncludedServicesForService:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that discovering included services within the indicated service completed.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didDiscoverIncludedServicesForService:(CBService *) service error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `service`: The [CBService](../cbservice.md) object containing the included service.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverIncludedServices:forService:](../cbperipheral/discoverincludedservices%28__for_%29.md) method. If the peripheral successfully discovers services, you can access them through the service’s [includedServices](../cbservice/includedservices.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Discovering Services

- [peripheral:didDiscoverServices:](peripheral%28__diddiscoverservices_%29.md): Tells the delegate that peripheral service discovery succeeded.
