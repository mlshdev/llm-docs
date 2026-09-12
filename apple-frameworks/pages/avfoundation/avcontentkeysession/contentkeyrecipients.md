> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/contentkeyrecipients](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/contentkeyrecipients)

# contentKeyRecipients (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of content key recipients.

## Declaration

```swift
var contentKeyRecipients: [any AVContentKeyRecipient] { get }
```

## See Also

### Managing content key recipients

- [AVContentKeyRecipient](../avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [addContentKeyRecipient(\_:)](addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
- [removeContentKeyRecipient(\_:)](removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.

# contentKeyRecipients (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of content key recipients.

## Declaration

```objectivec
@property (readonly) NSArray<id<AVContentKeyRecipient>> * contentKeyRecipients;
```

## See Also

### Managing content key recipients

- [AVContentKeyRecipient](../avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [addContentKeyRecipient:](addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
- [removeContentKeyRecipient:](removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.
