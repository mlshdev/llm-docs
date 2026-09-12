> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/joined()](https://developer.apple.com/documentation/swift/array/joined())

# joined()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the elements of this sequence of sequences, concatenated.

## Declaration

```swift
func joined() -> FlattenSequence<Self>
```

<a id="return-value"></a>

## Return Value

A flattened view of the elements of this sequence of sequences.

<a id="discussion"></a>

## Discussion

In this example, an array of three ranges is flattened so that the elements of each range can be iterated in turn.

```swift
let ranges = [0..<3, 8..<10, 15..<17]

// A for-in loop over 'ranges' accesses each range:
for range in ranges {
  print(range)
}
// Prints "0..<3"
// Prints "8..<10"
// Prints "15..<17"

// Use 'joined()' to access each element of each range:
for index in ranges.joined() {
    print(index, terminator: " ")
}
// Prints: "0 1 2 8 9 15 16"
```

## See Also

### Splitting and Joining Elements

- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-3dgmv.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [joined(separator:)](joined%28separator_%29-7uber.md): Conforms when `Element` conforms to `Sequence`. Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.
- [joined(separator:)](joined%28separator_%29-5do1g.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
- [joined(separator:)](joined%28separator_%29-1ckod.md): Conforms when `Element` conforms to `StringProtocol`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
