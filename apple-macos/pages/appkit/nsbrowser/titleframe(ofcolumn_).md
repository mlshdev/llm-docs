> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/titleframe(ofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/titleframe(ofcolumn:))

# titleFrame(ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounds of the title frame for the specified column.

## Declaration

```swift
func titleFrame(ofColumn column: Int) -> NSRect
```

## Parameters

- `column`: The index of the column for which to return the title frame.

<a id="return-value"></a>

## Return Value

The rectangle specifying the bounds of the column’s title frame.

## See Also

### Accessing Column Titles

- [title(ofColumn:)](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle(\_:ofColumn:)](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [isTitled](istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitle(ofColumn:in:)](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.

# titleFrameOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the bounds of the title frame for the specified column.

## Declaration

```objectivec
- (NSRect) titleFrameOfColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column for which to return the title frame.

<a id="return-value"></a>

## Return Value

The rectangle specifying the bounds of the column’s title frame.

## See Also

### Accessing Column Titles

- [titleOfColumn:](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle:ofColumn:](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [titled](istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitleOfColumn:inRect:](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
