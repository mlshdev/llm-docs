> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcharacteristicwritetype/withresponse](https://developer.apple.com/documentation/corebluetooth/cbcharacteristicwritetype/withresponse)

# CBCharacteristicWriteType.withResponse (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Write a characteristic value, with a response from the peripheral to indicate whether the write was successful.

## Declaration

```swift
case withResponse
```

<a id="Discussion"></a>

## Discussion

If the write is unsuccessful, the peripheral responds with an error that details the cause of the failure.

## See Also

### Write Types

- [CBCharacteristicWriteType.withoutResponse](withoutresponse.md): Write a characteristic value, without any response from the peripheral to indicate whether the write was successful.

# CBCharacteristicWriteWithResponse (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Write a characteristic value, with a response from the peripheral to indicate whether the write was successful.

## Declaration

```objectivec
CBCharacteristicWriteWithResponse
```

<a id="Discussion"></a>

## Discussion

If the write is unsuccessful, the peripheral responds with an error that details the cause of the failure.

## See Also

### Write Types

- [CBCharacteristicWriteWithoutResponse](withoutresponse.md): Write a characteristic value, without any response from the peripheral to indicate whether the write was successful.
