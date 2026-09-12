> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazymapsequence/iterator/filter(_:)](https://developer.apple.com/documentation/swift/lazymapsequence/iterator/filter(_:))

# filter(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing, in order, the elements of the sequence that satisfy the given predicate.

## Declaration

```swift
func filter<E>(_ isIncluded: (Self.Element) throws(E) -> Bool) throws(E) -> [Self.Element] where E : Error
```

## Parameters

- `isIncluded`: A closure that takes an element of the sequence as its argument and returns a Boolean value indicating whether the element should be included in the returned array.

<a id="return-value"></a>

## Return Value

An array of the elements that `isIncluded` allowed.

<a id="discussion"></a>

## Discussion

In this example, `filter(_:)` is used to include only names shorter than five characters.

```swift
let cast = ["Vivien", "Marlon", "Kim", "Karl"]
let shortNames = cast.filter { $0.count < 5 }
print(shortNames)
// Prints "["Kim", "Karl"]"
```

> **Complexity**

> O(*n*), where *n* is the length of the sequence.
