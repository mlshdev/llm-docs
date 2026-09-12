> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfthumbnailview/labelfont](https://developer.apple.com/documentation/pdfkit/pdfthumbnailview/labelfont)

# labelFont (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the font used to label the thumbnails.

## Declaration

```swift
@NSCopying var labelFont: NSFont? { get set }
```

<a id="return-value"></a>

## Return Value

The font used in the thumbnail labels.

<a id="Discussion"></a>

## Discussion

Typically, the label of a thumbnail is the page number of the page it represents.

## See Also

### Working with Thumbnail View Display Characteristics

- [maximumNumberOfColumns](maximumnumberofcolumns.md): Returns the maximum number of columns of thumbnails the thumbnail view can display.
- [backgroundColor](backgroundcolor.md): Returns the color used in the background of the thumbnail view.

# labelFont (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Returns the font used to label the thumbnails.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSFont * labelFont;
```

<a id="return-value"></a>

## Return Value

The font used in the thumbnail labels.

<a id="Discussion"></a>

## Discussion

Typically, the label of a thumbnail is the page number of the page it represents.

## See Also

### Working with Thumbnail View Display Characteristics

- [maximumNumberOfColumns](maximumnumberofcolumns.md): Returns the maximum number of columns of thumbnails the thumbnail view can display.
- [backgroundColor](backgroundcolor.md): Returns the color used in the background of the thumbnail view.
