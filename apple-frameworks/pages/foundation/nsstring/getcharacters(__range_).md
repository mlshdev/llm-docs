> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/getcharacters(_:range:)](https://developer.apple.com/documentation/foundation/nsstring/getcharacters(_:range:))

# getCharacters(\_:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies characters from a given range in the receiver into a given buffer.

## Declaration

```swift
func getCharacters(_ buffer: UnsafeMutablePointer<unichar>, range: NSRange)
```

## Parameters

- `buffer`: Upon return, contains the characters from the receiver. `buffer` must be large enough to contain the characters in the range `aRange` (`aRange.length*sizeof(unichar)`).
- `range`: The range of characters to retrieve. The range must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `aRange` lies beyond the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

This method does not add a `NULL` character.

The abstract implementation of this method uses [character(at:)](character%28at_%29.md) repeatedly, correctly extracting the characters, though very inefficiently. Subclasses should override it to provide a fast implementation.

You should always use the [rangeOfComposedCharacterSequence(at:)](rangeofcomposedcharactersequence%28at_%29.md) or [rangeOfComposedCharacterSequences(for:)](rangeofcomposedcharactersequences%28for_%29.md) method to determine character boundaries, so that any surrogate pairs or character clusters are handled correctly.

## See Also

### Getting Characters and Bytes

- [character(at:)](character%28at_%29.md): Returns the character at a given UTF-16 code unit index.
- [getBytes(\_:maxLength:usedLength:encoding:options:range:remaining:)](getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Gets a given range of characters as bytes in a specified encoding.

# getCharacters:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies characters from a given range in the receiver into a given buffer.

## Declaration

```objectivec
- (void) getCharacters:(unichar *) buffer range:(NSRange) range;
```

## Parameters

- `buffer`: Upon return, contains the characters from the receiver. `buffer` must be large enough to contain the characters in the range `aRange` (`aRange.length*sizeof(unichar)`).
- `range`: The range of characters to retrieve. The range must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `aRange` lies beyond the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

This method does not add a `NULL` character.

The abstract implementation of this method uses [characterAtIndex:](character%28at_%29.md) repeatedly, correctly extracting the characters, though very inefficiently. Subclasses should override it to provide a fast implementation.

You should always use the [rangeOfComposedCharacterSequenceAtIndex:](rangeofcomposedcharactersequence%28at_%29.md) or [rangeOfComposedCharacterSequencesForRange:](rangeofcomposedcharactersequences%28for_%29.md) method to determine character boundaries, so that any surrogate pairs or character clusters are handled correctly.

## See Also

### Getting Characters and Bytes

- [characterAtIndex:](character%28at_%29.md): Returns the character at a given UTF-16 code unit index.
- [getBytes:maxLength:usedLength:encoding:options:range:remainingRange:](getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Gets a given range of characters as bytes in a specified encoding.
