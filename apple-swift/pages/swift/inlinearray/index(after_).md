> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/inlinearray/index(after:)](https://developer.apple.com/documentation/swift/inlinearray/index(after:))

# index(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the position immediately after the given index.

## Declaration

```swift
borrowing func index(after i: InlineArray<count, Element>.Index) -> InlineArray<count, Element>.Index
```

## Parameters

- `i`: A valid index of the array. `i` must be less than `endIndex`.

<a id="return-value"></a>

## Return Value

The index immediately after `i`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1)
