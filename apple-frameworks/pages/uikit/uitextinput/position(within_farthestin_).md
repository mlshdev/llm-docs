> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/position(within:farthestin:)](https://developer.apple.com/documentation/uikit/uitextinput/position(within:farthestin:))

# position(within:farthestIn:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text position that is at the farthest extent in a specified layout direction within a range of text.

## Declaration

```swift
func position(within range: UITextRange, farthestIn direction: UITextLayoutDirection) -> UITextPosition?
```

## Parameters

- `range`: A text-range object that demarcates a range of text in a document.
- `direction`: A constant that indicates a direction of layout (right, left, up, down).

<a id="return-value"></a>

## Return Value

A text-position object that identifies a location in the visible text.

## See Also

### Determining layout and writing direction

- [characterRange(byExtending:in:)](characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [baseWritingDirection(for:in:)](basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
- [setBaseWritingDirection(\_:for:)](setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.

# positionWithinRange:farthestInDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the text position that is at the farthest extent in a specified layout direction within a range of text.

## Declaration

```objectivec
- (UITextPosition *) positionWithinRange:(UITextRange *) range farthestInDirection:(UITextLayoutDirection) direction;
```

## Parameters

- `range`: A text-range object that demarcates a range of text in a document.
- `direction`: A constant that indicates a direction of layout (right, left, up, down).

<a id="return-value"></a>

## Return Value

A text-position object that identifies a location in the visible text.

## See Also

### Determining layout and writing direction

- [characterRangeByExtendingPosition:inDirection:](characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [baseWritingDirectionForPosition:inDirection:](basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
- [setBaseWritingDirection:forRange:](setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.
