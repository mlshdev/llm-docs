> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decoder/unkeyedcontainer()](https://developer.apple.com/documentation/swift/decoder/unkeyedcontainer())

# unkeyedContainer()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the data stored in this decoder as represented in a container appropriate for holding values with no keys.

## Declaration

```swift
func unkeyedContainer() throws -> any UnkeyedDecodingContainer
```

<a id="return-value"></a>

## Return Value

An unkeyed container view into this decoder.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered stored value is not an unkeyed container.
