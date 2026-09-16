> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/substring/unicodescalarview/index(after:)

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position immediately after the given index.

## Declaration

```swift
func index(after i: Substring.UnicodeScalarView.Index) -> Substring.UnicodeScalarView.Index
```

## Parameters

- `i`: A valid index of the collection. `i` must be less than `endIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately after `i`.

<a id="discussion"></a>

## Discussion

The successor of an index must be well defined. For an index `i` into a collection `c`, calling `c.index(after: i)` returns the same index every time.
