> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/rangeofcomposedcharactersequences(for:)](https://developer.apple.com/documentation/foundation/nsstring/rangeofcomposedcharactersequences(for:))

# rangeOfComposedCharacterSequences(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range in the string of the composed character sequences for a given range.

## Declaration

```swift
func rangeOfComposedCharacterSequences(for range: NSRange) -> NSRange
```

## Parameters

- `range`: A range in the receiver. The range must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range in the receiver that includes the composed character sequences in `range`.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to grow a range to include all composed character sequences it overlaps.

## See Also

### Determining Composed Character Sequences

- [rangeOfComposedCharacterSequence(at:)](rangeofcomposedcharactersequence%28at_%29.md): Returns the range in the receiver of the composed character sequence located at a given index.

# rangeOfComposedCharacterSequencesForRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range in the string of the composed character sequences for a given range.

## Declaration

```objectivec
- (NSRange) rangeOfComposedCharacterSequencesForRange:(NSRange) range;
```

## Parameters

- `range`: A range in the receiver. The range must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range in the receiver that includes the composed character sequences in `range`.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to grow a range to include all composed character sequences it overlaps.

## See Also

### Determining Composed Character Sequences

- [rangeOfComposedCharacterSequenceAtIndex:](rangeofcomposedcharactersequence%28at_%29.md): Returns the range in the receiver of the composed character sequence located at a given index.
