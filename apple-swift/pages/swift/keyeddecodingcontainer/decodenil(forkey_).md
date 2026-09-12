> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainer/decodenil(forkey:)](https://developer.apple.com/documentation/swift/keyeddecodingcontainer/decodenil(forkey:))

# decodeNil(forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a null value for the given key.

## Declaration

```swift
func decodeNil(forKey key: KeyedDecodingContainer<K>.Key) throws -> Bool
```

## Parameters

- `key`: The key that the decoded value is associated with.

<a id="return-value"></a>

## Return Value

Whether the encountered value was null.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.keyNotFound` if `self` does not have an entry for the given key.
