> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/rotation](https://developer.apple.com/documentation/pdfkit/pdfpage/rotation)

# rotation (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Sets the rotation angle for the page in degrees.

## Declaration

```swift
var rotation: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The rotation must be a positive or negative multiple of 90 (negative angles are converted to their positive equivalents; for example, -90 is changed to 270); otherwise this method throws an exception.

## See Also

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](label.md): Returns the label for the page.
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds(\_:for:)](setbounds%28__for_%29.md): Sets the bounds for the specified box.

# rotation (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Sets the rotation angle for the page in degrees.

## Declaration

```objectivec
@property (nonatomic) NSInteger rotation;
```

<a id="Discussion"></a>

## Discussion

The rotation must be a positive or negative multiple of 90 (negative angles are converted to their positive equivalents; for example, -90 is changed to 270); otherwise this method throws an exception.

## See Also

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [label](label.md): Returns the label for the page.
- [boundsForBox:](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds:forBox:](setbounds%28__for_%29.md): Sets the bounds for the specified box.
