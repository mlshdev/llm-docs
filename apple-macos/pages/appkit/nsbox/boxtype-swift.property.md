> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/boxtype-swift.property](https://developer.apple.com/documentation/appkit/nsbox/boxtype-swift.property)

# boxType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s box type.

## Declaration

```swift
var boxType: NSBox.BoxType { get set }
```

<a id="Discussion"></a>

## Discussion

A constant describing the type of box. These constants are described in [NSBox.BoxType](boxtype-swift.enum.md). By default, the box type of an `NSBox` is `NSBoxPrimary`.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.

# boxType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s box type.

## Declaration

```objectivec
@property NSBoxType boxType;
```

<a id="Discussion"></a>

## Discussion

A constant describing the type of box. These constants are described in [NSBoxType](boxtype-swift.enum.md). By default, the box type of an `NSBox` is `NSBoxPrimary`.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [transparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with a character denoted as an access key.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.
