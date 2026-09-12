> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/alternateimage](https://developer.apple.com/documentation/appkit/nsbuttoncell/alternateimage)

# alternateImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image the button displays in its alternate state.

## Declaration

```swift
var alternateImage: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the image displayed by the button when it’s in its alternate state, or `nil` if there is no alternate image. Note that some button types don’t display an alternate image. Buttons don’t display images by default. Setting this property may redraw the contents of the button.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Managing Images

- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [imageScaling](imagescaling.md): The scale factor for the button’s image.

# alternateImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image the button displays in its alternate state.

## Declaration

```objectivec
@property (strong, nullable) NSImage * alternateImage;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the image displayed by the button when it’s in its alternate state, or `nil` if there is no alternate image. Note that some button types don’t display an alternate image. Buttons don’t display images by default. Setting this property may redraw the contents of the button.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [keyEquivalent](keyequivalent.md): The button’s key-equivalent character.
- [setButtonType:](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Managing Images

- [imagePosition](imageposition.md): The position of the button’s image relative to its title.
- [imageScaling](imagescaling.md): The scale factor for the button’s image.
