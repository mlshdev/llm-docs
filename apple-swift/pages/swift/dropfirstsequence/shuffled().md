> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/dropfirstsequence/shuffled()](https://developer.apple.com/documentation/swift/dropfirstsequence/shuffled())

# shuffled()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the elements of the sequence, shuffled.

## Declaration

```swift
func shuffled() -> [Self.Element]
```

<a id="return-value"></a>

## Return Value

A shuffled array of this sequence’s elements.

<a id="discussion"></a>

## Discussion

For example, you can shuffle the numbers between `0` and `9` by calling the `shuffled()` method on that range:

```swift
let numbers = 0...9
let shuffledNumbers = numbers.shuffled()
// shuffledNumbers == [1, 7, 6, 2, 8, 9, 4, 3, 5, 0]
```

This method is equivalent to calling `shuffled(using:)`, passing in the system’s default random generator.

> **Complexity**

> O(*n*), where *n* is the length of the sequence.
