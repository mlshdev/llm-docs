> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushtype](https://developer.apple.com/documentation/pushkit/pkpushtype)

# PKPushType (Swift)

**Framework:** PushKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Constants reflecting the push types you want to support.

## Declaration

```swift
struct PKPushType
```

## Topics

### Notification Types

- [complication](pkpushtype/complication.md): Deprecated. A push type for watchOS complications.
- [fileProvider](pkpushtype/fileprovider.md): A push type for file provider updates.
- [voIP](pkpushtype/voip.md): A push type for Voice-over-IP (VoIP) call invitations.

### Initializers

- [init(rawValue:)](pkpushtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Push Types

- [Responding to VoIP Notifications from PushKit](responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.

# PKPushType (Objective-C)

**Framework:** PushKit  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Constants reflecting the push types you want to support.

## Declaration

```objectivec
typedef NSString * PKPushType;
```

## Topics

### Notification Types

- [PKPushTypeComplication](pkpushtype/complication.md): Deprecated. A push type for watchOS complications.
- [PKPushTypeFileProvider](pkpushtype/fileprovider.md): A push type for file provider updates.
- [PKPushTypeVoIP](pkpushtype/voip.md): A push type for Voice-over-IP (VoIP) call invitations.

## See Also

### Push Types

- [Responding to VoIP Notifications from PushKit](responding-to-voip-notifications-from-pushkit.md): Receive incoming Voice-over-IP (VoIP) push notifications and use them to display the system call interface to the user.
