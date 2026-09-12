> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/keysystem](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/keysystem)

# keySystem (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The type of key system used to retrieve keys.

## Declaration

```swift
var keySystem: AVContentKeySystem { get }
```

<a id="Discussion"></a>

## Discussion

Valid values for keySystem are [fairPlayStreaming](../avcontentkeysystem/fairplaystreaming.md) and [clearKey](../avcontentkeysystem/clearkey.md).

## See Also

### Inspecting the session

- [AVContentKeySystem](../avcontentkeysystem.md): A key-delivery method for a content key session.
- [storageURL](storageurl.md): A URL that points to a writable storage directory.

# keySystem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The type of key system used to retrieve keys.

## Declaration

```objectivec
@property (readonly) AVContentKeySystem keySystem;
```

<a id="Discussion"></a>

## Discussion

Valid values for keySystem are [AVContentKeySystemFairPlayStreaming](../avcontentkeysystem/fairplaystreaming.md) and [AVContentKeySystemClearKey](../avcontentkeysystem/clearkey.md).

## See Also

### Inspecting the session

- [AVContentKeySystem](../avcontentkeysystem.md): A key-delivery method for a content key session.
- [storageURL](storageurl.md): A URL that points to a writable storage directory.
