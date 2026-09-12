> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/init(keysystem:storagedirectoryat:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/init(keysystem:storagedirectoryat:))

# init(keySystem:storageDirectoryAt:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key session to manage a collection of content decryption keys; points to a directory that stores abnormal session termination reports.

## Declaration

```swift
convenience init(keySystem: AVContentKeySystem, storageDirectoryAt storageURL: URL)
```

## Parameters

- `keySystem`: A valid key system used to retrieve keys.
- `storageURL`: A URL that points to a writable directory. The session uses the directory to facilitate expired session reports after an abnormal session termination.

<a id="return-value"></a>

## Return Value

Returns a new AVContentKeySession instance.

<a id="Discussion"></a>

## Discussion

The `AVContentKeySession` instance returned is capable of managing a collection of content decryption keys that correspond to the input key system. An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised when the value of `keySystem` is unsupported.

## See Also

### Creating a session

- [init(keySystem:)](init%28keysystem_%29.md): Creates a content key session to manage a collection of content decryption keys.

# contentKeySessionWithKeySystem:storageDirectoryAtURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key session to manage a collection of content decryption keys; points to a directory that stores abnormal session termination reports.

## Declaration

```objectivec
+ (instancetype) contentKeySessionWithKeySystem:(AVContentKeySystem) keySystem storageDirectoryAtURL:(NSURL *) storageURL;
```

## Parameters

- `keySystem`: A valid key system used to retrieve keys.
- `storageURL`: A URL that points to a writable directory. The session uses the directory to facilitate expired session reports after an abnormal session termination.

<a id="return-value"></a>

## Return Value

Returns a new AVContentKeySession instance.

<a id="Discussion"></a>

## Discussion

The `AVContentKeySession` instance returned is capable of managing a collection of content decryption keys that correspond to the input key system. An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised when the value of `keySystem` is unsupported.

## See Also

### Creating a session

- [contentKeySessionWithKeySystem:](init%28keysystem_%29.md): Creates a content key session to manage a collection of content decryption keys.
