> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collectionofone/isempty](https://developer.apple.com/documentation/swift/collectionofone/isempty)

# isEmpty

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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
// Prints "Hi ho, Silver!")
```

> **Complexity**

> O(1)
