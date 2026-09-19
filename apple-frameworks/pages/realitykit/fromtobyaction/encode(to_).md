> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/fromtobyaction/encode(to:)

# encode(to:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Writes the action data into an encoder.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

If the value fails to encode anything, `encoder` will encode an empty keyed container. This function throws an [Error](https://developer.apple.com/documentation/swift/error) if any values are invalid for the given encoder’s format.
