> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/typedpayloaderror/invalidcontent](https://developer.apple.com/documentation/foundation/nsuseractivity/typedpayloaderror/invalidcontent)

# NSUserActivity.TypedPayloadError.invalidContent

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A decoding error that indicates that the user info dictionary is empty or invalid.

## Declaration

```swift
case invalidContent
```

<a id="Discussion"></a>

## Discussion

The [typedPayload(\_:)](../typedpayload%28__%29.md) method throws this error.

## See Also

### Typed payload errors

- [NSUserActivity.TypedPayloadError.encodingError](encodingerror.md): An encoding error that indicates that the content failed to encode into a valid dictionary.
