> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/shipmenttrackingnumber](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/shipmenttrackingnumber)

# DataDetector.Match.SemanticDetails.ShipmentTrackingNumber

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A match that the data detector determines represents a shipment tracking number.

## Declaration

```swift
struct ShipmentTrackingNumber
```

<a id="Discussion"></a>

## Discussion

The [carrier](shipmenttrackingnumber/carrier.md) property is a string that represents the carrier or service name, and the [trackingNumber](shipmenttrackingnumber/trackingnumber.md) is the number used by the carrier to track the package. The [trackingURL](shipmenttrackingnumber/trackingurl.md) may contain a URL that someone can use to track the progress of the delivery.

## Topics

### Properties that describe a shipment

- [carrier](shipmenttrackingnumber/carrier.md): A string that represents the carrier or service name.
- [trackingNumber](shipmenttrackingnumber/trackingnumber.md): The number the carrier uses to track the package.
- [trackingURL](shipmenttrackingnumber/trackingurl.md): A property that may contain a URL that someone can use to track the progress of the delivery.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
