> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfscannergetcontentstream(_:)](https://developer.apple.com/documentation/coregraphics/cgpdfscannergetcontentstream(_:))

# CGPDFScannerGetContentStream(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the content stream associated with a PDF scanner object.

## Declaration

```swift
func CGPDFScannerGetContentStream(_ scanner: CGPDFScannerRef) -> CGPDFContentStreamRef
```

## Parameters

- `scanner`: The scanner object whose content stream you want to obtain.

<a id="return-value"></a>

## Return Value

The content stream associated with `scanner`.

## See Also

### Parsing Content

- [CGPDFScannerScan(\_:)](cgpdfscannerscan%28__%29.md): Parses the content stream of a PDF scanner object.

# CGPDFScannerGetContentStream (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the content stream associated with a PDF scanner object.

## Declaration

```objectivec
extern CGPDFContentStreamRefCGPDFScannerGetContentStream(CGPDFScannerRef scanner);
```

## Parameters

- `scanner`: The scanner object whose content stream you want to obtain.

<a id="return-value"></a>

## Return Value

The content stream associated with `scanner`.

## See Also

### Parsing Content

- [CGPDFScannerScan](cgpdfscannerscan%28__%29.md): Parses the content stream of a PDF scanner object.
