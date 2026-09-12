> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/istitled](https://developer.apple.com/documentation/appkit/nsbrowser/istitled)

# isTitled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether columns display titles.

## Declaration

```swift
var isTitled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the columns in a browser display titles.

## See Also

### Accessing Column Titles

- [title(ofColumn:)](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle(\_:ofColumn:)](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [drawTitle(ofColumn:in:)](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrame(ofColumn:)](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.

# titled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether columns display titles.

## Declaration

```objectivec
@property (getter=isTitled) BOOL titled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the columns in a browser display titles.

## See Also

### Accessing Column Titles

- [titleOfColumn:](title%28ofcolumn_%29.md): Returns the title displayed for the given column.
- [setTitle:ofColumn:](settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [drawTitleOfColumn:inRect:](drawtitle%28ofcolumn_in_%29.md): Draws the title for the specified column within the given rectangle.
- [titleHeight](titleheight.md): The height of the column titles for the browser.
- [titleFrameOfColumn:](titleframe%28ofcolumn_%29.md): Returns the bounds of the title frame for the specified column.
