> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didwritevaluefor:error:)-1ybl3](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didwritevaluefor:error:)-1ybl3)

# peripheral(\_:didWriteValueFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the peripheral successfully set a value for the descriptor.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didWriteValueFor descriptor: CBDescriptor, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `descriptor`: The characteristic descriptor containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [writeValue(\_:for:)](../cbperipheral/writevalue%28__for_%29.md) method. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Writing Characteristic and Descriptor Values

- [peripheral(\_:didWriteValueFor:error:)](peripheral%28__didwritevaluefor_error_%29-4f5ea.md): Tells the delegate that the peripheral successfully set a value for the characteristic.
- [peripheralIsReady(toSendWriteWithoutResponse:)](peripheralisready%28tosendwritewithoutresponse_%29.md): Tells the delegate that a peripheral is again ready to send characteristic updates.

# peripheral:didWriteValueForDescriptor:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that the peripheral successfully set a value for the descriptor.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didWriteValueForDescriptor:(CBDescriptor *) descriptor error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `descriptor`: The characteristic descriptor containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [writeValue:forDescriptor:](../cbperipheral/writevalue%28__for_%29.md) method. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Writing Characteristic and Descriptor Values

- [peripheral:didWriteValueForCharacteristic:error:](peripheral%28__didwritevaluefor_error_%29-4f5ea.md): Tells the delegate that the peripheral successfully set a value for the characteristic.
- [peripheralIsReadyToSendWriteWithoutResponse:](peripheralisready%28tosendwritewithoutresponse_%29.md): Tells the delegate that a peripheral is again ready to send characteristic updates.
