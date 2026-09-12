> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol/nestedcontainer(keyedby:forkey:)](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol/nestedcontainer(keyedby:forkey:))

# nestedContainer(keyedBy:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores a keyed encoding container for the given key and returns it.

## Declaration

```swift
mutating func nestedContainer<NestedKey>(keyedBy keyType: NestedKey.Type, forKey key: Self.Key) -> KeyedEncodingContainer<NestedKey> where NestedKey : CodingKey
```

## Parameters

- `keyType`: The key type to use for the container.
- `key`: The key to encode the container for.

<a id="return-value"></a>

## Return Value

A new keyed encoding container.
