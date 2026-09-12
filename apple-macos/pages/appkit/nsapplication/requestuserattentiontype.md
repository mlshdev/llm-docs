> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/requestuserattentiontype](https://developer.apple.com/documentation/appkit/nsapplication/requestuserattentiontype)

# NSApplication.RequestUserAttentionType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md) and [requestUserAttention(\_:)](requestuserattention%28__%29.md).

## Declaration

```swift
enum RequestUserAttentionType
```

## Topics

### Constants

- [NSApplication.RequestUserAttentionType.criticalRequest](requestuserattentiontype/criticalrequest.md): The user attention request is a critical request.
- [NSApplication.RequestUserAttentionType.informationalRequest](requestuserattentiontype/informationalrequest.md): The user attention request is an informational request.

### Initializers

- [init(rawValue:)](requestuserattentiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing user attention requests

- [requestUserAttention(\_:)](requestuserattention%28__%29.md): Starts a user attention request.
- [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [reply(toOpenOrPrint:)](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplication.DelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

# NSRequestUserAttentionType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md) and [requestUserAttention:](requestuserattention%28__%29.md).

## Declaration

```objectivec
enum NSRequestUserAttentionType : NSUInteger;
```

## Topics

### Constants

- [NSCriticalRequest](requestuserattentiontype/criticalrequest.md): The user attention request is a critical request.
- [NSInformationalRequest](requestuserattentiontype/informationalrequest.md): The user attention request is an informational request.

## See Also

### Managing user attention requests

- [requestUserAttention:](requestuserattention%28__%29.md): Starts a user attention request.
- [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [replyToOpenOrPrint:](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
- [NSApplicationDelegateReply](delegatereply.md): Constants that indicate whether a copy or print operation was successful, was canceled, or failed.
