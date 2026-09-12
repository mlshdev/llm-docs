> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/formindex(after:)](https://developer.apple.com/documentation/swift/uniquearray/formindex(after:))

# formIndex(after:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Replaces the given index with its successor.

## Declaration

```swift
func formIndex(after index: inout Int)
```

## Parameters

- `index`: A valid index of the array. `i` must be less than `endIndex`.

<a id="discussion"></a>

## Discussion

> **Note**

> To improve performance, this method does not validate that the given index is valid before incrementing it. Index validation is deferred until the resulting index is used to access an element. This optimization may be removed in future versions; do not rely on it.

> **Complexity**

> O(1)
