> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/setbounds(_:for:)](https://developer.apple.com/documentation/pdfkit/pdfpage/setbounds(_:for:))

# setBounds(\_:for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Sets the bounds for the specified box.

## Declaration

```swift
func setBounds(_ bounds: CGRect, for box: PDFDisplayBox)
```

```swift
func setBounds(_ bounds: NSRect, for box: PDFDisplayBox)
```

<a id="Discussion"></a>

## Discussion

If the box does not exist, this method creates it for you.

To remove a box, pass `NSZeroRect` for the bounds (note that you cannot remove the media box). If the box bounds are not in range, this method throws a range exception.

## See Also

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](label.md): Returns the label for the page.
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.

# setBounds:forBox: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Sets the bounds for the specified box.

## Declaration

```objectivec
- (void) setBounds:(CGRect) bounds forBox:(PDFDisplayBox) box;
```

```objectivec
- (void) setBounds:(NSRect) bounds forBox:(PDFDisplayBox) box;
```

<a id="Discussion"></a>

## Discussion

If the box does not exist, this method creates it for you.

To remove a box, pass `NSZeroRect` for the bounds (note that you cannot remove the media box). If the box bounds are not in range, this method throws a range exception.

## See Also

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](label.md): Returns the label for the page.
- [boundsForBox:](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.
