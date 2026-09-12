> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/nestedunkeyedcontainer()](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/nestedunkeyedcontainer())

# nestedUnkeyedContainer()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes an unkeyed nested container.

## Declaration

```swift
mutating func nestedUnkeyedContainer() throws -> any UnkeyedDecodingContainer
```

<a id="return-value"></a>

## Return Value

An unkeyed decoding container view into `self`.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered stored value is not an unkeyed container.
