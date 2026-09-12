> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfscannercreate(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfscannercreate(_:_:_:))

# CGPDFScannerCreate(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF scanner.

## Declaration

```swift
func CGPDFScannerCreate(_ cs: CGPDFContentStreamRef, _ table: CGPDFOperatorTableRef?, _ info: UnsafeMutableRawPointer?) -> CGPDFScannerRef
```

## Parameters

- `cs`: A PDF content stream object. (See [CGPDFContentStream](cgpdfcontentstream.md).)
- `table`: A table of callbacks for the PDF operators you want to handle.
- `info`: A pointer to data you want passed to your callback function. (See [CGPDFOperatorTable](cgpdfoperatortable.md).)

<a id="return-value"></a>

## Return Value

A PDF scanner object. In Objective-C, you’re responsible for releasing this object by calling the function [CGPDFScannerRelease(\_:)](cgpdfscannerrelease%28__%29.md).

<a id="Discussion"></a>

## Discussion

When you want to parse the contents of the PDF stream, call the function [CGPDFScannerScan(\_:)](cgpdfscannerscan%28__%29.md).

# CGPDFScannerCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PDF scanner.

## Declaration

```objectivec
extern CGPDFScannerRefCGPDFScannerCreate(CGPDFContentStreamRef cs, CGPDFOperatorTableRef table, void *info);
```

## Parameters

- `cs`: A PDF content stream object. (See [CGPDFContentStream](cgpdfcontentstream.md).)
- `table`: A table of callbacks for the PDF operators you want to handle.
- `info`: A pointer to data you want passed to your callback function. (See [CGPDFOperatorTable](cgpdfoperatortable.md).)

<a id="return-value"></a>

## Return Value

A PDF scanner object. In Objective-C, you’re responsible for releasing this object by calling the function [CGPDFScannerRelease](cgpdfscannerrelease%28__%29.md).

<a id="Discussion"></a>

## Discussion

When you want to parse the contents of the PDF stream, call the function [CGPDFScannerScan](cgpdfscannerscan%28__%29.md).
