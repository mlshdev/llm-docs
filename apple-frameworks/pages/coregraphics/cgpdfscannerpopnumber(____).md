> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfscannerpopnumber(_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfscannerpopnumber(_:_:))

# CGPDFScannerPopNumber(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves a real value object from the scanner stack.

## Declaration

```swift
func CGPDFScannerPopNumber(_ scanner: CGPDFScannerRef, _ value: UnsafeMutablePointer<CGPDFReal>?) -> Bool
```

## Parameters

- `scanner`: A valid scanner object.
- `value`: On output, points to the real value object popped from the scanner stack.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the real value is retrieved successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The number retrieved from the scanner can be a real value or an integer value. However, the result is always converted to a value of type [CGPDFReal](cgpdfreal.md).

## See Also

### Getting PDF Objects from the Scanner Stack

- [CGPDFScannerPopObject(\_:\_:)](cgpdfscannerpopobject%28____%29.md): Retrieves an object from the scanner stack.
- [CGPDFScannerPopBoolean(\_:\_:)](cgpdfscannerpopboolean%28____%29.md): Retrieves a Boolean object from the scanner stack.
- [CGPDFScannerPopInteger(\_:\_:)](cgpdfscannerpopinteger%28____%29.md): Retrieves an integer object from the scanner stack.
- [CGPDFScannerPopName(\_:\_:)](cgpdfscannerpopname%28____%29.md): Retrieves a character string from the scanner stack.
- [CGPDFScannerPopString(\_:\_:)](cgpdfscannerpopstring%28____%29.md): Retrieves a string object from the scanner stack.
- [CGPDFScannerPopArray(\_:\_:)](cgpdfscannerpoparray%28____%29.md): Retrieves an array object from the scanner stack.
- [CGPDFScannerPopDictionary(\_:\_:)](cgpdfscannerpopdictionary%28____%29.md): Retrieves a PDF dictionary object from the scanner stack.
- [CGPDFScannerPopStream(\_:\_:)](cgpdfscannerpopstream%28____%29.md): Retrieves a PDF stream object from the scanner stack.

# CGPDFScannerPopNumber (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Retrieves a real value object from the scanner stack.

## Declaration

```objectivec
extern bool CGPDFScannerPopNumber(CGPDFScannerRef scanner, CGPDFReal *value);
```

## Parameters

- `scanner`: A valid scanner object.
- `value`: On output, points to the real value object popped from the scanner stack.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the real value is retrieved successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The number retrieved from the scanner can be a real value or an integer value. However, the result is always converted to a value of type [CGPDFReal](cgpdfreal.md).

## See Also

### Getting PDF Objects from the Scanner Stack

- [CGPDFScannerPopObject](cgpdfscannerpopobject%28____%29.md): Retrieves an object from the scanner stack.
- [CGPDFScannerPopBoolean](cgpdfscannerpopboolean%28____%29.md): Retrieves a Boolean object from the scanner stack.
- [CGPDFScannerPopInteger](cgpdfscannerpopinteger%28____%29.md): Retrieves an integer object from the scanner stack.
- [CGPDFScannerPopName](cgpdfscannerpopname%28____%29.md): Retrieves a character string from the scanner stack.
- [CGPDFScannerPopString](cgpdfscannerpopstring%28____%29.md): Retrieves a string object from the scanner stack.
- [CGPDFScannerPopArray](cgpdfscannerpoparray%28____%29.md): Retrieves an array object from the scanner stack.
- [CGPDFScannerPopDictionary](cgpdfscannerpopdictionary%28____%29.md): Retrieves a PDF dictionary object from the scanner stack.
- [CGPDFScannerPopStream](cgpdfscannerpopstream%28____%29.md): Retrieves a PDF stream object from the scanner stack.
