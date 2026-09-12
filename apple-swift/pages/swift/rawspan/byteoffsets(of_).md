> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawspan/byteoffsets(of:)](https://developer.apple.com/documentation/swift/rawspan/byteoffsets(of:))

# byteOffsets(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns the byte offsets within this span where the memory represented by other is located, or nil if other is not located within this span.

## Declaration

```swift
func byteOffsets(of other: borrowing RawSpan) -> Range<Int>?
```

## Parameters

- `other`: A span that may be a subrange of `self`

<a id="return-value"></a>

## Return Value

A range of byte offsets within `self`, or `nil`.
