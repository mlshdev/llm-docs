> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/encodableattributedstringkey/encode(_:to:)-16dss](https://developer.apple.com/documentation/foundation/encodableattributedstringkey/encode(_:to:)-16dss)

# encode(\_:to:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Encodes an Objective-C value to the provided encoder, using a default implementation.

## Declaration

```swift
static func encode(_ value: Self.Value, to encoder: any Encoder) throws
```

## Parameters

- `value`: The value to encode.
- `encoder`: The encoder to write data to.

<a id="Discussion"></a>

## Discussion

The default implementation uses an [NSKeyedArchiver](../nskeyedarchiver.md) on the object, then calls [encode(to:)](https://developer.apple.com/documentation/swift/encodable/encode%28to:%29) on the resulting data.

This method throws an error if writing to the encoder fails.
