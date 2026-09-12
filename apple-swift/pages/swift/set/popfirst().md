> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/set/popfirst()](https://developer.apple.com/documentation/swift/set/popfirst())

# popFirst()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the first element of the set.

## Declaration

```swift
mutating func popFirst() -> Element?
```

<a id="return-value"></a>

## Return Value

A member of the set. If the set is empty, returns `nil`.

<a id="discussion"></a>

## Discussion

Because a set is not an ordered collection, the “first” element may not be the first element that was added to the set.

## See Also

### Excluding Elements

- [drop(while:)](drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
