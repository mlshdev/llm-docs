> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcontentkeysession/storageurl

# storageURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A URL that points to a writable storage directory.

## Declaration

```swift
var storageURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

The writable directory stores expired session reports.

## See Also

### Inspecting the session

- [keySystem](keysystem.md): The type of key system used to retrieve keys.
- [AVContentKeySystem](../avcontentkeysystem.md): A key-delivery method for a content key session.

# storageURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A URL that points to a writable storage directory.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * storageURL;
```

<a id="Discussion"></a>

## Discussion

The writable directory stores expired session reports.

## See Also

### Inspecting the session

- [keySystem](keysystem.md): The type of key system used to retrieve keys.
- [AVContentKeySystem](../avcontentkeysystem.md): A key-delivery method for a content key session.
