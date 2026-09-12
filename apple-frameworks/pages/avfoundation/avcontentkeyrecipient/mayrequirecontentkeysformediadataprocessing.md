> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrecipient/mayrequirecontentkeysformediadataprocessing](https://developer.apple.com/documentation/avfoundation/avcontentkeyrecipient/mayrequirecontentkeysformediadataprocessing)

# mayRequireContentKeysForMediaDataProcessing (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the recipient requires decryption keys for media data to enable processing.

## Declaration

```swift
var mayRequireContentKeysForMediaDataProcessing: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), adding the recipient to a content key session allows the recipient to use the session’s existing keys. It also enables handling of new key requests by the session’s delegate object.

## See Also

### Verifying decryption key requirements

- [contentKeySession(\_:didProvide:)](contentkeysession%28__didprovide_%29.md): Tells the recipient that a content key is available.

# mayRequireContentKeysForMediaDataProcessing (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the recipient requires decryption keys for media data to enable processing.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL mayRequireContentKeysForMediaDataProcessing;
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), adding the recipient to a content key session allows the recipient to use the session’s existing keys. It also enables handling of new key requests by the session’s delegate object.

## See Also

### Verifying decryption key requirements

- [contentKeySession:didProvideContentKey:](contentkeysession%28__didprovide_%29.md): Tells the recipient that a content key is available.
