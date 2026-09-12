> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationline/startpoint()](https://developer.apple.com/documentation/pdfkit/pdfannotationline/startpoint())

# startPoint() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the starting point for the line.

## Declaration

```swift
func startPoint() -> NSPoint
```

<a id="return-value"></a>

## Return Value

The starting point for the line, in page space.

<a id="Discussion"></a>

## Discussion

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Specifying the Starting and Ending Points

- [setStart(\_:)](setstart%28__%29-86is0.md): Deprecated. Sets the starting point for the line.
- [endPoint()](endpoint%28%29.md): Deprecated. Returns the ending point for the line in page space.
- [setEnd(\_:)](setend%28__%29-2qn58.md): Deprecated. Sets the ending point for the line.

# startPoint (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Returns the starting point for the line.

## Declaration

```objectivec
- (NSPoint) startPoint;
```

<a id="return-value"></a>

## Return Value

The starting point for the line, in page space.

<a id="Discussion"></a>

## Discussion

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Specifying the Starting and Ending Points

- [setStartPoint:](setstart%28__%29-86is0.md): Deprecated. Sets the starting point for the line.
- [endPoint](endpoint%28%29.md): Deprecated. Returns the ending point for the line in page space.
- [setEndPoint:](setend%28__%29-2qn58.md): Deprecated. Sets the ending point for the line.
