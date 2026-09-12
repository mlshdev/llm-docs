> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/init(from:)](https://developer.apple.com/documentation/swift/set/init(from:))

# init(from:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new set by decoding from the given decoder.

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

### Encoding and Decoding

- [encode(to:)](encode%28to_%29.md): Conforms when `Element` conforms to `Encodable` and `Hashable`. Encodes the elements of this set into the given encoder in an unkeyed container.
