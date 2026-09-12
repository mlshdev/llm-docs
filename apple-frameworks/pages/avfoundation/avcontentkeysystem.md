> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysystem](https://developer.apple.com/documentation/avfoundation/avcontentkeysystem)

# AVContentKeySystem (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key-delivery method for a content key session.

## Declaration

```swift
struct AVContentKeySystem
```

## Topics

### Key-delivery methods

- [fairPlayStreaming](avcontentkeysystem/fairplaystreaming.md): A method of key delivery that uses FairPlay Streaming.
- [clearKey](avcontentkeysystem/clearkey.md): A method of key delivery that uses a clear key system.
- [authorizationToken](avcontentkeysystem/authorizationtoken.md): A method of key delivery that uses a token to authorize playback.

### Initializers

- [init(rawValue:)](avcontentkeysystem/init%28rawvalue_%29.md): Creates a content key system with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the session

- [keySystem](avcontentkeysession/keysystem.md): The type of key system used to retrieve keys.
- [storageURL](avcontentkeysession/storageurl.md): A URL that points to a writable storage directory.

# AVContentKeySystem (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key-delivery method for a content key session.

## Declaration

```objectivec
typedef NSString * AVContentKeySystem;
```

## Topics

### Key-delivery methods

- [AVContentKeySystemFairPlayStreaming](avcontentkeysystem/fairplaystreaming.md): A method of key delivery that uses FairPlay Streaming.
- [AVContentKeySystemClearKey](avcontentkeysystem/clearkey.md): A method of key delivery that uses a clear key system.
- [AVContentKeySystemAuthorizationToken](avcontentkeysystem/authorizationtoken.md): A method of key delivery that uses a token to authorize playback.

## See Also

### Inspecting the session

- [keySystem](avcontentkeysession/keysystem.md): The type of key system used to retrieve keys.
- [storageURL](avcontentkeysession/storageurl.md): A URL that points to a writable storage directory.
