> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/title](https://developer.apple.com/documentation/appkit/nsbox/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s title.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

The title of the `NSBox`. By default, a box’s title is “Title.” If the size of the new title is different from that of the old title, the content view is resized to absorb the difference.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s title.

## Declaration

```objectivec
@property (copy) NSString * title;
```

<a id="Discussion"></a>

## Discussion

The title of the `NSBox`. By default, a box’s title is “Title.” If the size of the new title is different from that of the old title, the content view is resized to absorb the difference.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [transparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with a character denoted as an access key.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.
