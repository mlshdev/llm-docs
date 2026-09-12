> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/bordertype](https://developer.apple.com/documentation/appkit/nsbox/bordertype)

# borderType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.15)

The receiver’s border type.

> borderType is only applicable to NSBoxOldStyle, which is deprecated. To replace a borderType of NSNoBorder, use the \`transparent\` property.

## Declaration

```swift
var borderType: NSBorderType { get set }
```

<a id="Discussion"></a>

## Discussion

A constant describing the type of border. Border types are defined in `NSView.h`. Currently, the following border types are defined: `NSNoBorder`,`NSLineBorder`,`NSBezelBorder`, `NSGrooveBorder`.

By default, the border type of an `NSBox` is `NSGrooveBorder`.

If the size of the new border is different from that of the old border, the content view is resized to absorb the difference, and the box is marked for redisplay.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [isTransparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.

# borderType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.15)

The receiver’s border type.

> borderType is only applicable to NSBoxOldStyle, which is deprecated. To replace a borderType of NSNoBorder, use the \`transparent\` property.

## Declaration

```objectivec
@property NSBorderType borderType;
```

<a id="Discussion"></a>

## Discussion

A constant describing the type of border. Border types are defined in `NSView.h`. Currently, the following border types are defined: `NSNoBorder`,`NSLineBorder`,`NSBezelBorder`, `NSGrooveBorder`.

By default, the border type of an `NSBox` is `NSGrooveBorder`.

If the size of the new border is different from that of the old border, the content view is resized to absorb the difference, and the box is marked for redisplay.

## See Also

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [transparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with a character denoted as an access key.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.
