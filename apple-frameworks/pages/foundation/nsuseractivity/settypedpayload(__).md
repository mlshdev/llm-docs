> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/settypedpayload(_:)](https://developer.apple.com/documentation/foundation/nsuseractivity/settypedpayload(_:))

# setTypedPayload(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Encodes the specified payload into the user activity’s user info dictionary.

## Declaration

```swift
func setTypedPayload<T>(_ payload: T) throws where T : Decodable, T : Encodable
```

## Parameters

- `payload`: The instance to convert to [userInfo](userinfo.md). The type of the `payload` instance must conform to [Codable](https://developer.apple.com/documentation/swift/codable).

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method applies only to SwiftUI apps.

Use this method to set the user activity’s [userInfo](userinfo.md) dictionary in a type-safe manner. After you set the [userInfo](userinfo.md) dictionary using this approach, the keys in the [userInfo](userinfo.md) dictionary match the coding keys from the [Codable](https://developer.apple.com/documentation/swift/codable) type you provide as the `payload`.

If the type can’t be encoded into the [userInfo](userinfo.md) dictionary, this method throws [NSUserActivity.TypedPayloadError.encodingError](typedpayloaderror/encodingerror.md).

## See Also

### Managing type-safe access to user info

- [typedPayload(\_:)](typedpayload%28__%29.md): Decodes the user activity’s user info dictionary as an instance of the specified type.
- [NSUserActivity.TypedPayloadError](typedpayloaderror.md): An enumeration that describes the error types for getting and setting a typed payload.
