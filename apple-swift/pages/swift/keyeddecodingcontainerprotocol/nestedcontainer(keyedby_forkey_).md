> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol/nestedcontainer(keyedby:forkey:)](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol/nestedcontainer(keyedby:forkey:))

# nestedContainer(keyedBy:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the data stored for the given key as represented in a container keyed by the given key type.

## Declaration

```swift
func nestedContainer<NestedKey>(keyedBy type: NestedKey.Type, forKey key: Self.Key) throws -> KeyedDecodingContainer<NestedKey> where NestedKey : CodingKey
```

## Parameters

- `type`: The key type to use for the container.
- `key`: The key that the nested container is associated with.

<a id="return-value"></a>

## Return Value

A keyed decoding container view into `self`.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered stored value is not a keyed container.
