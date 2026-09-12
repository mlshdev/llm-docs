> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/titleposition-swift.property](https://developer.apple.com/documentation/appkit/nsbox/titleposition-swift.property)

# titlePosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A constant representing the title position.

## Declaration

```swift
var titlePosition: NSBox.TitlePosition { get set }
```

<a id="Discussion"></a>

## Discussion

A constant representing the position of the receiver’s title. See [NSBox.TitlePosition](titleposition-swift.enum.md) for a list of these constants. If the new title position changes the size of the box’s border area, the content view is resized to absorb the difference, and the box is marked as needing redisplay.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.

# titlePosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A constant representing the title position.

## Declaration

```objectivec
@property NSTitlePosition titlePosition;
```

<a id="Discussion"></a>

## Discussion

A constant representing the position of the receiver’s title. See [NSTitlePosition](titleposition-swift.enum.md) for a list of these constants. If the new title position changes the size of the box’s border area, the content view is resized to absorb the difference, and the box is marked as needing redisplay.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [transparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with a character denoted as an access key.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.
