> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span/indices(of:)](https://developer.apple.com/documentation/swift/span/indices(of:))

# indices(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Returns the indices within this span where the memory represented by other is located, or nil if other is not located within this span.

## Declaration

```swift
func indices(of other: borrowing Span<Element>) -> Range<Span<Element>.Index>?
```

## Parameters

- `other`: A span that may be a subrange of `self`

<a id="return-value"></a>

## Return Value

A range of indices within `self`, or `nil`.
