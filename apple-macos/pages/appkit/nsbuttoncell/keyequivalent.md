> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/keyequivalent](https://developer.apple.com/documentation/appkit/nsbuttoncell/keyequivalent)

# keyEquivalent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button’s key-equivalent character.

## Declaration

```swift
var keyEquivalent: String { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the string that contains the key equivalent character of the button, or the empty string if one hasn’t been defined. Buttons don’t have a default key equivalent.

Setting this property redraws the button’s inside if it displays a key equivalent instead of an image. The key equivalent isn’t displayed if the image position is set to `NSNoImage`, `NSImageOnly`, or `NSImageOverlaps`; that is, the button must display both its title and its “image” (the key equivalent in this case), and they must not overlap.

To display a key equivalent on a button, set the image and alternate image to `nil`, then set the key equivalent, then set the image position.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [alternateImage](alternateimage.md): The image the button displays in its alternate state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.

### Managing the Key Equivalent

- [keyEquivalentFont](keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
- [setKeyEquivalentFont(\_:size:)](setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.

# keyEquivalent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The button’s key-equivalent character.

## Declaration

```objectivec
@property (copy) NSString * keyEquivalent;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the string that contains the key equivalent character of the button, or the empty string if one hasn’t been defined. Buttons don’t have a default key equivalent.

Setting this property redraws the button’s inside if it displays a key equivalent instead of an image. The key equivalent isn’t displayed if the image position is set to `NSNoImage`, `NSImageOnly`, or `NSImageOverlaps`; that is, the button must display both its title and its “image” (the key equivalent in this case), and they must not overlap.

To display a key equivalent on a button, set the image and alternate image to `nil`, then set the key equivalent, then set the image position.

## See Also

### Related Documentation

- [image](../nscell/image.md): The image displayed by the cell, if any.
- [alternateImage](alternateimage.md): The image the button displays in its alternate state.
- [imagePosition](imageposition.md): The position of the button’s image relative to its title.

### Managing the Key Equivalent

- [keyEquivalentFont](keyequivalentfont.md): Deprecated. The font used to draw the button’s key equivalent.
- [keyEquivalentModifierMask](keyequivalentmodifiermask.md): The mask that identifies the modifier keys for the button’s key equivalent.
- [setKeyEquivalentFont:size:](setkeyequivalentfont%28__size_%29.md): Deprecated. Sets by name and size of the font used to draw the key equivalent.
