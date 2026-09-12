> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainer/superdecoder(forkey:)](https://developer.apple.com/documentation/swift/keyeddecodingcontainer/superdecoder(forkey:))

# superDecoder(forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `Decoder` instance for decoding `super` from the container associated with the given key.

## Declaration

```swift
func superDecoder(forKey key: KeyedDecodingContainer<K>.Key) throws -> any Decoder
```

## Parameters

- `key`: The key to decode `super` for.

<a id="return-value"></a>

## Return Value

A new `Decoder` to pass to `super.init(from:)`.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.keyNotFound` if `self` does not have an entry for the given key.

> **Throws**

> `DecodingError.valueNotFound` if `self` has a null entry for the given key.
