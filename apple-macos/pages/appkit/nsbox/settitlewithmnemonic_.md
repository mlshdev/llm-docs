> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/settitlewithmnemonic:](https://developer.apple.com/documentation/appkit/nsbox/settitlewithmnemonic:)

# setTitleWithMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the title of the receiver with a character denoted as an access key.

## Declaration

```objectivec
- (void) setTitleWithMnemonic:(NSString *) stringWithAmpersand;
```

<a id="Discussion"></a>

## Discussion

Mnemonics are not supported in macOS.

By default, a box’s title is “Title.” The content view is not automatically resized, and the box is not marked for redisplay.

## See Also

### Related Documentation

- [setTitleWithMnemonic:](../nscell/settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with one character in the string denoted as an access key.

### Configuring Boxes

- [borderRect](borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](boxtype-swift.property.md): The receiver’s box type.
- [borderType](bordertype.md): Deprecated. The receiver’s border type.
- [transparent](istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](title.md): The receiver’s title.
- [titleFont](titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](titleposition-swift.property.md): A constant representing the title position.
- [titleCell](titlecell.md): The cell used to display the receiver’s title.
- [titleRect](titlerect.md): The rectangle in which the receiver’s title is drawn.
