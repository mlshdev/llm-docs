> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/decodenil()](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decodenil())

# decodeNil()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a null value.

## Declaration

```swift
mutating func decodeNil() throws -> Bool
```

<a id="return-value"></a>

## Return Value

Whether the encountered value was null.

<a id="discussion"></a>

## Discussion

If the value is not null, does not increment currentIndex.

> **Throws**

> `DecodingError.valueNotFound` if there are no more values to decode.
