> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkmetadatakeyinsulindeliveryreason](https://developer.apple.com/documentation/healthkit/hkmetadatakeyinsulindeliveryreason)

# HKMetadataKeyInsulinDeliveryReason (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The medical reason for administering insulin.

## Declaration

```swift
let HKMetadataKeyInsulinDeliveryReason: String
```

<a id="Discussion"></a>

## Discussion

This key is required for [insulinDelivery](hkquantitytypeidentifier/insulindelivery.md) samples. It takes an [NSNumber](../foundation/nsnumber.md) object containing a [HKInsulinDeliveryReason](hkinsulindeliveryreason.md) value.

## Topics

### Valid Delivery Reasons

Possible reasons for administering insulin.

- [HKInsulinDeliveryReason](hkinsulindeliveryreason.md): Possible reasons for administering insulin.

# HKMetadataKeyInsulinDeliveryReason (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

The medical reason for administering insulin.

## Declaration

```objectivec
extern NSString * const HKMetadataKeyInsulinDeliveryReason;
```

<a id="Discussion"></a>

## Discussion

This key is required for [HKQuantityTypeIdentifierInsulinDelivery](hkquantitytypeidentifier/insulindelivery.md) samples. It takes an [NSNumber](../foundation/nsnumber.md) object containing a [HKInsulinDeliveryReason](hkinsulindeliveryreason.md) value.

## Topics

### Valid Delivery Reasons

Possible reasons for administering insulin.

- [HKInsulinDeliveryReason](hkinsulindeliveryreason.md): Possible reasons for administering insulin.
