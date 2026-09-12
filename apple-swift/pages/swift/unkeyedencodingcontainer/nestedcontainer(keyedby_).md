> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyedencodingcontainer/nestedcontainer(keyedby:)](https://developer.apple.com/documentation/swift/unkeyedencodingcontainer/nestedcontainer(keyedby:))

# nestedContainer(keyedBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a nested container keyed by the given type and returns it.

## Declaration

```swift
mutating func nestedContainer<NestedKey>(keyedBy keyType: NestedKey.Type) -> KeyedEncodingContainer<NestedKey> where NestedKey : CodingKey
```

## Parameters

- `keyType`: The key type to use for the container.

<a id="return-value"></a>

## Return Value

A new keyed encoding container.
