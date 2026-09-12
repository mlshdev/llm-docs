> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/index(_:offsetby:)](https://developer.apple.com/documentation/swift/uniquearray/index(_:offsetby:))

# index(\_:offsetBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns an index that is the specified distance from the given index.

## Declaration

```swift
func index(_ index: Int, offsetBy n: Int) -> Int
```

## Parameters

- `index`: A valid index of the array.
- `n`: The distance by which to offset `index`.

<a id="return-value"></a>

## Return Value

An index offset by distance from `index`. If `n` is positive, this is the same value as the result of `n` calls to `index(after:)`. If `n` is negative, this is the same value as the result of `abs(n)` calls to `index(before:)`.

<a id="discussion"></a>

## Discussion

The value passed as `n` must not offset `index` beyond the bounds of the array.

> **Note**

> To improve performance, this method does not validate that the given index is valid before offseting it. Index validation is deferred until the resulting index is used to access an element. This optimization may be removed in future versions; do not rely on it.

> **Complexity**

> O(1)
