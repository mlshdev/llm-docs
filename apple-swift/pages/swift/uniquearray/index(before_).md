> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/index(before:)](https://developer.apple.com/documentation/swift/uniquearray/index(before:))

# index(before:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the position immediately before the given index.

## Declaration

```swift
func index(before index: Int) -> Int
```

## Parameters

- `index`: A valid index of the array. `i` must be greater than `startIndex`.

<a id="return-value"></a>

## Return Value

The index immediately preceding `i`.

<a id="discussion"></a>

## Discussion

> **Note**

> To improve performance, this method does not validate that the index is valid before decrementing it. Index validation is deferred until the resulting index is used to access an element. This optimization may be removed in future versions; do not rely on it.

> **Complexity**

> O(1)
