> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/discontiguousslice/isempty](https://developer.apple.com/documentation/swift/discontiguousslice/isempty)

# isEmpty

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value indicating whether the collection is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="discussion"></a>

## Discussion

When you need to check whether your collection is empty, use the `isEmpty` property instead of checking that the `count` property is equal to zero. For collections that don’t conform to `RandomAccessCollection`, accessing the `count` property iterates through the elements of the collection.

```swift
let horseName = "Silver"
if horseName.isEmpty {
    print("My horse has no name.")
} else {
    print("Hi ho, \(horseName)!")
}
// Prints "Hi ho, Silver!"
```

> **Complexity**

> O(1)
