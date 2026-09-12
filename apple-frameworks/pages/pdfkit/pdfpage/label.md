> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/label](https://developer.apple.com/documentation/pdfkit/pdfpage/label)

# label (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the label for the page.

## Declaration

```swift
var label: String? { get }
```

<a id="Discussion"></a>

## Discussion

Typically, the label is “1” for the first page, “2” for the second page, and so on, but nonnumerical labels are also possible (such as “xxi”, “4-1” and so on).

## See Also

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds(\_:for:)](setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.

# label (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the label for the page.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * label;
```

<a id="Discussion"></a>

## Discussion

Typically, the label is “1” for the first page, “2” for the second page, and so on, but nonnumerical labels are also possible (such as “xxi”, “4-1” and so on).

## See Also

### Getting Information About a Page

- [document](document.md): Returns the `PDFDocument` object with which the page is associated.
- [boundsForBox:](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds:forBox:](setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.
