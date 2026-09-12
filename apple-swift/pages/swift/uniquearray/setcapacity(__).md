> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/setcapacity(_:)](https://developer.apple.com/documentation/swift/uniquearray/setcapacity(_:))

# setCapacity(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Grow or shrink the capacity of a unique array instance without discarding its contents.

## Declaration

```swift
mutating func setCapacity(_ newCapacity: Int)
```

<a id="discussion"></a>

## Discussion

This operation replaces the array’s storage buffer with a newly allocated buffer of the specified capacity, moving all existing elements to its new storage. The old storage is then deallocated.

> **Complexity**

> O(`count`)
