> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/endofdocument](https://developer.apple.com/documentation/uikit/uitextinput/endofdocument)

# endOfDocument (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text position for the end of a document.

## Declaration

```swift
var endOfDocument: UITextPosition { get }
```

## See Also

### Computing text ranges and text positions

- [textRange(from:to:)](textrange%28from_to_%29.md): Returns the range between two text positions.
- [position(from:offset:)](position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [position(from:in:offset:)](position%28from_in_offset_%29.md): Returns the text position at a specified offset in a specified direction from another text position.
- [beginningOfDocument](beginningofdocument.md): The text position for the beginning of a document.

# endOfDocument (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The text position for the end of a document.

## Declaration

```objectivec
@property (nonatomic, readonly) UITextPosition * endOfDocument;
```

## See Also

### Computing text ranges and text positions

- [textRangeFromPosition:toPosition:](textrange%28from_to_%29.md): Returns the range between two text positions.
- [positionFromPosition:offset:](position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [positionFromPosition:inDirection:offset:](position%28from_in_offset_%29.md): Returns the text position at a specified offset in a specified direction from another text position.
- [beginningOfDocument](beginningofdocument.md): The text position for the beginning of a document.
