> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(from:)](https://developer.apple.com/documentation/swift/int/init(from:))

# init(from:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

## See Also

### Encoding and Decoding Values

- [encode(to:)](encode%28to_%29.md): Encodes this value into the given encoder.
