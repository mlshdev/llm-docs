> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/setbasewritingdirection(_:for:)](https://developer.apple.com/documentation/uikit/uitextinput/setbasewritingdirection(_:for:))

# setBaseWritingDirection(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Sets the base writing direction for a specified range of text in a document.

## Declaration

```swift
func setBaseWritingDirection(_ writingDirection: NSWritingDirection, for range: UITextRange)
```

## Parameters

- `writingDirection`: A constant that represents a writing direction (for example, left-to-right or right-to-left)
- `range`: An object that represents a range of text in a document.

## See Also

### Determining layout and writing direction

- [position(within:farthestIn:)](position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [characterRange(byExtending:in:)](characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [baseWritingDirection(for:in:)](basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.

# setBaseWritingDirection:forRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Sets the base writing direction for a specified range of text in a document.

## Declaration

```objectivec
- (void) setBaseWritingDirection:(NSWritingDirection) writingDirection forRange:(UITextRange *) range;
```

## Parameters

- `writingDirection`: A constant that represents a writing direction (for example, left-to-right or right-to-left)
- `range`: An object that represents a range of text in a document.

## See Also

### Determining layout and writing direction

- [positionWithinRange:farthestInDirection:](position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [characterRangeByExtendingPosition:inDirection:](characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [baseWritingDirectionForPosition:inDirection:](basewritingdirection%28for_in_%29.md): Returns the base writing direction for a position in the text going in a certain direction.
