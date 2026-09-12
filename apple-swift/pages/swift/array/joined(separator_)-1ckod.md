> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/joined(separator:)-1ckod](https://developer.apple.com/documentation/swift/array/joined(separator:)-1ckod)

# joined(separator:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.

## Declaration

```swift
func joined(separator: String = "") -> String
```

## Parameters

- `separator`: A string to insert between each of the elements in this sequence. The default separator is an empty string.

<a id="return-value"></a>

## Return Value

A single, concatenated string.

<a id="discussion"></a>

## Discussion

The following example shows how an array of strings can be joined to a single, comma-separated string:

```swift
let cast = ["Vivien", "Marlon", "Kim", "Karl"]
let list = cast.joined(separator: ", ")
print(list)
// Prints "Vivien, Marlon, Kim, Karl"
```

## See Also

### Splitting and Joining Elements

- [split(separator:maxSplits:omittingEmptySubsequences:)](split%28separator_maxsplits_omittingemptysubsequences_%29-3dgmv.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.
- [joined()](joined%28%29.md): Conforms when `Element` conforms to `Sequence`. Returns the elements of this sequence of sequences, concatenated.
- [joined(separator:)](joined%28separator_%29-7uber.md): Conforms when `Element` conforms to `Sequence`. Returns the concatenated elements of this sequence of sequences, inserting the given separator between each element.
- [joined(separator:)](joined%28separator_%29-5do1g.md): Conforms when `Element` is `String`. Returns a new string by concatenating the elements of the sequence, adding the given separator between each element.
