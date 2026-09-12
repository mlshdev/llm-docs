> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfscannerscan(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfscannerscan(_:))

# CGPDFScannerScan(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Parses the content stream of a PDF scanner object.

## Declaration

```swift
func CGPDFScannerScan(_ scanner: CGPDFScannerRef) -> Bool
```

## Parameters

- `scanner`: The scanner object whose content stream you want to parse.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the entire stream is parsed successfully; [false](https://developer.apple.com/documentation/swift/false) if parsing fails (for example, if the stream data is corrupted).

<a id="Discussion"></a>

## Discussion

The function [CGPDFScannerScan(\_:)](cgpdfscannerscan%28__%29.md) parses the PDF content stream associated with the scanner. Each time Core Graphics parses a PDF operator for which you register a callback, Core Graphics invokes your callback.

## See Also

### Parsing Content

- [CGPDFScannerGetContentStream(\_:)](cgpdfscannergetcontentstream%28__%29.md): Returns the content stream associated with a PDF scanner object.

# CGPDFScannerScan (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Parses the content stream of a PDF scanner object.

## Declaration

```objectivec
extern bool CGPDFScannerScan(CGPDFScannerRef scanner);
```

## Parameters

- `scanner`: The scanner object whose content stream you want to parse.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the entire stream is parsed successfully; [false](https://developer.apple.com/documentation/swift/false) if parsing fails (for example, if the stream data is corrupted).

<a id="Discussion"></a>

## Discussion

The function [CGPDFScannerScan](cgpdfscannerscan%28__%29.md) parses the PDF content stream associated with the scanner. Each time Core Graphics parses a PDF operator for which you register a callback, Core Graphics invokes your callback.

## See Also

### Parsing Content

- [CGPDFScannerGetContentStream](cgpdfscannergetcontentstream%28__%29.md): Returns the content stream associated with a PDF scanner object.
