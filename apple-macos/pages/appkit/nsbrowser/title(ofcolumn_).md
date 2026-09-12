> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/title(ofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowser/title(ofcolumn:))

# title(ofColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the title displayed for the given column.

## Declaration

```swift
func title(ofColumn column: Int) -> String?
```

## Parameters

- `column`: The index of the column for which to get the title.

<a id="return-value"></a>

## Return Value

The title of the specified column.

## See Also

### Accessing Column Titles

- [setTitle(\_:ofColumn:)](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [isTitled](istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitle(ofColumn:in:)](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrame(ofColumn:)](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.

# titleOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the title displayed for the given column.

## Declaration

```objectivec
- (NSString *) titleOfColumn:(NSInteger) column;
```

## Parameters

- `column`: The index of the column for which to get the title.

<a id="return-value"></a>

## Return Value

The title of the specified column.

## See Also

### Accessing Column Titles

- [setTitle:ofColumn:](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [titled](istitled.md): A Boolean that indicates whether columns display titles.
- [drawTitleOfColumn:inRect:](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrameOfColumn:](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.
