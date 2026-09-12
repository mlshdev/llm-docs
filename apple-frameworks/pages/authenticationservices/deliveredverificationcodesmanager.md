> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/deliveredverificationcodesmanager](https://developer.apple.com/documentation/authenticationservices/deliveredverificationcodesmanager)

# DeliveredVerificationCodesManager

**Framework:** AuthenticationServices  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@MainActor struct DeliveredVerificationCodesManager
```

## Topics

### Instance Methods

- [consumeOneTimeCode(\_:)](deliveredverificationcodesmanager/consumeonetimecode%28__%29.md): Mark a one-time code as “consumed” by the current process.
- [oneTimeCodes(preferredDuration:)](deliveredverificationcodesmanager/onetimecodes%28preferredduration_%29.md): Stream one-time codes received by the system.

### Type Aliases

- [DeliveredVerificationCodesManager.VerificationError](deliveredverificationcodesmanager/verificationerror.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
