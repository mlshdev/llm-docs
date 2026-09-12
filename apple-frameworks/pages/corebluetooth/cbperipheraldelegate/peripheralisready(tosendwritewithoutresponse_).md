> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheralisready(tosendwritewithoutresponse:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheralisready(tosendwritewithoutresponse:))

# peripheralIsReady(toSendWriteWithoutResponse:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a peripheral is again ready to send characteristic updates.

## Declaration

```swift
optional func peripheralIsReady(toSendWriteWithoutResponse peripheral: CBPeripheral)
```

## Parameters

- `peripheral`: The peripheral providing this update.

<a id="Discussion"></a>

## Discussion

The peripheral calls this delegate method after a failed call to [writeValue(\_:for:type:)](../cbperipheral/writevalue%28__for_type_%29.md), once `peripheral` is ready to send characteristic value updates.

## See Also

### Writing Characteristic and Descriptor Values

- [peripheral(\_:didWriteValueFor:error:)](peripheral%28__didwritevaluefor_error_%29-4f5ea.md): Tells the delegate that the peripheral successfully set a value for the characteristic.
- [peripheral(\_:didWriteValueFor:error:)](peripheral%28__didwritevaluefor_error_%29-1ybl3.md): Tells the delegate that the peripheral successfully set a value for the descriptor.

# peripheralIsReadyToSendWriteWithoutResponse: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a peripheral is again ready to send characteristic updates.

## Declaration

```objectivec
- (void) peripheralIsReadyToSendWriteWithoutResponse:(CBPeripheral *) peripheral;
```

## Parameters

- `peripheral`: The peripheral providing this update.

<a id="Discussion"></a>

## Discussion

The peripheral calls this delegate method after a failed call to [writeValue:forCharacteristic:type:](../cbperipheral/writevalue%28__for_type_%29.md), once `peripheral` is ready to send characteristic value updates.

## See Also

### Writing Characteristic and Descriptor Values

- [peripheral:didWriteValueForCharacteristic:error:](peripheral%28__didwritevaluefor_error_%29-4f5ea.md): Tells the delegate that the peripheral successfully set a value for the characteristic.
- [peripheral:didWriteValueForDescriptor:error:](peripheral%28__didwritevaluefor_error_%29-1ybl3.md): Tells the delegate that the peripheral successfully set a value for the descriptor.
