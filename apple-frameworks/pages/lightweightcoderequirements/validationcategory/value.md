> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/validationcategory/value](https://developer.apple.com/documentation/lightweightcoderequirements/validationcategory/value)

# ValidationCategory.Value

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Supported Validation categories for signatures

## Declaration

```swift
struct Value
```

## Topics

### Initializers

- [init(rawValue:)](value/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance Properties

- [rawValue](value/rawvalue.md): The corresponding value of the raw type.

### Type Properties

- [appStore](value/appstore.md): Indicates that the code is signed by Apple’s App Store
- [developerID](value/developerid.md): Indicates that the code is signed by an Apple issued Developer ID certificate.
- [development](value/development.md): Indicates that the code is signed by an Apple issued development certificate.
- [enterprise](value/enterprise.md): Indicates that the code is signed by an Apple issued distribution certificate and allowed to run via Provisioning profile.
- [none](value/none.md): Indicates that the code is either adhoc signed or signed by an un-recognized certificate chain.
- [platform](value/platform.md): Indicates that the code is signed by Apple or allowed by a loaded trustcache.
- [testflight](value/testflight.md): Indicates that the code is signed by Apple’s TestFlight certificate

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
