> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/remove(_:)-8p2tv](https://developer.apple.com/documentation/swift/set/remove(_:)-8p2tv)

# remove(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the specified element from the set.

## Declaration

```swift
@discardableResult mutating func remove(_ member: Element) -> Element?
```

## Parameters

- `member`: The element to remove from the set.

<a id="return-value"></a>

## Return Value

The value of the `member` parameter if it was a member of the set; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

This example removes the element `"sugar"` from a set of ingredients.

```swift
var ingredients: Set = ["cocoa beans", "sugar", "cocoa butter", "salt"]
let toRemove = "sugar"
if let removed = ingredients.remove(toRemove) {
    print("The recipe is now \(removed)-free.")
}
// Prints "The recipe is now sugar-free."
```

## See Also

### Removing Elements

- [filter(\_:)](filter%28__%29.md): Conforms when `Element` conforms to `Hashable`. Returns a new set containing the elements of the set that satisfy the given predicate.
- [remove(\_:)](remove%28__%29-4d3i1.md): Conforms when `Element` is `AnyHashable`.
- [removeFirst()](removefirst%28%29.md): Conforms when `Element` conforms to `Hashable`. Removes the first element of the set.
- [remove(at:)](remove%28at_%29.md): Conforms when `Element` conforms to `Hashable`. Removes the element at the given index of the set.
- [removeAll(keepingCapacity:)](removeall%28keepingcapacity_%29.md): Conforms when `Element` conforms to `Hashable`. Removes all members from the set.
