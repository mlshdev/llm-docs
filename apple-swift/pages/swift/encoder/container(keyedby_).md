> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/encoder/container(keyedby:)](https://developer.apple.com/documentation/swift/encoder/container(keyedby:))

# container(keyedBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an encoding container appropriate for holding multiple values keyed by the given key type.

## Declaration

```swift
func container<Key>(keyedBy type: Key.Type) -> KeyedEncodingContainer<Key> where Key : CodingKey
```

## Parameters

- `type`: The key type to use for the container.

<a id="return-value"></a>

## Return Value

A new keyed encoding container.

<a id="discussion"></a>

## Discussion

You must use only one kind of top-level encoding container. This method must not be called after a call to `unkeyedContainer()` or after encoding a value through a call to `singleValueContainer()`
