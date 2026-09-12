> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/delegatereply](https://developer.apple.com/documentation/appkit/nsapplication/delegatereply)

# NSApplication.DelegateReply (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

## Declaration

```swift
enum DelegateReply
```

<a id="overview"></a>

## Overview

These constants are used by the [reply(toOpenOrPrint:)](reply%28toopenorprint_%29.md) method.

## Topics

### Constants

- [NSApplication.DelegateReply.success](delegatereply/success.md): Indicates the operation succeeded.
- [NSApplication.DelegateReply.cancel](delegatereply/cancel.md): Indicates the user cancelled the operation.
- [NSApplication.DelegateReply.failure](delegatereply/failure.md): Indicates an error occurred processing the operation.

### Initializers

- [init(rawValue:)](delegatereply/init%28rawvalue_%29.md)

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
- [NSApplication.RequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md) and [requestUserAttention(\_:)](requestuserattention%28__%29.md).
- [cancelUserAttentionRequest(\_:)](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [reply(toOpenOrPrint:)](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.

# NSApplicationDelegateReply (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate whether a copy or print operation was successful, was canceled, or failed.

## Declaration

```objectivec
enum NSApplicationDelegateReply : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [replyToOpenOrPrint:](reply%28toopenorprint_%29.md) method.

## Topics

### Constants

- [NSApplicationDelegateReplySuccess](delegatereply/success.md): Indicates the operation succeeded.
- [NSApplicationDelegateReplyCancel](delegatereply/cancel.md): Indicates the user cancelled the operation.
- [NSApplicationDelegateReplyFailure](delegatereply/failure.md): Indicates an error occurred processing the operation.

## See Also

### Managing user attention requests

- [requestUserAttention:](requestuserattention%28__%29.md): Starts a user attention request.
- [NSRequestUserAttentionType](requestuserattentiontype.md): These constants specify the level of severity of a user attention request and are used by [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md) and [requestUserAttention:](requestuserattention%28__%29.md).
- [cancelUserAttentionRequest:](canceluserattentionrequest%28__%29.md): Cancels a previous user attention request.
- [replyToOpenOrPrint:](reply%28toopenorprint_%29.md): Handles errors that might occur when the user attempts to open or print files.
