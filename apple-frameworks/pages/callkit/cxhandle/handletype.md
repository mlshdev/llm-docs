> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxhandle/handletype](https://developer.apple.com/documentation/callkit/cxhandle/handletype)

# CXHandle.HandleType (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The possible types of handles.

## Declaration

```swift
enum HandleType
```

## Topics

### Constants

- [CXHandle.HandleType.generic](handletype/generic.md): An unspecified type of handle.
- [CXHandle.HandleType.phoneNumber](handletype/phonenumber.md): A phone number.
- [CXHandle.HandleType.emailAddress](handletype/emailaddress.md): An email address.

### Initializers

- [init(rawValue:)](handletype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CXHandleType (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The possible types of handles.

## Declaration

```objectivec
enum CXHandleType : NSInteger;
```

## Topics

### Constants

- [CXHandleTypeGeneric](handletype/generic.md): An unspecified type of handle.
- [CXHandleTypePhoneNumber](handletype/phonenumber.md): A phone number.
- [CXHandleTypeEmailAddress](handletype/emailaddress.md): An email address.
