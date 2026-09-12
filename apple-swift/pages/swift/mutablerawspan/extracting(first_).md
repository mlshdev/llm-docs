> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan/extracting(first:)](https://developer.apple.com/documentation/swift/mutablerawspan/extracting(first:))

# extracting(first:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a span containing the initial bytes of this span, up to the specified maximum length.

## Declaration

```swift
mutating func extracting(first maxLength: Int) -> MutableRawSpan
```

## Parameters

- `maxLength`: The maximum number of bytes to return. `maxLength` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A span with at most `maxLength` bytes.

<a id="discussion"></a>

## Discussion

If the maximum length exceeds the length of this span, the result contains all the bytes.

The returned span represents a mutation of this span.

The returned span’s first item is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

> **Complexity**

> O(1)
