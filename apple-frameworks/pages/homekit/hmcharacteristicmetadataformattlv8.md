> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicmetadataformattlv8](https://developer.apple.com/documentation/homekit/hmcharacteristicmetadataformattlv8)

# HMCharacteristicMetadataFormatTLV8 (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that the characteristic has TLV8 values.

## Declaration

```swift
let HMCharacteristicMetadataFormatTLV8: String
```

<a id="Discussion"></a>

## Discussion

The value is an [NSData](../foundation/nsdata.md) object containing a set of one or more TLV8’s, which are packed type-length-value items with an 8-bit type, 8-bit length, and N-byte value.

## See Also

### Data

- [HMCharacteristicMetadataFormatData](hmcharacteristicmetadataformatdata.md): Indicates that the characteristic has data blob values.

# HMCharacteristicMetadataFormatTLV8 (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates that the characteristic has TLV8 values.

## Declaration

```objectivec
extern NSString * const HMCharacteristicMetadataFormatTLV8;
```

<a id="Discussion"></a>

## Discussion

The value is an [NSData](../foundation/nsdata.md) object containing a set of one or more TLV8’s, which are packed type-length-value items with an 8-bit type, 8-bit length, and N-byte value.

## See Also

### Data

- [HMCharacteristicMetadataFormatData](hmcharacteristicmetadataformatdata.md): Indicates that the characteristic has data blob values.
