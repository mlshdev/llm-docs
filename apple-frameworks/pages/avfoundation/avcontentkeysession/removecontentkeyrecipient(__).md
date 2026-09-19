> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcontentkeysession/removecontentkeyrecipient(_:)

# removeContentKeyRecipient(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate to remove the specified recipient.

## Declaration

```swift
func removeContentKeyRecipient(_ recipient: any AVContentKeyRecipient)
```

## Parameters

- `recipient`: The content key recipient to remove.

## See Also

### Managing content key recipients

- [contentKeyRecipients](contentkeyrecipients.md): An array of content key recipients.
- [AVContentKeyRecipient](../avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [addContentKeyRecipient(\_:)](addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.

# removeContentKeyRecipient: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate to remove the specified recipient.

## Declaration

```objectivec
- (void) removeContentKeyRecipient:(id<AVContentKeyRecipient>) recipient;
```

## Parameters

- `recipient`: The content key recipient to remove.

## See Also

### Managing content key recipients

- [contentKeyRecipients](contentkeyrecipients.md): An array of content key recipients.
- [AVContentKeyRecipient](../avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [addContentKeyRecipient:](addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
