> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decoder/container(keyedby:)](https://developer.apple.com/documentation/swift/decoder/container(keyedby:))

# container(keyedBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the data stored in this decoder as represented in a container keyed by the given key type.

## Declaration

```swift
func container<Key>(keyedBy type: Key.Type) throws -> KeyedDecodingContainer<Key> where Key : CodingKey
```

## Parameters

- `type`: The key type to use for the container.

<a id="return-value"></a>

## Return Value

A keyed decoding container view into this decoder.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered stored value is not a keyed container.
