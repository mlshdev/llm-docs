> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/encode(to:)](https://developer.apple.com/documentation/swift/set/encode(to:))

# encode(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes the elements of this set into the given encoder in an unkeyed container.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

This function throws an error if any values are invalid for the given encoder’s format.

## See Also

### Encoding and Decoding

- [init(from:)](init%28from_%29.md): Conforms when `Element` conforms to `Decodable` and `Hashable`. Creates a new set by decoding from the given decoder.
