> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol/contains(_:)](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol/contains(_:))

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the decoder contains a value associated with the given key.

## Declaration

```swift
func contains(_ key: Self.Key) -> Bool
```

## Parameters

- `key`: The key to search for.

<a id="return-value"></a>

## Return Value

Whether the `Decoder` has an entry for the given key.

<a id="discussion"></a>

## Discussion

The value associated with `key` may be a null value as appropriate for the data format.
