> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/caretrect(for:)](https://developer.apple.com/documentation/uikit/uitextinput/caretrect(for:))

# caretRect(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a rectangle to draw the caret at a specified insertion point.

## Declaration

```swift
func caretRect(for position: UITextPosition) -> CGRect
```

## Parameters

- `position`: An object that identifies a location in a text input area.

<a id="return-value"></a>

## Return Value

A rectangle that defines the area for drawing the caret.

<a id="Discussion"></a>

## Discussion

The system uses this value to calculate the length of the beam—the vertical line representing the pointer—when using a trackpad to interact with a text input area. You must implement this method even if text never becomes editable, and an insertion point caret never appears.

## See Also

### Related Documentation

- [firstRect(for:)](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [UIPointerShape.verticalBeam(length:)](../uipointershape-swift.enum/verticalbeam%28length_%29.md): The pointer morphs into a vertical beam using the specified length.

### Providing the caret layout information

- [caretTransform(for:)](carettransform%28for_%29.md): Returns the transform to apply to the caret prior to drawing.

# caretRectForPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a rectangle to draw the caret at a specified insertion point.

## Declaration

```objectivec
- (CGRect) caretRectForPosition:(UITextPosition *) position;
```

## Parameters

- `position`: An object that identifies a location in a text input area.

<a id="return-value"></a>

## Return Value

A rectangle that defines the area for drawing the caret.

<a id="Discussion"></a>

## Discussion

The system uses this value to calculate the length of the beam—the vertical line representing the pointer—when using a trackpad to interact with a text input area. You must implement this method even if text never becomes editable, and an insertion point caret never appears.

## See Also

### Related Documentation

- [firstRectForRange:](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.

### Providing the caret layout information

- [caretTransformForPosition:](carettransform%28for_%29.md): Returns the transform to apply to the caret prior to drawing.
