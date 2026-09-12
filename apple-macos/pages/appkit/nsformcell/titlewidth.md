> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/titlewidth](https://developer.apple.com/documentation/appkit/nsformcell/titlewidth)

# titleWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the title field.

## Declaration

```swift
var titleWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The width of the title field, measured in points in the user coordinate space. You usually do not need to set this property. AppKit automatically sets the title width whenever the title changes. If the automatic width doesn’t suit your needs, though, you can use this property to set the width explicitly.

After you have set the width this way, AppKit stops setting the width automatically, so you must set this property every time the title changes. If you want AppKit to resume automatic width assignments, set this property to a negative value.

## See Also

### Accessing a Cell’s Title

- [attributedTitle](attributedtitle.md): The title of the cell as an attributed string.
- [title](title.md): The cell’s title text.
- [titleAlignment](titlealignment.md): The alignment of the title.
- [titleBaseWritingDirection](titlebasewritingdirection.md): The default writing direction used to render the form cell’s title.
- [titleFont](titlefont.md): The font used to draw cell’s title.

# titleWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the title field.

## Declaration

```objectivec
@property CGFloat titleWidth;
```

<a id="Discussion"></a>

## Discussion

The width of the title field, measured in points in the user coordinate space. You usually do not need to set this property. AppKit automatically sets the title width whenever the title changes. If the automatic width doesn’t suit your needs, though, you can use this property to set the width explicitly.

After you have set the width this way, AppKit stops setting the width automatically, so you must set this property every time the title changes. If you want AppKit to resume automatic width assignments, set this property to a negative value.

## See Also

### Accessing a Cell’s Title

- [attributedTitle](attributedtitle.md): The title of the cell as an attributed string.
- [title](title.md): The cell’s title text.
- [titleAlignment](titlealignment.md): The alignment of the title.
- [titleBaseWritingDirection](titlebasewritingdirection.md): The default writing direction used to render the form cell’s title.
- [titleFont](titlefont.md): The font used to draw cell’s title.
