> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didupdatevaluefor:error:)-1t3wm](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didupdatevaluefor:error:)-1t3wm)

# peripheral(\_:didUpdateValueFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that retrieving a specified characteristic descriptor’s value succeeded.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didUpdateValueFor descriptor: CBDescriptor, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `descriptor`: The characteristic descriptor containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readValue(for:)](../cbperipheral/readvalue%28for_%29-91hhp.md) method. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving Characteristic and Descriptor Values

- [peripheral(\_:didUpdateValueFor:error:)](peripheral%28__didupdatevaluefor_error_%29-1xyna.md): Tells the delegate that retrieving the specified characteristic’s value succeeded, or that the characteristic’s value changed.

# peripheral:didUpdateValueForDescriptor:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that retrieving a specified characteristic descriptor’s value succeeded.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didUpdateValueForDescriptor:(CBDescriptor *) descriptor error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `descriptor`: The characteristic descriptor containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readValueForDescriptor:](../cbperipheral/readvalue%28for_%29-91hhp.md) method. If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving Characteristic and Descriptor Values

- [peripheral:didUpdateValueForCharacteristic:error:](peripheral%28__didupdatevaluefor_error_%29-1xyna.md): Tells the delegate that retrieving the specified characteristic’s value succeeded, or that the characteristic’s value changed.
