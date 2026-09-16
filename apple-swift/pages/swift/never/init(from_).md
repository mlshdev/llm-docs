> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/never/init(from:)

# init(from:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new instance by decoding from the given decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="discussion"></a>

## Discussion

This initializer throws an error if reading from the decoder fails, or if the data read is corrupted or otherwise invalid.
