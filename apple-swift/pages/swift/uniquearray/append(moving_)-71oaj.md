> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/append(moving:)-71oaj](https://developer.apple.com/documentation/swift/uniquearray/append(moving:)-71oaj)

# append(moving:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Moves the elements of a buffer to the end of this array, leaving the buffer uninitialized.

## Declaration

```swift
mutating func append(moving items: UnsafeMutableBufferPointer<Element>)
```

## Parameters

- `items`: A fully initialized buffer whose contents to move into the array.

<a id="discussion"></a>

## Discussion

If the array does not have sufficient capacity to hold all items in the buffer, then this reallocates the array’s storage to grow its capacity, using a geometric growth rate.

> **Complexity**

> O(`count` \+ `items.count`)
