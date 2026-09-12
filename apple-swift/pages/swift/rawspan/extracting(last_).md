> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/extracting(last:)](https://developer.apple.com/documentation/swift/rawspan/extracting(last:))

# extracting(last:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns a span containing the trailing bytes of the span, up to the given maximum length.

## Declaration

```swift
func extracting(last maxLength: Int) -> RawSpan
```

## Parameters

- `maxLength`: The maximum number of bytes to return. `maxLength` must be greater than or equal to zero.

<a id="return-value"></a>

## Return Value

A span with at most `maxLength` bytes.

<a id="discussion"></a>

## Discussion

If the maximum length exceeds the length of this span, the result contains all the bytes.

The returned span’s first byte is always at offset 0; unlike buffer slices, extracted spans do not share their indices with the span from which they are extracted.

> **Complexity**

> O(1)
