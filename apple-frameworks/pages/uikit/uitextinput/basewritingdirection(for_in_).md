> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/basewritingdirection(for:in:)](https://developer.apple.com/documentation/uikit/uitextinput/basewritingdirection(for:in:))

# baseWritingDirection(for:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the base writing direction for a position in the text going in a certain direction.

## Declaration

```swift
func baseWritingDirection(for position: UITextPosition, in direction: UITextStorageDirection) -> NSWritingDirection
```

## Parameters

- `position`: An object that identifies a location in a document.
- `direction`: A constant that indicates a direction of storage (forward or backward).

<a id="return-value"></a>

## Return Value

A constant that represents a writing direction (for example, left-to-right or right-to-left).

<a id="Discussion"></a>

## Discussion

The base writing direction is set previously when the text input system sends a [setBaseWritingDirection(\_:for:)](setbasewritingdirection%28__for_%29.md) message to the conforming document object.

## See Also

### Determining layout and writing direction

- [position(within:farthestIn:)](position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [characterRange(byExtending:in:)](characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [setBaseWritingDirection(\_:for:)](setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.

# baseWritingDirectionForPosition:inDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the base writing direction for a position in the text going in a certain direction.

## Declaration

```objectivec
- (NSWritingDirection) baseWritingDirectionForPosition:(UITextPosition *) position inDirection:(UITextStorageDirection) direction;
```

## Parameters

- `position`: An object that identifies a location in a document.
- `direction`: A constant that indicates a direction of storage (forward or backward).

<a id="return-value"></a>

## Return Value

A constant that represents a writing direction (for example, left-to-right or right-to-left).

<a id="Discussion"></a>

## Discussion

The base writing direction is set previously when the text input system sends a [setBaseWritingDirection:forRange:](setbasewritingdirection%28__for_%29.md) message to the conforming document object.

## See Also

### Determining layout and writing direction

- [positionWithinRange:farthestInDirection:](position%28within_farthestin_%29.md): Returns the text position that is at the farthest extent in a specified layout direction within a range of text.
- [characterRangeByExtendingPosition:inDirection:](characterrange%28byextending_in_%29.md): Returns a text range from a specified text position to its farthest extent in a certain direction of layout.
- [setBaseWritingDirection:forRange:](setbasewritingdirection%28__for_%29.md): Sets the base writing direction for a specified range of text in a document.
