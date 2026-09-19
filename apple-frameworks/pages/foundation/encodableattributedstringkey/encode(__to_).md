> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/encodableattributedstringkey/encode(_:to:)

# encode(\_:to:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Encodes a value to the provided encoder.

## Declaration

```swift
static func encode(_ value: Self.Value, to encoder: any Encoder) throws
```

## Parameters

- `value`: The value to encode.
- `encoder`: The encoder to write data to.

<a id="Discussion"></a>

## Discussion

This method throws an error if writing to the encoder fails.

## Default Implementations

### EncodableAttributedStringKey Implementations

- [encode(\_:to:)](encode%28__to_%29-16dss.md): Conforms when `Value` inherits `NSObject` and `Value` conforms to `NSSecureCoding`. Encodes an Objective-C value to the provided encoder, using a default implementation.
- [encode(\_:to:)](encode%28__to_%29-47oas.md): Conforms when `Value` conforms to `Encodable`.
