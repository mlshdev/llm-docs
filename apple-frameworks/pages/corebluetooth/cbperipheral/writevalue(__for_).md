> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/writevalue(_:for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/writevalue(_:for:))

# writeValue(\_:for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the value of a characteristic descriptor.

## Declaration

```swift
func writeValue(_ data: Data, for descriptor: CBDescriptor)
```

## Parameters

- `data`: The value to write.
- `descriptor`: The descriptor containing the value to write.

<a id="Discussion"></a>

## Discussion

When you call this method to write the value of a characteristic descriptor, the peripheral calls the [peripheral(\_:didWriteValueFor:error:)](../cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-1ybl3.md) method of its delegate object.

This method copies the `data` passed into the data parameter, and you can dispose of it after the method returns.

You can’t use this method to write the value of a client configuration descriptor (represented by the [CBUUIDClientCharacteristicConfigurationString](../cbuuidclientcharacteristicconfigurationstring.md) constant), which describes the configuration of notification or indications for a characteristic’s value. If you want to manage notifications or indications for a characteristic’s value, you must use the [setNotifyValue(\_:for:)](setnotifyvalue%28__for_%29.md) method instead.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue(\_:for:type:)](writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [maximumWriteValueLength(for:)](maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
- [CBCharacteristicWriteType](../cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.

# writeValue:forDescriptor: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the value of a characteristic descriptor.

## Declaration

```objectivec
- (void) writeValue:(NSData *) data forDescriptor:(CBDescriptor *) descriptor;
```

## Parameters

- `data`: The value to write.
- `descriptor`: The descriptor containing the value to write.

<a id="Discussion"></a>

## Discussion

When you call this method to write the value of a characteristic descriptor, the peripheral calls the [peripheral:didWriteValueForDescriptor:error:](../cbperipheraldelegate/peripheral%28__didwritevaluefor_error_%29-1ybl3.md) method of its delegate object.

This method copies the `data` passed into the data parameter, and you can dispose of it after the method returns.

You can’t use this method to write the value of a client configuration descriptor (represented by the [CBUUIDClientCharacteristicConfigurationString](../cbuuidclientcharacteristicconfigurationstring.md) constant), which describes the configuration of notification or indications for a characteristic’s value. If you want to manage notifications or indications for a characteristic’s value, you must use the [setNotifyValue:forCharacteristic:](setnotifyvalue%28__for_%29.md) method instead.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue:forCharacteristic:type:](writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [maximumWriteValueLengthForType:](maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
- [CBCharacteristicWriteType](../cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.
