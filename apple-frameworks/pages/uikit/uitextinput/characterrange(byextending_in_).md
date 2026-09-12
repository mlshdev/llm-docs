> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/characterrange(byextending:in:)](https://developer.apple.com/documentation/uikit/uitextinput/characterrange(byextending:in:))

# characterRange(byExtending:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a text range from a specified text position to its farthest extent in a certain direction of layout.

## Declaration

```swift
func characterRange(byExtending position: UITextPosition, in direction: UITextLayoutDirection) -> UITextRange?
```

## Parameters

- `position`: A text-position object that identifies a location in a document.
- `direction`: A constant that indicates a direction of layout (right, left, up, down).

<a id="return-value"></a>

## Return Value

A text-range object that represents the distance from `position` to the farthest extent in `direction`.

## See Also

### Determining layout and writing direction

- [position(within:farthestIn:)](position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [baseWritingDirection(for:in:)](basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
- [setBaseWritingDirection(\_:for:)](setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.

# characterRangeByExtendingPosition:inDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a text range from a specified text position to its farthest extent in a certain direction of layout.

## Declaration

```objectivec
- (UITextRange *) characterRangeByExtendingPosition:(UITextPosition *) position inDirection:(UITextLayoutDirection) direction;
```

## Parameters

- `position`: A text-position object that identifies a location in a document.
- `direction`: A constant that indicates a direction of layout (right, left, up, down).

<a id="return-value"></a>

## Return Value

A text-range object that represents the distance from `position` to the farthest extent in `direction`.

## See Also

### Determining layout and writing direction

- [positionWithinRange:farthestInDirection:](position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [baseWritingDirectionForPosition:inDirection:](basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
- [setBaseWritingDirection:forRange:](setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.
