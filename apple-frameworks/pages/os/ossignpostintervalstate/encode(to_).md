> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/ossignpostintervalstate/encode(to:)

# encode(to:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Encodes the interval state into the provided encoder.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You don’t call this method directly. Instead, the object you’re using to encode the interval state, which must adopt the [Encoder](https://developer.apple.com/documentation/swift/encoder) protocol, calls it on your behalf as part of the serialization process.

The method throws an error if the interval state is invalid for the specified encoder’s format.
