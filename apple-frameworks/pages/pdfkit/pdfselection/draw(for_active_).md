> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/draw(for:active:)](https://developer.apple.com/documentation/pdfkit/pdfselection/draw(for:active:))

# draw(for:active:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Calls [draw(for:with:active:)](draw%28for_with_active_%29.md) with a default value for box parameter.

## Declaration

```swift
func draw(for page: PDFPage, active: Bool)
```

<a id="Discussion"></a>

## Discussion

The default value is `kPDFDisplayBoxCropBox`. If active is [true](https://developer.apple.com/documentation/swift/true), drawing uses `selectedTextBackgroundColor`. If [false](https://developer.apple.com/documentation/swift/false), it uses `secondarySelectedControlColor`.

## See Also

### Managing Selection Drawing

- [draw(for:with:active:)](draw%28for_with_active_%29.md): Draws the selection relative to the origin of the specified box in page space.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# drawForPage:active: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Calls [drawForPage:withBox:active:](draw%28for_with_active_%29.md) with a default value for box parameter.

## Declaration

```objectivec
- (void) drawForPage:(PDFPage *) page active:(BOOL) active;
```

<a id="Discussion"></a>

## Discussion

The default value is `kPDFDisplayBoxCropBox`. If active is [true](https://developer.apple.com/documentation/swift/true), drawing uses `selectedTextBackgroundColor`. If [false](https://developer.apple.com/documentation/swift/false), it uses `secondarySelectedControlColor`.

## See Also

### Managing Selection Drawing

- [drawForPage:withBox:active:](draw%28for_with_active_%29.md): Draws the selection relative to the origin of the specified box in page space.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
