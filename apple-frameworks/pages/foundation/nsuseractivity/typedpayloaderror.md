> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/typedpayloaderror](https://developer.apple.com/documentation/foundation/nsuseractivity/typedpayloaderror)

# NSUserActivity.TypedPayloadError

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An enumeration that describes the error types for getting and setting a typed payload.

## Declaration

```swift
enum TypedPayloadError
```

<a id="overview"></a>

## Overview

Use this enumeration to manage errors from [typedPayload(\_:)](typedpayload%28__%29.md) and [setTypedPayload(\_:)](settypedpayload%28__%29.md).

## Topics

### Typed payload errors

- [NSUserActivity.TypedPayloadError.encodingError](typedpayloaderror/encodingerror.md): An encoding error that indicates that the content failed to encode into a valid dictionary.
- [NSUserActivity.TypedPayloadError.invalidContent](typedpayloaderror/invalidcontent.md): A decoding error that indicates that the user info dictionary is empty or invalid.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing type-safe access to user info

- [setTypedPayload(\_:)](settypedpayload%28__%29.md): Encodes the specified payload into the user activity’s user info dictionary.
- [typedPayload(\_:)](typedpayload%28__%29.md): Decodes the user activity’s user info dictionary as an instance of the specified type.
