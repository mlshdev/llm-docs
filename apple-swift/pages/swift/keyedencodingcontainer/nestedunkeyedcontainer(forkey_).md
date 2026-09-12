> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainer/nestedunkeyedcontainer(forkey:)](https://developer.apple.com/documentation/swift/keyedencodingcontainer/nestedunkeyedcontainer(forkey:))

# nestedUnkeyedContainer(forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stores an unkeyed encoding container for the given key and returns it.

## Declaration

```swift
mutating func nestedUnkeyedContainer(forKey key: KeyedEncodingContainer<K>.Key) -> any UnkeyedEncodingContainer
```

## Parameters

- `key`: The key to encode the container for.

<a id="return-value"></a>

## Return Value

A new unkeyed encoding container.
