> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox/borderwidth](https://developer.apple.com/documentation/appkit/nsbox/borderwidth)

# borderWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The width of the receiver’s border when the receiver is a custom box with a simple line border.

## Declaration

```swift
var borderWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The receiver’s border width. It must be a custom box—that is, it has a type of [NSBox.BoxType.custom](boxtype-swift.enum/custom.md)—and it must have a border style of [NSBorderType.lineBorder](../nsbordertype/lineborder.md).

<a id="Special-Considerations"></a>

### Special Considerations

Functional only when the receiver’s box type ([boxType](boxtype-swift.property.md)) is `NSBoxCustom` and its border type ([borderType](bordertype.md)) is `NSLineBorder`.

## See Also

### Customizing

- [borderColor](bordercolor.md): The color of the receiver’s border when the receiver is a custom box with a simple line border.
- [cornerRadius](cornerradius.md): The radius of the receiver’s corners when the receiver is a custom box with a simple line border.
- [fillColor](fillcolor.md): The color of the receiver’s background when the receiver is a custom box with a simple line border.

# borderWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The width of the receiver’s border when the receiver is a custom box with a simple line border.

## Declaration

```objectivec
@property CGFloat borderWidth;
```

<a id="Discussion"></a>

## Discussion

The receiver’s border width. It must be a custom box—that is, it has a type of [NSBoxCustom](boxtype-swift.enum/custom.md)—and it must have a border style of [NSLineBorder](../nsbordertype/lineborder.md).

<a id="Special-Considerations"></a>

### Special Considerations

Functional only when the receiver’s box type ([boxType](boxtype-swift.property.md)) is `NSBoxCustom` and its border type ([borderType](bordertype.md)) is `NSLineBorder`.

## See Also

### Customizing

- [borderColor](bordercolor.md): The color of the receiver’s border when the receiver is a custom box with a simple line border.
- [cornerRadius](cornerradius.md): The radius of the receiver’s corners when the receiver is a custom box with a simple line border.
- [fillColor](fillcolor.md): The color of the receiver’s background when the receiver is a custom box with a simple line border.
