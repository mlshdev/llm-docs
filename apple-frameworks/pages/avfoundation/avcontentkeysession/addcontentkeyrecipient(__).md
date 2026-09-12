> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/addcontentkeyrecipient(_:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/addcontentkeyrecipient(_:))

# addContentKeyRecipient(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.

## Declaration

```swift
func addContentKeyRecipient(_ recipient: any AVContentKeyRecipient)
```

## Parameters

- `recipient`: The content key recipient to use for the session.

<a id="Discussion"></a>

## Discussion

Don’t add a recipient to a session that has expired or had already begun to process media data.

## See Also

### Managing content key recipients

- [contentKeyRecipients](contentkeyrecipients.md): An array of content key recipients.
- [AVContentKeyRecipient](../avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [removeContentKeyRecipient(\_:)](removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.

# addContentKeyRecipient: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.

## Declaration

```objectivec
- (void) addContentKeyRecipient:(id<AVContentKeyRecipient>) recipient;
```

## Parameters

- `recipient`: The content key recipient to use for the session.

<a id="Discussion"></a>

## Discussion

Don’t add a recipient to a session that has expired or had already begun to process media data.

## See Also

### Managing content key recipients

- [contentKeyRecipients](contentkeyrecipients.md): An array of content key recipients.
- [AVContentKeyRecipient](../avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [removeContentKeyRecipient:](removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.
