> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/collection/popfirst()](https://developer.apple.com/documentation/swift/collection/popfirst())

# popFirst()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the first element of the collection.

## Declaration

```swift
mutating func popFirst() -> Self.Element?
```

<a id="return-value"></a>

## Return Value

The first element of the collection if the collection is not empty; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(1)

## See Also

### Selecting and Excluding Elements

- [removeFirst()](removefirst%28%29.md): Conforms when `Self` is `Self.SubSequence`. Removes and returns the first element of the collection.
- [removeFirst(\_:)](removefirst%28__%29.md): Conforms when `Self` is `Self.SubSequence`. Removes the specified number of elements from the beginning of the collection.
