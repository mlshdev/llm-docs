> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dictionary/popfirst()](https://developer.apple.com/documentation/swift/dictionary/popfirst())

# popFirst()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes and returns the first key-value pair of the dictionary if the dictionary isn’t empty.

## Declaration

```swift
mutating func popFirst() -> Dictionary<Key, Value>.Element?
```

<a id="return-value"></a>

## Return Value

The first key-value pair of the dictionary if the dictionary is not empty; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

The first element of the dictionary is not necessarily the first element added. Don’t expect any particular ordering of key-value pairs.

> **Complexity**

> Averages to O(1) over many calls to `popFirst()`.

## See Also

### Excluding Elements

- [dropFirst(\_:)](dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [drop(while:)](drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropLast(\_:)](droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
