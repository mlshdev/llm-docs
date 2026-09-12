> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/character(at:)](https://developer.apple.com/documentation/foundation/nsstring/character(at:))

# character(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character at a given UTF-16 code unit index.

## Declaration

```swift
func character(at index: Int) -> unichar
```

## Parameters

- `index`: The index of the character to retrieve.

  > **Important**

  >  Raises an `NSRangeException` if `index` lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

The character at the array position given by `index`.

<a id="Discussion"></a>

## Discussion

You should always use the [rangeOfComposedCharacterSequence(at:)](rangeofcomposedcharactersequence%28at_%29.md) or [rangeOfComposedCharacterSequences(for:)](rangeofcomposedcharactersequences%28for_%29.md) method to determine character boundaries, so that any surrogate pairs or character clusters are handled correctly.

## See Also

### Getting Characters and Bytes

- [getCharacters(\_:range:)](getcharacters%28__range_%29.md): Copies characters from a given range in the receiver into a given buffer.
- [getBytes(\_:maxLength:usedLength:encoding:options:range:remaining:)](getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Gets a given range of characters as bytes in a specified encoding.

# characterAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the character at a given UTF-16 code unit index.

## Declaration

```objectivec
- (unichar) characterAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the character to retrieve.

  > **Important**

  >  Raises an `NSRangeException` if `index` lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

The character at the array position given by `index`.

<a id="Discussion"></a>

## Discussion

You should always use the [rangeOfComposedCharacterSequenceAtIndex:](rangeofcomposedcharactersequence%28at_%29.md) or [rangeOfComposedCharacterSequencesForRange:](rangeofcomposedcharactersequences%28for_%29.md) method to determine character boundaries, so that any surrogate pairs or character clusters are handled correctly.

## See Also

### Getting Characters and Bytes

- [getCharacters:range:](getcharacters%28__range_%29.md): Copies characters from a given range in the receiver into a given buffer.
- [getBytes:maxLength:usedLength:encoding:options:range:remainingRange:](getbytes%28__maxlength_usedlength_encoding_options_range_remaining_%29.md): Gets a given range of characters as bytes in a specified encoding.
