> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/position(from:in:offset:)](https://developer.apple.com/documentation/uikit/uitextinput/position(from:in:offset:))

# position(from:in:offset:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text position at a specified offset in a specified direction from another text position.

## Declaration

```swift
func position(from position: UITextPosition, in direction: UITextLayoutDirection, offset: Int) -> UITextPosition?
```

## Parameters

- `position`: A custom [UITextPosition](../uitextposition.md) object that represents a location in a document.
- `direction`: A [UITextLayoutDirection](../uitextlayoutdirection.md) constant that represents the direction of the offset from `position`. Return `nil` if the computed text position is less than 0 or greater than the length of the backing string.
- `offset`: A character offset from `position`.

<a id="Discussion"></a>

## Discussion

For an example of an implementation of the related method, [position(from:offset:)](position%28from_offset_%29.md), see [Using Text Kit to Draw and Manage Text](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4) in [Text Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009542).

## See Also

### Computing text ranges and text positions

- [textRange(from:to:)](textrange%28from_to_%29.md): Returns the range between two text positions.
- [position(from:offset:)](position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [beginningOfDocument](beginningofdocument.md): The text position for the beginning of a document.
- [endOfDocument](endofdocument.md): The text position for the end of a document.

# positionFromPosition:inDirection:offset: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the text position at a specified offset in a specified direction from another text position.

## Declaration

```objectivec
- (UITextPosition *) positionFromPosition:(UITextPosition *) position inDirection:(UITextLayoutDirection) direction offset:(NSInteger) offset;
```

## Parameters

- `position`: A custom [UITextPosition](../uitextposition.md) object that represents a location in a document.
- `direction`: A [UITextLayoutDirection](../uitextlayoutdirection.md) constant that represents the direction of the offset from `position`. Return `nil` if the computed text position is less than 0 or greater than the length of the backing string.
- `offset`: A character offset from `position`.

<a id="Discussion"></a>

## Discussion

For an example of an implementation of the related method, [positionFromPosition:offset:](position%28from_offset_%29.md), see [Using Text Kit to Draw and Manage Text](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/CustomTextProcessing/CustomTextProcessing.html#//apple_ref/doc/uid/TP40009542-CH4) in [Text Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009542).

## See Also

### Computing text ranges and text positions

- [textRangeFromPosition:toPosition:](textrange%28from_to_%29.md): Returns the range between two text positions.
- [positionFromPosition:offset:](position%28from_offset_%29.md): Returns the text position at a specified offset from another text position.
- [beginningOfDocument](beginningofdocument.md): The text position for the beginning of a document.
- [endOfDocument](endofdocument.md): The text position for the end of a document.
