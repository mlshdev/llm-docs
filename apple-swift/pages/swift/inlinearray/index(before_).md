> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/inlinearray/index(before:)

# index(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the position immediately before the given index.

## Declaration

```swift
borrowing func index(before i: InlineArray<count, Element>.Index) -> InlineArray<count, Element>.Index
```

## Parameters

- `i`: A valid index of the array. `i` must be greater than `startIndex`.

<a id="return-value"></a>

## Return Value

The index value immediately before `i`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1)
