> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/writevalue(_:for:type:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/writevalue(_:for:type:))

# writeValue(\_:for:type:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the value of a characteristic.

## Declaration

```swift
func writeValue(_ data: Data, for characteristic: CBCharacteristic, type: CBCharacteristicWriteType)
```

## Parameters

- `data`: The value to write.
- `characteristic`: The characteristic containing the value to write.
- `type`: The type of write to execute. For a list of the possible types of writes to a characteristic’s value, see [CBCharacteristicWriteType](../cbcharacteristicwritetype.md).

<a id="Discussion"></a>

## Discussion

When you call this method to write the value of a characteristic, the peripheral calls the [peripheral(\_:didWriteValueFor:error:)](../cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-4f5ea.md) method of its delegate object only if you specified the write type as [CBCharacteristicWriteType.withResponse](../cbcharacteristicwritetype/withresponse.md). The response you receive through the [peripheral(\_:didWriteValueFor:error:)](../cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-4f5ea.md) delegate method indicates whether the write was successful; if the write failed, it details the cause of the failure in an error.

On the other hand, if you specify the write type as [CBCharacteristicWriteType.withoutResponse](../cbcharacteristicwritetype/withoutresponse.md), Core Bluetooth attempts to write the value but doesn’t guarantee success. If the write doesn’t succeed in this case, you aren’t notified and you don’t receive an error indicating the cause of the failure.

Use the [write](../cbcharacteristicproperties/write.md) and [writeWithoutResponse](../cbcharacteristicproperties/writewithoutresponse.md) members of the characteristic’s [properties](../cbcharacteristic/properties.md) enumeration to determine which kinds of writes you can perform.

This method copies the data passed into the `data` parameter, and you can dispose of it after the method returns.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue(\_:for:)](writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [maximumWriteValueLength(for:)](maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
- [CBCharacteristicWriteType](../cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.

# writeValue:forCharacteristic:type: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the value of a characteristic.

## Declaration

```objectivec
- (void) writeValue:(NSData *) data forCharacteristic:(CBCharacteristic *) characteristic type:(CBCharacteristicWriteType) type;
```

## Parameters

- `data`: The value to write.
- `characteristic`: The characteristic containing the value to write.
- `type`: The type of write to execute. For a list of the possible types of writes to a characteristic’s value, see [CBCharacteristicWriteType](../cbcharacteristicwritetype.md).

<a id="Discussion"></a>

## Discussion

When you call this method to write the value of a characteristic, the peripheral calls the [peripheral:didWriteValueForCharacteristic:error:](../cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-4f5ea.md) method of its delegate object only if you specified the write type as [CBCharacteristicWriteWithResponse](../cbcharacteristicwritetype/withresponse.md). The response you receive through the [peripheral:didWriteValueForCharacteristic:error:](../cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-4f5ea.md) delegate method indicates whether the write was successful; if the write failed, it details the cause of the failure in an error.

On the other hand, if you specify the write type as [CBCharacteristicWriteWithoutResponse](../cbcharacteristicwritetype/withoutresponse.md), Core Bluetooth attempts to write the value but doesn’t guarantee success. If the write doesn’t succeed in this case, you aren’t notified and you don’t receive an error indicating the cause of the failure.

Use the [CBCharacteristicPropertyWrite](../cbcharacteristicproperties/write.md) and [CBCharacteristicPropertyWriteWithoutResponse](../cbcharacteristicproperties/writewithoutresponse.md) members of the characteristic’s [properties](../cbcharacteristic/properties.md) enumeration to determine which kinds of writes you can perform.

This method copies the data passed into the `data` parameter, and you can dispose of it after the method returns.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue:forDescriptor:](writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [maximumWriteValueLengthForType:](maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
- [CBCharacteristicWriteType](../cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.
