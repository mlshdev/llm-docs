> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anycollection/index(_:offsetby:)](https://developer.apple.com/documentation/swift/anycollection/index(_:offsetby:))

# index(\_:offsetBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an index that is the specified distance from the given index.

## Declaration

```swift
func index(_ i: AnyCollection<Element>.Index, offsetBy n: Int) -> AnyCollection<Element>.Index
```

## Parameters

- `i`: A valid index of the collection.

<a id="return-value"></a>

## Return Value

An index offset by `distance` from the index `i`. If `distance` is positive, this is the same value as the result of `distance` calls to `index(after:)`. If `distance` is negative, this is the same value as the result of `abs(distance)` calls to `index(before:)`.

<a id="discussion"></a>

## Discussion

The following example obtains an index advanced four positions from a string’s starting index and then prints the character at that position.

```swift
let s = "Swift"
let i = s.index(s.startIndex, offsetBy: 4)
print(s[i])
// Prints "t"
```

The value passed as `distance` must not offset `i` beyond the bounds of the collection.

> **Complexity**

> O(1) if the collection conforms to `RandomAccessCollection`; otherwise, O(*k*), where *k* is the absolute value of `distance`.
