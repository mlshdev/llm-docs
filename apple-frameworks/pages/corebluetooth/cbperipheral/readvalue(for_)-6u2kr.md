> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/readvalue(for:)-6u2kr](https://developer.apple.com/documentation/corebluetooth/cbperipheral/readvalue(for:)-6u2kr)

# readValue(for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the value of a specified characteristic.

## Declaration

```swift
func readValue(for characteristic: CBCharacteristic)
```

## Parameters

- `characteristic`: The characteristic whose value you want to read.

<a id="Discussion"></a>

## Discussion

When you call this method to read the value of a characteristic, the peripheral calls the [peripheral(\_:didUpdateValueFor:error:)](../cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1xyna.md) method of its delegate object. If the peripheral successfully reads the value of the characteristic, you can access it through the characteristic’s [value](../cbcharacteristic/value.md) property.

Not all characteristics have a readable value. You can determine whether a characteristic’s value is readable by accessing the relevant properties of the [CBCharacteristicProperties](../cbcharacteristicproperties.md) enumeration.

## See Also

### Reading Characteristic and Descriptor Values

- [readValue(for:)](readvalue%28for_%29-91hhp.md): Retrieves the value of a specified characteristic descriptor.

# readValueForCharacteristic: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the value of a specified characteristic.

## Declaration

```objectivec
- (void) readValueForCharacteristic:(CBCharacteristic *) characteristic;
```

## Parameters

- `characteristic`: The characteristic whose value you want to read.

<a id="Discussion"></a>

## Discussion

When you call this method to read the value of a characteristic, the peripheral calls the [peripheral:didUpdateValueForCharacteristic:error:](../cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1xyna.md) method of its delegate object. If the peripheral successfully reads the value of the characteristic, you can access it through the characteristic’s [value](../cbcharacteristic/value.md) property.

Not all characteristics have a readable value. You can determine whether a characteristic’s value is readable by accessing the relevant properties of the [CBCharacteristicProperties](../cbcharacteristicproperties.md) enumeration.

## See Also

### Reading Characteristic and Descriptor Values

- [readValueForDescriptor:](readvalue%28for_%29-91hhp.md): Retrieves the value of a specified characteristic descriptor.
