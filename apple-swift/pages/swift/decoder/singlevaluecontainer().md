> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/decoder/singlevaluecontainer()](https://developer.apple.com/documentation/swift/decoder/singlevaluecontainer())

# singleValueContainer()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the data stored in this decoder as represented in a container appropriate for holding a single primitive value.

## Declaration

```swift
func singleValueContainer() throws -> any SingleValueDecodingContainer
```

<a id="return-value"></a>

## Return Value

A single value container view into this decoder.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered stored value is not a single value container.
