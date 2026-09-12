> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/drawtitle(ofcolumn:in:)](https://developer.apple.com/documentation/appkit/nsbrowser/drawtitle(ofcolumn:in:))

# drawTitle(ofColumn:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the title for the specified column within the given rectangle.

## Declaration

```swift
func drawTitle(ofColumn column: Int, in rect: NSRect)
```

## Parameters

- `column`: The index of the column for which to draw the title.
- `rect`: The rectangle within which to draw the title.

## See Also

### Accessing Column Titles

- [title(ofColumn:)](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle(\_:ofColumn:)](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [isTitled](istitled.md): A Boolean that indicates whether columns display titles.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrame(ofColumn:)](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.

# drawTitleOfColumn:inRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Draws the title for the specified column within the given rectangle.

## Declaration

```objectivec
- (void) drawTitleOfColumn:(NSInteger) column inRect:(NSRect) rect;
```

## Parameters

- `column`: The index of the column for which to draw the title.
- `rect`: The rectangle within which to draw the title.

## See Also

### Accessing Column Titles

- [titleOfColumn:](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle:ofColumn:](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [titled](istitled.md): A Boolean that indicates whether columns display titles.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrameOfColumn:](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.
