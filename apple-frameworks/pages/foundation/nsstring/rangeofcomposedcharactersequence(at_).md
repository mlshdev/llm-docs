> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/rangeofcomposedcharactersequence(at:)](https://developer.apple.com/documentation/foundation/nsstring/rangeofcomposedcharactersequence(at:))

# rangeOfComposedCharacterSequence(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range in the receiver of the composed character sequence located at a given index.

## Declaration

```swift
func rangeOfComposedCharacterSequence(at index: Int) -> NSRange
```

## Parameters

- `index`: The index of a character in the receiver. The value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range in the receiver of the composed character sequence located at `anIndex`.

<a id="Discussion"></a>

## Discussion

The composed character sequence includes the first decomposed base letter found at or before `anIndex`, and its length includes the decomposed base letter and all combining characters that follow.

## See Also

### Determining Composed Character Sequences

- [rangeOfComposedCharacterSequences(for:)](rangeofcomposedcharactersequences%28for_%29.md): Returns the range in the string of the composed character sequences for a given range.

# rangeOfComposedCharacterSequenceAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range in the receiver of the composed character sequence located at a given index.

## Declaration

```objectivec
- (NSRange) rangeOfComposedCharacterSequenceAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of a character in the receiver. The value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range in the receiver of the composed character sequence located at `anIndex`.

<a id="Discussion"></a>

## Discussion

The composed character sequence includes the first decomposed base letter found at or before `anIndex`, and its length includes the decomposed base letter and all combining characters that follow.

## See Also

### Determining Composed Character Sequences

- [rangeOfComposedCharacterSequencesForRange:](rangeofcomposedcharactersequences%28for_%29.md): Returns the range in the string of the composed character sequences for a given range.
