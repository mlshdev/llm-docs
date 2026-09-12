> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/index(beforeunicodescalar:)](https://developer.apple.com/documentation/foundation/attributedstringprotocol/index(beforeunicodescalar:))

# index(beforeUnicodeScalar:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the position of the Unicode scalar immediately before a Unicode scalar indicated by an index.

## Declaration

```swift
func index(beforeUnicodeScalar i: AttributedString.Index) -> AttributedString.Index
```

## Parameters

- `i`: The index of a Unicode scalar in the attributed string.

<a id="return-value"></a>

## Return Value

The position of the Unicode scalar immediately before the Unicode scalar at index `i`.

## See Also

### Accessing Indices

- [startIndex](startindex.md): The position of the first character in a nonempty attributed string.
- [endIndex](endindex.md): A string’s past-the-end position — the position one greater than the last valid subscript argument.
- [index(\_:offsetByCharacters:)](index%28__offsetbycharacters_%29.md): Returns the position of the character offset a given distance, measured in characters, from a given string index.
- [index(\_:offsetByRuns:)](index%28__offsetbyruns_%29.md): Returns the position of the run offset a given number of runs from a given string index.
- [index(\_:offsetByUnicodeScalars:)](index%28__offsetbyunicodescalars_%29.md): Returns the position of the Unicode scalar offset a given distance, measured in Unicode scalars, from a given string index.
- [index(afterCharacter:)](index%28aftercharacter_%29.md): Returns the position of the character immediately after another charcter indicated by an index.
- [index(afterRun:)](index%28afterrun_%29.md): Returns the position of the run immediately after a run indicated by an index.
- [index(afterUnicodeScalar:)](index%28afterunicodescalar_%29.md): Returns the position of the Unicode scalar immediately after a Unicode scalar indicated by an index.
- [index(beforeCharacter:)](index%28beforecharacter_%29.md): Returns the position of the character immediately before another charcter indicated by an index.
- [index(beforeRun:)](index%28beforerun_%29.md): Returns the position of the run immediately before a run indicated by an index.
- [AttributedString.Index](../attributedstring/index.md): A type that represents the position of a character or code unit within an attributed string.
