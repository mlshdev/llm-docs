> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/backgroundcolor](https://developer.apple.com/documentation/pdfkit/pdfview/backgroundcolor)

# backgroundColor (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The view’s background color.

## Declaration

```swift
var backgroundColor: UIColor { get set }
```

```swift
var backgroundColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

A view’s background is the area displayed to either side of a PDF document’s pages. The background also appears between pages when page breaks are enabled. The default color is a 50% gray.

## See Also

### Setting Background Color

- [takeBackgroundColorFrom(\_:)](takebackgroundcolorfrom%28__%29.md): Deprecated. Sets the view’s background color to the specified color.

# backgroundColor (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The view’s background color.

## Declaration

```objectivec
@property (nonatomic, strong) UIColor * backgroundColor;
```

```objectivec
@property (nonatomic, strong) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

A view’s background is the area displayed to either side of a PDF document’s pages. The background also appears between pages when page breaks are enabled. The default color is a 50% gray.

## See Also

### Setting Background Color

- [takeBackgroundColorFrom:](takebackgroundcolorfrom%28__%29.md): Deprecated. Sets the view’s background color to the specified color.
