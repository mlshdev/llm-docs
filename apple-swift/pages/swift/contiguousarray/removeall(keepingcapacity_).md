> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/contiguousarray/removeall(keepingcapacity:)](https://developer.apple.com/documentation/swift/contiguousarray/removeall(keepingcapacity:))

# removeAll(keepingCapacity:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all elements from the array.

## Declaration

```swift
mutating func removeAll(keepingCapacity keepCapacity: Bool = false)
```

## Parameters

- `keepCapacity`: Pass `true` to keep the existing capacity of the array after removing its elements. The default value is `false`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n*), where *n* is the length of the array.
