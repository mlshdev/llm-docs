> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/words-swift.struct/firstindex(where:)](https://developer.apple.com/documentation/swift/int/words-swift.struct/firstindex(where:))

# firstIndex(where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the first index in which an element of the collection satisfies the given predicate.

## Declaration

```swift
func firstIndex(where predicate: (Self.Element) throws -> Bool) rethrows -> Self.Index?
```

## Parameters

- `predicate`: A closure that takes an element as its argument and returns a Boolean value that indicates whether the passed element represents a match.

<a id="return-value"></a>

## Return Value

The index of the first element for which `predicate` returns `true`. If no elements in the collection satisfy the given predicate, returns `nil`.

<a id="discussion"></a>

## Discussion

You can use the predicate to find an element of a type that doesn’t conform to the `Equatable` protocol or to find an element that matches particular criteria. Here’s an example that finds a student name that begins with the letter “A”:

```swift
let students = ["Kofi", "Abena", "Peter", "Kweku", "Akosua"]
if let i = students.firstIndex(where: { $0.hasPrefix("A") }) {
    print("\(students[i]) starts with 'A'!")
}
// Prints "Abena starts with 'A'!"
```

> **Complexity**

> O(*n*), where *n* is the length of the collection.
