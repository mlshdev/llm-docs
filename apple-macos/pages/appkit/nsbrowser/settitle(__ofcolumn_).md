> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/settitle(_:ofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/settitle(_:ofcolumn:))

# setTitle(\_:ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the title of the given column.

## Declaration

```swift
func setTitle(_ string: String, ofColumn column: Int)
```

## Parameters

- `string`: The title of the column.
- `column`: The index of the column whose title should be set.

## See Also

### Accessing Column Titles

- [title(ofColumn:)](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [isTitled](istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitle(ofColumn:in:)](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrame(ofColumn:)](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.

# setTitle:ofColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the title of the given column.

## Declaration

```objectivec
- (void) setTitle:(NSString *) string ofColumn:(NSInteger) column;
```

## Parameters

- `string`: The title of the column.
- `column`: The index of the column whose title should be set.

## See Also

### Accessing Column Titles

- [titleOfColumn:](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [titled](istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitleOfColumn:inRect:](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrameOfColumn:](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.
