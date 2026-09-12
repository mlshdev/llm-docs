> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/position(within:atcharacteroffset:)](https://developer.apple.com/documentation/uikit/uitextinput/position(within:atcharacteroffset:))

# position(within:atCharacterOffset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the position within a range of a document’s text that corresponds to the character offset from the start of that range.

## Declaration

```swift
optional func position(within range: UITextRange, atCharacterOffset offset: Int) -> UITextPosition?
```

## Parameters

- `range`: An object that specifies a range of text in a document.
- `offset`: A character offset from the start of `range`.

<a id="return-value"></a>

## Return Value

An object that represents a position in a document’s visible text.

<a id="Discussion"></a>

## Discussion

You should implement this method if you don’t have a one-to-one correspondence between [UITextPosition](../uitextposition.md) objects within the given range and character offsets into a document string.

## See Also

### Reconciling text position and character offset

- [characterOffset(of:within:)](characteroffset%28of_within_%29.md): Returns the character offset of a position in a document’s text that falls within a specified range.

# positionWithinRange:atCharacterOffset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the position within a range of a document’s text that corresponds to the character offset from the start of that range.

## Declaration

```objectivec
- (UITextPosition *) positionWithinRange:(UITextRange *) range atCharacterOffset:(NSInteger) offset;
```

## Parameters

- `range`: An object that specifies a range of text in a document.
- `offset`: A character offset from the start of `range`.

<a id="return-value"></a>

## Return Value

An object that represents a position in a document’s visible text.

<a id="Discussion"></a>

## Discussion

You should implement this method if you don’t have a one-to-one correspondence between [UITextPosition](../uitextposition.md) objects within the given range and character offsets into a document string.

## See Also

### Reconciling text position and character offset

- [characterOffsetOfPosition:withinRange:](characteroffset%28of_within_%29.md): Returns the character offset of a position in a document’s text that falls within a specified range.
