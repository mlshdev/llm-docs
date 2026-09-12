> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int32/words-swift.struct/indices(where:)](https://developer.apple.com/documentation/swift/int32/words-swift.struct/indices(where:))

# indices(where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the indices of all the elements that match the given predicate.

## Declaration

```swift
func indices(where predicate: (Self.Element) throws -> Bool) rethrows -> RangeSet<Self.Index>
```

## Parameters

- `predicate`: A closure that takes an element as its argument and returns a Boolean value that indicates whether the passed element represents a match.

<a id="return-value"></a>

## Return Value

A set of the indices of the elements for which `predicate` returns `true`.

<a id="discussion"></a>

## Discussion

For example, you can use this method to find all the places that a vowel occurs in a string.

```swift
let str = "Fresh cheese in a breeze"
let vowels: Set<Character> = ["a", "e", "i", "o", "u"]
let allTheVowels = str.indices(where: { vowels.contains($0) })
// str[allTheVowels].count == 9
```

> **Complexity**

> O(*n*), where *n* is the length of the collection.
