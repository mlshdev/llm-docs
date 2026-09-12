> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/typedpayload(_:)](https://developer.apple.com/documentation/foundation/nsuseractivity/typedpayload(_:))

# typedPayload(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Decodes the user activity’s user info dictionary as an instance of the specified type.

## Declaration

```swift
func typedPayload<T>(_ type: T.Type) throws -> T where T : Decodable, T : Encodable
```

## Parameters

- `type`: The type to decode from [userInfo](userinfo.md). The `type` must conform to [Codable](https://developer.apple.com/documentation/swift/codable).

<a id="return-value"></a>

## Return Value

The type-safe instance.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method applies only to SwiftUI apps.

Use this method to retrieve information from the user activity’s [userInfo](userinfo.md) dictionary in a type-safe manner.

If the type can’t be decoded from the [userInfo](userinfo.md) dictionary, this method throws [NSUserActivity.TypedPayloadError.invalidContent](typedpayloaderror/invalidcontent.md).

## See Also

### Managing type-safe access to user info

- [setTypedPayload(\_:)](settypedpayload%28__%29.md): Encodes the specified payload into the user activity’s user info dictionary.
- [NSUserActivity.TypedPayloadError](typedpayloaderror.md): An enumeration that describes the error types for getting and setting a typed payload.
