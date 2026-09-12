> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didupdatevaluefor:error:)-1xyna](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didupdatevaluefor:error:)-1xyna)

# peripheral(\_:didUpdateValueFor:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that retrieving the specified characteristic’s value succeeded, or that the characteristic’s value changed.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didUpdateValueFor characteristic: CBCharacteristic, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `characteristic`: The characteristic containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readValue(for:)](../cbperipheral/readvalue%28for_%29-6u2kr.md) method. A peripheral also invokes this method to notify your app of a change to the value of the characteristic for which the app previously enabled notifications by calling [setNotifyValue(\_:for:)](../cbperipheral/setnotifyvalue%28__for_%29.md). If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving Characteristic and Descriptor Values

- [peripheral(\_:didUpdateValueFor:error:)](peripheral%28__didupdatevaluefor_error_%29-1t3wm.md): Tells the delegate that retrieving a specified characteristic descriptor’s value succeeded.

# peripheral:didUpdateValueForCharacteristic:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that retrieving the specified characteristic’s value succeeded, or that the characteristic’s value changed.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didUpdateValueForCharacteristic:(CBCharacteristic *) characteristic error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this information.
- `characteristic`: The characteristic containing the value.
- `error`: The reason the call failed, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Core Bluetooth invokes this method when your app calls the [readValueForCharacteristic:](../cbperipheral/readvalue%28for_%29-6u2kr.md) method. A peripheral also invokes this method to notify your app of a change to the value of the characteristic for which the app previously enabled notifications by calling [setNotifyValue:forCharacteristic:](../cbperipheral/setnotifyvalue%28__for_%29.md). If successful, the `error` parameter is `nil`. If unsuccessful, the `error` parameter returns the cause of the failure.

## See Also

### Retrieving Characteristic and Descriptor Values

- [peripheral:didUpdateValueForDescriptor:error:](peripheral%28__didupdatevaluefor_error_%29-1t3wm.md): Tells the delegate that retrieving a specified characteristic descriptor’s value succeeded.
