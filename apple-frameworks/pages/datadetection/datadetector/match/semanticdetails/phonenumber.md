> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match/semanticdetails/phonenumber](https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/phonenumber)

# DataDetector.Match.SemanticDetails.PhoneNumber

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A match that the data detector determines represents a phone number.

## Declaration

```swift
struct PhoneNumber
```

<a id="Discussion"></a>

## Discussion

The [phoneNumber](phonenumber/phonenumber.md) property contains the phone number the data detector found. It may contain an extension, such as a passcode or an office extension. The [label](phonenumber/label.md) property may contain a value suitable to populate a label when creating a contact.

## Topics

### Components of a phone number

- [phoneNumber](phonenumber/phonenumber.md): A string that contains the phone number the data detector found.
- [label](phonenumber/label.md): An optional string that may contain a value suitable to populate a label when creating a contact.

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
