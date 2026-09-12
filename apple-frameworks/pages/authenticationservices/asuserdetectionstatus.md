> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asuserdetectionstatus](https://developer.apple.com/documentation/authenticationservices/asuserdetectionstatus)

# ASUserDetectionStatus (Swift)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Possible values for the real user indicator.

## Declaration

```swift
enum ASUserDetectionStatus
```

## Topics

### User Status

- [ASUserDetectionStatus.likelyReal](asuserdetectionstatus/likelyreal.md): The user appears to be a real person.
- [ASUserDetectionStatus.unknown](asuserdetectionstatus/unknown.md): The system hasn’t determined whether the user might be a real person.
- [ASUserDetectionStatus.unsupported](asuserdetectionstatus/unsupported.md): The system can’t determine this user’s status as a real person.

### Initializers

- [init(rawValue:)](asuserdetectionstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting User Characteristics

- [realUserStatus](asauthorizationappleidcredential/realuserstatus.md): A value that indicates whether the user appears to be a real person.

# ASUserDetectionStatus (Objective-C)

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Possible values for the real user indicator.

## Declaration

```objectivec
enum ASUserDetectionStatus : NSInteger;
```

## Topics

### User Status

- [ASUserDetectionStatusLikelyReal](asuserdetectionstatus/likelyreal.md): The user appears to be a real person.
- [ASUserDetectionStatusUnknown](asuserdetectionstatus/unknown.md): The system hasn’t determined whether the user might be a real person.
- [ASUserDetectionStatusUnsupported](asuserdetectionstatus/unsupported.md): The system can’t determine this user’s status as a real person.

## See Also

### Detecting User Characteristics

- [realUserStatus](asauthorizationappleidcredential/realuserstatus.md): A value that indicates whether the user appears to be a real person.
