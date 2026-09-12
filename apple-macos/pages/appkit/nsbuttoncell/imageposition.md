> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/imageposition](https://developer.apple.com/documentation/appkit/nsbuttoncell/imageposition)

# imagePosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the button’s image relative to its title.

## Declaration

```swift
var imagePosition: NSControl.ImagePosition { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the image positions described in the “Constants” section of [NSCell](../nscell.md). If the title is above, below, or overlapping the image, or if there is no image, the text is horizontally centered within the button.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [NSButtonCell](../nsbuttoncell.md): An object that defines the user interface of a button or other clickable region of a view.
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Managing Images

- [alternateImage](alternateimage.md): The image the button displays in its alternate state.
- [imageScaling](imagescaling.md): The scale factor for the button’s image.

# imagePosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The position of the button’s image relative to its title.

## Declaration

```objectivec
@property NSCellImagePosition imagePosition;
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the image positions described in the “Constants” section of [NSCell](../nscell.md). If the title is above, below, or overlapping the image, or if there is no image, the text is horizontally centered within the button.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [NSButtonCell](../nsbuttoncell.md): An object that defines the user interface of a button or other clickable region of a view.
- [setButtonType:](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Managing Images

- [alternateImage](alternateimage.md): The image the button displays in its alternate state.
- [imageScaling](imagescaling.md): The scale factor for the button’s image.
