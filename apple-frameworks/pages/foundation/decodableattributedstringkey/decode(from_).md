> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decodableattributedstringkey/decode(from:)](https://developer.apple.com/documentation/foundation/decodableattributedstringkey/decode(from:))

# decode(from:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Decodes a value from the provided decoder.

## Declaration

```swift
static func decode(from decoder: any Decoder) throws -> Self.Value
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="return-value"></a>

## Return Value

The decoded value.

<a id="Discussion"></a>

## Discussion

This method throws an error if reading from the decoder fails, or if the data read is corrupted or otherwise invalid.

## Default Implementations

### DecodableAttributedStringKey Implementations

- [decode(from:)](decode%28from_%29-1n7im.md): Conforms when `Value` conforms to `Decodable`. Decodes a Swift value from the provided decoder, using a default implementation.
- [decode(from:)](decode%28from_%29-3yywq.md): Conforms when `Value` inherits `NSObject` and `Value` conforms to `NSSecureCoding`. Decodes an Objective-C value from the provided decoder, using a default implementation.
