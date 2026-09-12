> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/characteroffset(of:within:)](https://developer.apple.com/documentation/uikit/uitextinput/characteroffset(of:within:))

# characterOffset(of:within:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the character offset of a position in a document’s text that falls within a specified range.

## Declaration

```swift
optional func characterOffset(of position: UITextPosition, within range: UITextRange) -> Int
```

## Parameters

- `position`: An object that identifies a location in a document’s text.
- `range`: An object that specifies a range of text in a document.

<a id="return-value"></a>

## Return Value

The number of characters in a document’s text that occur between `position` and the beginning of `range`.

<a id="Discussion"></a>

## Discussion

You should implement this method if you don’t have a one-to-one correspondence between [UITextPosition](../uitextposition.md) objects within the given range and character offsets into a document string.

## See Also

### Reconciling text position and character offset

- [position(within:atCharacterOffset:)](position%28within_atcharacteroffset_%29.md): Returns the position within a range of a document’s text that corresponds to the character offset from the start of that range.

# characterOffsetOfPosition:withinRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the character offset of a position in a document’s text that falls within a specified range.

## Declaration

```objectivec
- (NSInteger) characterOffsetOfPosition:(UITextPosition *) position withinRange:(UITextRange *) range;
```

## Parameters

- `position`: An object that identifies a location in a document’s text.
- `range`: An object that specifies a range of text in a document.

<a id="return-value"></a>

## Return Value

The number of characters in a document’s text that occur between `position` and the beginning of `range`.

<a id="Discussion"></a>

## Discussion

You should implement this method if you don’t have a one-to-one correspondence between [UITextPosition](../uitextposition.md) objects within the given range and character offsets into a document string.

## See Also

### Reconciling text position and character offset

- [positionWithinRange:atCharacterOffset:](position%28within_atcharacteroffset_%29.md): Returns the position within a range of a document’s text that corresponds to the character offset from the start of that range.
