> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicwritetype/withoutresponse](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicwritetype/withoutresponse)

# CBCharacteristicWriteType.withoutResponse (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Write a characteristic value, without any response from the peripheral to indicate whether the write was successful.

## Declaration

```swift
case withoutResponse
```

<a id="Discussion"></a>

## Discussion

You receive no notification if writing to a characteristic value fails with this write type.

## See Also

### Write Types

- [CBCharacteristicWriteType.withResponse](withresponse.md): Write a characteristic value, with a response from the peripheral to indicate whether the write was successful.

# CBCharacteristicWriteWithoutResponse (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Write a characteristic value, without any response from the peripheral to indicate whether the write was successful.

## Declaration

```objectivec
CBCharacteristicWriteWithoutResponse
```

<a id="Discussion"></a>

## Discussion

You receive no notification if writing to a characteristic value fails with this write type.

## See Also

### Write Types

- [CBCharacteristicWriteWithResponse](withresponse.md): Write a characteristic value, with a response from the peripheral to indicate whether the write was successful.
