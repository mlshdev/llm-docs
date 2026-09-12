> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dropfirstsequence/count(where:)](https://developer.apple.com/documentation/swift/dropfirstsequence/count(where:))

# count(where:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of elements in the sequence that satisfy the given predicate.

## Declaration

```swift
func count<E>(where predicate: (Self.Element) throws(E) -> Bool) throws(E) -> Int where E : Error
```

## Parameters

- `predicate`: A closure that takes each element of the sequence as its argument and returns a Boolean value indicating whether the element should be included in the count.

<a id="return-value"></a>

## Return Value

The number of elements in the sequence that satisfy the given predicate.

<a id="discussion"></a>

## Discussion

You can use this method to count the number of elements that pass a test. The following example finds the number of names that are fewer than five characters long:

```swift
let names = ["Jacqueline", "Ian", "Amy", "Juan", "Soroush", "Tiffany"]
let shortNameCount = names.count(where: { $0.count < 5 })
// shortNameCount == 3
```

To find the number of times a specific element appears in the sequence, use the equal to operator (`==`) in the closure to test for a match.

```swift
let birds = ["duck", "duck", "duck", "duck", "goose"]
let duckCount = birds.count(where: { $0 == "duck" })
// duckCount == 4
```

The sequence must be finite.
