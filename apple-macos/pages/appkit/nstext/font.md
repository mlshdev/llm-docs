> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/font](https://developer.apple.com/documentation/appkit/nstext/font)

# font (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font of all the receiver’s text.

## Declaration

```swift
var font: NSFont? { get set }
```

<a id="Discussion"></a>

## Discussion

When the specified font doesn’t include a character, the text system uses an alternate font that contains the character. The substituted font may not have compatible metrics.

## See Also

### Changing the font

- [changeFont(\_:)](changefont%28__%29.md): This action method changes the font of the selection for a rich text object, or of all text for a plain text object.
- [setFont(\_:range:)](setfont%28__range_%29.md): Sets the font of characters within `aRange` to `aFont`.

# font (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The font of all the receiver’s text.

## Declaration

```objectivec
@property (strong, nullable) NSFont * font;
```

<a id="Discussion"></a>

## Discussion

When the specified font doesn’t include a character, the text system uses an alternate font that contains the character. The substituted font may not have compatible metrics.

## See Also

### Changing the font

- [changeFont:](changefont%28__%29.md): This action method changes the font of the selection for a rich text object, or of all text for a plain text object.
- [setFont:range:](setfont%28__range_%29.md): Sets the font of characters within `aRange` to `aFont`.
