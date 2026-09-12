> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/readvalue(for:)-91hhp](https://developer.apple.com/documentation/corebluetooth/cbperipheral/readvalue(for:)-91hhp)

# readValue(for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the value of a specified characteristic descriptor.

## Declaration

```swift
func readValue(for descriptor: CBDescriptor)
```

## Parameters

- `descriptor`: The characteristic descriptor whose value you want to read.

<a id="Discussion"></a>

## Discussion

When you call this method to read the value of a characteristic descriptor, the peripheral calls the [peripheral(\_:didUpdateValueFor:error:)](../cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1t3wm.md) method of its delegate object. If the peripheral successfully retrieves the value of the characteristic descriptor, you can access it through the characteristic descriptor’s [value](../cbdescriptor/value.md) property.

## See Also

### Reading Characteristic and Descriptor Values

- [readValue(for:)](readvalue%28for_%29-6u2kr.md): Retrieves the value of a specified characteristic.

# readValueForDescriptor: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the value of a specified characteristic descriptor.

## Declaration

```objectivec
- (void) readValueForDescriptor:(CBDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The characteristic descriptor whose value you want to read.

<a id="Discussion"></a>

## Discussion

When you call this method to read the value of a characteristic descriptor, the peripheral calls the [peripheral:didUpdateValueForDescriptor:error:](../cbperipheraldelegate/peripheral%28__didupdatevaluefor_error_%29-1t3wm.md) method of its delegate object. If the peripheral successfully retrieves the value of the characteristic descriptor, you can access it through the characteristic descriptor’s [value](../cbdescriptor/value.md) property.

## See Also

### Reading Characteristic and Descriptor Values

- [readValueForCharacteristic:](readvalue%28for_%29-6u2kr.md): Retrieves the value of a specified characteristic.
