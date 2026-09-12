> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationline/setend(_:)-2qn58](https://developer.apple.com/documentation/pdfkit/pdfannotationline/setend(_:)-2qn58)

# setEnd(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the ending point for the line.

## Declaration

```swift
func setEnd(_ point: NSPoint)
```

## Parameters

- `point`: The ending point for the line, in page space.

<a id="Discussion"></a>

## Discussion

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Specifying the Starting and Ending Points

- [startPoint()](startpoint%28%29.md): Deprecated. Returns the starting point for the line.
- [setStart(\_:)](setstart%28__%29-86is0.md): Deprecated. Sets the starting point for the line.
- [endPoint()](endpoint%28%29.md): Deprecated. Returns the ending point for the line in page space.

# setEndPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Sets the ending point for the line.

## Declaration

```objectivec
- (void) setEndPoint:(NSPoint) point;
```

## Parameters

- `point`: The ending point for the line, in page space.

<a id="Discussion"></a>

## Discussion

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Specifying the Starting and Ending Points

- [startPoint](startpoint%28%29.md): Deprecated. Returns the starting point for the line.
- [setStartPoint:](setstart%28__%29-86is0.md): Deprecated. Sets the starting point for the line.
- [endPoint](endpoint%28%29.md): Deprecated. Returns the ending point for the line in page space.
