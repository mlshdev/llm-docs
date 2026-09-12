> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/removelast(_:)](https://developer.apple.com/documentation/swift/uniquearray/removelast(_:))

# removeLast(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes and discards the specified number of elements from the end of the array.

## Declaration

```swift
mutating func removeLast(_ k: Int)
```

## Parameters

- `k`: The number of elements to remove from the array. `k` must be greater than or equal to zero and must not exceed the count of the array.

<a id="discussion"></a>

## Discussion

Attempting to remove more elements than exist in the array triggers a runtime error.

> **Complexity**

> O(`k`)
