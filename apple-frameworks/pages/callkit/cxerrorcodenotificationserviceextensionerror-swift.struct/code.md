> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/code](https://developer.apple.com/documentation/callkit/cxerrorcodenotificationserviceextensionerror-swift.struct/code)

# CXErrorCodeNotificationServiceExtensionError.Code (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

Constants for errors returned when reporting new, incoming VoIP calls.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [CXErrorCodeNotificationServiceExtensionError.Code.invalidClientProcess](code/invalidclientprocess.md): An error indicating that an invalid client process reported the incoming call.
- [CXErrorCodeNotificationServiceExtensionError.Code.missingNotificationFilteringEntitlement](code/missingnotificationfilteringentitlement.md): An error indicating that the notification service extension is missing the required filtering entitlement.
- [CXErrorCodeNotificationServiceExtensionError.Code.unknown](code/unknown.md): An error that occurs when there is an unknown problem.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CXErrorCodeNotificationServiceExtensionError (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 9.0+

Constants for errors returned when reporting new, incoming VoIP calls.

## Declaration

```objectivec
enum CXErrorCodeNotificationServiceExtensionError : NSInteger;
```

## Topics

### Error Codes

- [CXErrorCodeNotificationServiceExtensionErrorInvalidClientProcess](code/invalidclientprocess.md): An error indicating that an invalid client process reported the incoming call.
- [CXErrorCodeNotificationServiceExtensionErrorMissingNotificationFilteringEntitlement](code/missingnotificationfilteringentitlement.md): An error indicating that the notification service extension is missing the required filtering entitlement.
- [CXErrorCodeNotificationServiceExtensionErrorUnknown](code/unknown.md): An error that occurs when there is an unknown problem.
