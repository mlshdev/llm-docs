> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/maximumwritevaluelength(for:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/maximumwritevaluelength(for:))

# maximumWriteValueLength(for:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum amount of data, in bytes, you can send to a characteristic in a single write type.

## Declaration

```swift
func maximumWriteValueLength(for type: CBCharacteristicWriteType) -> Int
```

## Parameters

- `type`: The characteristic write type to inspect.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue(\_:for:type:)](writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [writeValue(\_:for:)](writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [CBCharacteristicWriteType](../cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.

# maximumWriteValueLengthForType: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum amount of data, in bytes, you can send to a characteristic in a single write type.

## Declaration

```objectivec
- (NSUInteger) maximumWriteValueLengthForType:(CBCharacteristicWriteType) type;
```

## Parameters

- `type`: The characteristic write type to inspect.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue:forCharacteristic:type:](writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [writeValue:forDescriptor:](writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [CBCharacteristicWriteType](../cbcharacteristicwritetype.md): Values representing the possible write types to a characteristic’s value.
