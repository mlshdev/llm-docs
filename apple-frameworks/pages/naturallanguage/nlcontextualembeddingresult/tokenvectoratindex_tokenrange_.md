> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembeddingresult/tokenvectoratindex:tokenrange:](https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult/tokenvectoratindex:tokenrange:)

# tokenVectorAtIndex:tokenRange:

**Interface language:** Objective-C

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a token vector at the specified character index.

## Declaration

```objectivec
- (NSArray<NSNumber *> *) tokenVectorAtIndex:(NSUInteger) characterIndex tokenRange:(NSRangePointer) tokenRange;
```

## Parameters

- `characterIndex`: The index to get the token vector at.
- `tokenRange`: The character range of the token in the input string.

## See Also

### Enumerating the vectors

- [enumerateTokenVectorsInRange:usingBlock:](enumeratetokenvectorsinrange_usingblock_.md): Iterates over the embedding vectors corresponding to the subword tokens within the specified range of the input string.
