> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/sequence/joined(separator:)-7w47r](https://developer.apple.com/documentation/swift/sequence/joined(separator:)-7w47r)

# joined(separator:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.

## Declaration

```swift
func joined<Separator>(separator: Separator) -> JoinedSequence<Self> where Separator : Sequence, Separator.Element == Self.Element.Element
```

## Parameters

- `separator`: A sequence to insert between each of this sequence’s elements.

<a id="return-value"></a>

## Return Value

The joined sequence of elements.

<a id="discussion"></a>

## Discussion

This example shows how an array of `[Int]` instances can be joined, using another `[Int]` instance as the separator:

```swift
let nestedNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let joined = nestedNumbers.joined(separator: [-1, -2])
print(Array(joined))
// Prints "[1, 2, 3, -1, -2, 4, 5, 6, -1, -2, 7, 8, 9]"
```

## See Also

### Splitting and Joining Elements

- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the sequence, in order, that don’t contain elements satisfying the given predicate. Elements that are used to split the sequence are not returned as part of any subsequence.
- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the sequence, in order, around elements equal to the given element.
- [joined()](joined%28%29.md): Conforms when `Element` conforms to `Sequence`. Returns the elements of this sequence of sequences, concatenated.
- [joined(separator:)](joined%28separator_%29-5zjyj.md): Conforms when `Element` conforms to `StringProtocol`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
