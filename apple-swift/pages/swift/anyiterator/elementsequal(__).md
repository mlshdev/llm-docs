> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyiterator/elementsequal(_:)](https://developer.apple.com/documentation/swift/anyiterator/elementsequal(_:))

# elementsEqual(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.

## Declaration

```swift
func elementsEqual<OtherSequence>(_ other: OtherSequence) -> Bool where OtherSequence : Sequence, Self.Element == OtherSequence.Element
```

## Parameters

- `other`: A sequence to compare to this sequence.

<a id="return-value"></a>

## Return Value

`true` if this sequence and `other` contain the same elements in the same order.

<a id="discussion"></a>

## Discussion

At least one of the sequences must be finite.

This example tests whether one countable range shares the same elements as another countable range and an array.

```swift
let a = 1...3
let b = 1...10

print(a.elementsEqual(b))
// Prints "false"
print(a.elementsEqual([1, 2, 3]))
// Prints "true"
```

> **Complexity**

> O(*m*), where *m* is the lesser of the length of the sequence and the length of `other`.
