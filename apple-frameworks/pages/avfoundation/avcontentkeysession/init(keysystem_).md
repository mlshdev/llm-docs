> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/init(keysystem:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/init(keysystem:))

# init(keySystem:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key session to manage a collection of content decryption keys.

## Declaration

```swift
convenience init(keySystem: AVContentKeySystem)
```

## Parameters

- `keySystem`: A valid key system used to retrieve keys.

<a id="return-value"></a>

## Return Value

Returns a new [AVContentKeySession](../avcontentkeysession.md) instance.

<a id="Discussion"></a>

## Discussion

The `AVContentKeySession` instance returned is capable of managing a collection of content decryption keys that correspond to the input key system. An [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised when the value of `keySystem` is unsupported.

## See Also

### Creating a session

- [init(keySystem:storageDirectoryAt:)](init%28keysystem_storagedirectoryat_%29.md): Creates a content key session to manage a collection of content decryption keys; points to a directory that stores abnormal session termination reports.

# contentKeySessionWithKeySystem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a content key session to manage a collection of content decryption keys.

## Declaration

```objectivec
+ (instancetype) contentKeySessionWithKeySystem:(AVContentKeySystem) keySystem;
```

## Parameters

- `keySystem`: A valid key system used to retrieve keys.

<a id="return-value"></a>

## Return Value

Returns a new [AVContentKeySession](../avcontentkeysession.md) instance.

<a id="Discussion"></a>

## Discussion

The `AVContentKeySession` instance returned is capable of managing a collection of content decryption keys that correspond to the input key system. An [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised when the value of `keySystem` is unsupported.

## See Also

### Creating a session

- [contentKeySessionWithKeySystem:storageDirectoryAtURL:](init%28keysystem_storagedirectoryat_%29.md): Creates a content key session to manage a collection of content decryption keys; points to a directory that stores abnormal session termination reports.
