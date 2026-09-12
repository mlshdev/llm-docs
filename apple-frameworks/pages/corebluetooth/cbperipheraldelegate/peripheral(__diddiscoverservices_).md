> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscoverservices:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:diddiscoverservices:))

# peripheral(\_:didDiscoverServices:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that peripheral service discovery succeeded.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didDiscoverServices error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral to which the services belong.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverServices(\_:)](../cbperipheral/discoverservices%28__%29.md) method. If the peripheral successfully discovers services, you can access them through the peripheral’s [services](../cbperipheral/services.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Discovering Services

- [peripheral(\_:didDiscoverIncludedServicesFor:error:)](peripheral%28__diddiscoverincludedservicesfor_error_%29.md): Tells the delegate that discovering included services within the indicated service completed.

# peripheral:didDiscoverServices: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that peripheral service discovery succeeded.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didDiscoverServices:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral to which the services belong.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [discoverServices:](../cbperipheral/discoverservices%28__%29.md) method. If the peripheral successfully discovers services, you can access them through the peripheral’s [services](../cbperipheral/services.md) property. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

For more information, see [Core Bluetooth Programming Guide](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/AboutCoreBluetooth/Introduction.html#//apple_ref/doc/uid/TP40013257).

## See Also

### Discovering Services

- [peripheral:didDiscoverIncludedServicesForService:error:](peripheral%28__diddiscoverincludedservicesfor_error_%29.md): Tells the delegate that discovering included services within the indicated service completed.
