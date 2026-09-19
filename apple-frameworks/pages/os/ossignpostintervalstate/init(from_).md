> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/ossignpostintervalstate/init(from:)

# init(from:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Decodes the interval state from the provided decoder.

## Declaration

```swift
required init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You don’t call this method directly. Instead, the object you’re using to decode the interval state, which must adopt the [Decoder](https://developer.apple.com/documentation/swift/decoder) protocol, calls it on your behalf as part of the serialization process.

The initializer throws an error if reading from the decoder fails, or if the decoder’s data is corrupt or invalid.
