> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicwritetype](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicwritetype)

# CBCharacteristicWriteType (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Values representing the possible write types to a characteristic’s value.

## Declaration

```swift
enum CBCharacteristicWriteType
```

<a id="overview"></a>

## Overview

Characteristic write types have corresponding restrictions on the length of the data that you can write to a characteristic’s value. For the [CBCharacteristicWriteType.withResponse](cbcharacteristicwritetype/withresponse.md) write type’s restrictions, see the Bluetooth 4.0 specification, Volume 3, Part G, Sections 4.9.3–4. For the [CBCharacteristicWriteType.withoutResponse](cbcharacteristicwritetype/withoutresponse.md) write type restrictions, see the Bluetooth 4.0 specification, Volume 3, Part G, Sections 4.9.1–2.

> **Tip**

>  When you write with a response, you can write a characteristic value that’s longer than permitted when you write without a response.

## Topics

### Write Types

- [CBCharacteristicWriteType.withResponse](cbcharacteristicwritetype/withresponse.md): Write a characteristic value, with a response from the peripheral to indicate whether the write was successful.
- [CBCharacteristicWriteType.withoutResponse](cbcharacteristicwritetype/withoutresponse.md): Write a characteristic value, without any response from the peripheral to indicate whether the write was successful.

### Initializers

- [init(rawValue:)](cbcharacteristicwritetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue(\_:for:type:)](cbperipheral/writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [writeValue(\_:for:)](cbperipheral/writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [maximumWriteValueLength(for:)](cbperipheral/maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.

# CBCharacteristicWriteType (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Values representing the possible write types to a characteristic’s value.

## Declaration

```objectivec
enum CBCharacteristicWriteType : NSInteger;
```

<a id="overview"></a>

## Overview

Characteristic write types have corresponding restrictions on the length of the data that you can write to a characteristic’s value. For the [CBCharacteristicWriteWithResponse](cbcharacteristicwritetype/withresponse.md) write type’s restrictions, see the Bluetooth 4.0 specification, Volume 3, Part G, Sections 4.9.3–4. For the [CBCharacteristicWriteWithoutResponse](cbcharacteristicwritetype/withoutresponse.md) write type restrictions, see the Bluetooth 4.0 specification, Volume 3, Part G, Sections 4.9.1–2.

> **Tip**

>  When you write with a response, you can write a characteristic value that’s longer than permitted when you write without a response.

## Topics

### Write Types

- [CBCharacteristicWriteWithResponse](cbcharacteristicwritetype/withresponse.md): Write a characteristic value, with a response from the peripheral to indicate whether the write was successful.
- [CBCharacteristicWriteWithoutResponse](cbcharacteristicwritetype/withoutresponse.md): Write a characteristic value, without any response from the peripheral to indicate whether the write was successful.

## See Also

### Writing Characteristic and Descriptor Values

- [writeValue:forCharacteristic:type:](cbperipheral/writevalue%28__for_type_%29.md): Writes the value of a characteristic.
- [writeValue:forDescriptor:](cbperipheral/writevalue%28__for_%29.md): Writes the value of a characteristic descriptor.
- [maximumWriteValueLengthForType:](cbperipheral/maximumwritevaluelength%28for_%29.md): The maximum amount of data, in bytes, you can send to a characteristic in a single write type.
