> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrecipient](https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient)

# AVContentKeyRecipient (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A protocol for requiring decryption keys for media data.

## Declaration

```swift
protocol AVContentKeyRecipient
```

## Topics

### Verifying decryption key requirements

- [mayRequireContentKeysForMediaDataProcessing](avcontentkeyrecipient/mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether the recipient requires decryption keys for media data to enable processing.
- [contentKeySession(\_:didProvide:)](avcontentkeyrecipient/contentkeysession%28__didprovide_%29.md): Tells the recipient that a content key is available.

## Relationships

### Conforming Types

- [AVFragmentedAsset](avfragmentedasset.md)
- [AVURLAsset](avurlasset.md)

## See Also

### Managing content key recipients

- [contentKeyRecipients](avcontentkeysession/contentkeyrecipients.md): An array of content key recipients.
- [addContentKeyRecipient(\_:)](avcontentkeysession/addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
- [removeContentKeyRecipient(\_:)](avcontentkeysession/removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.

# AVContentKeyRecipient (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A protocol for requiring decryption keys for media data.

## Declaration

```objectivec
@protocol AVContentKeyRecipient
```

## Topics

### Verifying decryption key requirements

- [mayRequireContentKeysForMediaDataProcessing](avcontentkeyrecipient/mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether the recipient requires decryption keys for media data to enable processing.
- [contentKeySession:didProvideContentKey:](avcontentkeyrecipient/contentkeysession%28__didprovide_%29.md): Tells the recipient that a content key is available.

## Relationships

### Conforming Types

- [AVURLAsset](avurlasset.md)

## See Also

### Managing content key recipients

- [contentKeyRecipients](avcontentkeysession/contentkeyrecipients.md): An array of content key recipients.
- [addContentKeyRecipient:](avcontentkeysession/addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
- [removeContentKeyRecipient:](avcontentkeysession/removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.
