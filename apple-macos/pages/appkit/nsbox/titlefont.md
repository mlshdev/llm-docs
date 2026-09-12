> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/titlefont](https://developer.apple.com/documentation/appkit/nsbox/titlefont)

# titleFont (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font object used to draw the receiver’s title.

## Declaration

```swift
var titleFont: NSFont { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the title is drawn using the small system font (obtained using ([smallSystemFontSize](../nsfont/smallsystemfontsize.md) as the parameter of [systemFont(ofSize:)](../nsfont/systemfont%28ofsize_%29.md), both `NSFont` class methods). If the size of the new font is different from that of the old font, the content view is resized to absorb the difference.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.

# titleFont (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font object used to draw the receiver’s title.

## Declaration

```objectivec
@property (strong) NSFont * titleFont;
```

<a id="Discussion"></a>

## Discussion

By default, the title is drawn using the small system font (obtained using ([smallSystemFontSize](../nsfont/smallsystemfontsize.md) as the parameter of [systemFontOfSize:](../nsfont/systemfont%28ofsize_%29.md), both `NSFont` class methods). If the size of the new font is different from that of the old font, the content view is resized to absorb the difference.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [transparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with a character denoted as an access key.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.
