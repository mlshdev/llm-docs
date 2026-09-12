> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/draw(for:with:active:)](https://developer.apple.com/documentation/pdfkit/pdfselection/draw(for:with:active:))

# draw(for:with:active:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Draws the selection relative to the origin of the specified box in page space.

## Declaration

```swift
func draw(for page: PDFPage, with box: PDFDisplayBox, active: Bool)
```

<a id="Discussion"></a>

## Discussion

The selection is drawn using the current highlight color. If active is [true](https://developer.apple.com/documentation/swift/true), drawing uses `selectedTextBackgroundColor`. If [false](https://developer.apple.com/documentation/swift/false), it uses `secondarySelectedControlColor`. Refer to the [PDFPage](../pdfpage.md) class for the list of available box types.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Managing Selection Drawing

- [draw(for:active:)](draw%28for_active_%29.md): Calls [draw(for:with:active:)](draw%28for_with_active_%29.md) with a default value for box parameter.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# drawForPage:withBox:active: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Draws the selection relative to the origin of the specified box in page space.

## Declaration

```objectivec
- (void) drawForPage:(PDFPage *) page withBox:(PDFDisplayBox) box active:(BOOL) active;
```

<a id="Discussion"></a>

## Discussion

The selection is drawn using the current highlight color. If active is [true](https://developer.apple.com/documentation/swift/true), drawing uses `selectedTextBackgroundColor`. If [false](https://developer.apple.com/documentation/swift/false), it uses `secondarySelectedControlColor`. Refer to the [PDFPage](../pdfpage.md) class for the list of available box types.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Managing Selection Drawing

- [drawForPage:active:](draw%28for_active_%29.md): Calls [drawForPage:withBox:active:](draw%28for_with_active_%29.md) with a default value for box parameter.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
