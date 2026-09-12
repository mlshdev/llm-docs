> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonhandletype](https://developer.apple.com/documentation/intents/inpersonhandletype)

# INPersonHandleType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the types of data that can be associated with a person handle.

## Declaration

```swift
enum INPersonHandleType
```

## Topics

### Constants

- [INPersonHandleType.unknown](inpersonhandletype/unknown.md): An unknown type of data. Use this type if the identifier data is unique to your app.
- [INPersonHandleType.emailAddress](inpersonhandletype/emailaddress.md): An email address.
- [INPersonHandleType.phoneNumber](inpersonhandletype/phonenumber.md): A phone number.

### Initializers

- [init(rawValue:)](inpersonhandletype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# INPersonHandleType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the types of data that can be associated with a person handle.

## Declaration

```objectivec
enum INPersonHandleType : NSInteger;
```

## Topics

### Constants

- [INPersonHandleTypeUnknown](inpersonhandletype/unknown.md): An unknown type of data. Use this type if the identifier data is unique to your app.
- [INPersonHandleTypeEmailAddress](inpersonhandletype/emailaddress.md): An email address.
- [INPersonHandleTypePhoneNumber](inpersonhandletype/phonenumber.md): A phone number.
