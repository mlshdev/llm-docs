> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didwritevaluefor:error:)-4f5ea](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didwritevaluefor:error:)-4f5ea)

# peripheral(\_:didWriteValueFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the peripheral successfully set a value for the characteristic.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didWriteValueFor characteristic: CBCharacteristic, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `characteristic`: The characteristic containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method only when your app calls the [writeValue(\_:for:type:)](../cbperipheral/writevalue%28__for_type_%29.md) method with the [CBCharacteristicWriteType.withResponse](../cbcharacteristicwritetype/withresponse.md) constant specified as the write type. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Writing Characteristic and Descriptor Values

- [peripheral(\_:didWriteValueFor:error:)](peripheral%28__didwritevaluefor_error_%29-1ybl3.md): Tells the delegate that the peripheral successfully set a value for the descriptor.
- [peripheralIsReady(toSendWriteWithoutResponse:)](peripheralisready%28tosendwritewithoutresponse_%29.md): Tells the delegate that a peripheral is again ready to send characteristic updates.

# peripheral:didWriteValueForCharacteristic:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral successfully set a value for the characteristic.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didWriteValueForCharacteristic:(CBCharacteristic *) characteristic error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `characteristic`: The characteristic containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method only when your app calls the [writeValue:forCharacteristic:type:](../cbperipheral/writevalue%28__for_type_%29.md) method with the [CBCharacteristicWriteWithResponse](../cbcharacteristicwritetype/withresponse.md) constant specified as the write type. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Writing Characteristic and Descriptor Values

- [peripheral:didWriteValueForDescriptor:error:](peripheral%28__didwritevaluefor_error_%29-1ybl3.md): Tells the delegate that the peripheral successfully set a value for the descriptor.
- [peripheralIsReadyToSendWriteWithoutResponse:](peripheralisready%28tosendwritewithoutresponse_%29.md): Tells the delegate that a peripheral is again ready to send characteristic updates.
