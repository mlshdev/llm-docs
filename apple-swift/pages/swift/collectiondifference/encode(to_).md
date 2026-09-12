> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectiondifference/encode(to:)](https://developer.apple.com/documentation/swift/collectiondifference/encode(to:))

# encode(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Encodes this value into the given encoder.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

If the value fails to encode anything, `encoder` will encode an empty keyed container in its place.

This function throws an error if any values are invalid for the given encoder’s format.
