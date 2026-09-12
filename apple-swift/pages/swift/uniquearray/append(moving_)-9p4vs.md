> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/append(moving:)-9p4vs](https://developer.apple.com/documentation/swift/uniquearray/append(moving:)-9p4vs)

# append(moving:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Moves the elements of a output span to the end of this array, leaving the span empty.

## Declaration

```swift
mutating func append(moving items: inout OutputSpan<Element>)
```

## Parameters

- `items`: An output span whose contents need to be appended to this array.

<a id="discussion"></a>

## Discussion

If the array does not have sufficient capacity to hold all new items, then this reallocates the array’s storage to grow its capacity, using a geometric growth rate.

> **Complexity**

> O(`items.count`)
