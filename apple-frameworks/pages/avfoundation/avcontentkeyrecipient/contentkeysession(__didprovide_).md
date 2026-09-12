> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrecipient/contentkeysession(_:didprovide:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient/contentkeysession(_:didprovide:))

# contentKeySession(\_:didProvide:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Tells the recipient that a content key is available.

## Declaration

```swift
optional func contentKeySession(_ contentKeySession: AVContentKeySession, didProvide contentKey: AVContentKey)
```

## Parameters

- `contentKeySession`: The current content key session.
- `contentKey`: A content key to use with objects that support manual attachment of keys, such as [CMSampleBuffer](../../coremedia/cmsamplebuffer.md).

## See Also

### Verifying decryption key requirements

- [mayRequireContentKeysForMediaDataProcessing](mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether the recipient requires decryption keys for media data to enable processing.

# contentKeySession:didProvideContentKey: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

Tells the recipient that a content key is available.

## Declaration

```objectivec
- (void) contentKeySession:(AVContentKeySession *) contentKeySession didProvideContentKey:(AVContentKey *) contentKey;
```

## Parameters

- `contentKeySession`: The current content key session.
- `contentKey`: A content key to use with objects that support manual attachment of keys, such as [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md).

## See Also

### Verifying decryption key requirements

- [mayRequireContentKeysForMediaDataProcessing](mayrequirecontentkeysformediadataprocessing.md): A Boolean value that indicates whether the recipient requires decryption keys for media data to enable processing.
