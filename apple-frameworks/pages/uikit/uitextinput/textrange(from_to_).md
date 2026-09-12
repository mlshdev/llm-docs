> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/textrange(from:to:)](https://developer.apple.com/documentation/uikit/uitextinput/textrange(from:to:))

# textRange(from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the range between two text positions.

## Declaration

```swift
func textRange(from fromPosition: UITextPosition, to toPosition: UITextPosition) -> UITextRange?
```

## Parameters

- `fromPosition`: An object that represents a location in a document.
- `toPosition`: An object that represents another location in a document.

<a id="return-value"></a>

## Return Value

An object that represents the range between `fromPosition` and `toPosition`.

## See Also

### Computing text ranges and text positions

- [position(from:offset:)](position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [position(from:in:offset:)](position%28from_in_offset_%29.md): Returns the text position at a specified offset in a specified direction from another text position.
- [beginningOfDocument](beginningofdocument.md): The text position for the beginning of a document.
- [endOfDocument](endofdocument.md): The text position for the end of a document.

# textRangeFromPosition:toPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the range between two text positions.

## Declaration

```objectivec
- (UITextRange *) textRangeFromPosition:(UITextPosition *) fromPosition toPosition:(UITextPosition *) toPosition;
```

## Parameters

- `fromPosition`: An object that represents a location in a document.
- `toPosition`: An object that represents another location in a document.

<a id="return-value"></a>

## Return Value

An object that represents the range between `fromPosition` and `toPosition`.

## See Also

### Computing text ranges and text positions

- [positionFromPosition:offset:](position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [positionFromPosition:inDirection:offset:](position%28from_in_offset_%29.md): Returns the text position at a specified offset in a specified direction from another text position.
- [beginningOfDocument](beginningofdocument.md): The text position for the beginning of a document.
- [endOfDocument](endofdocument.md): The text position for the end of a document.
