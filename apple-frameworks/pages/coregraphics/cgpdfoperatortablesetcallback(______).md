> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfoperatortablesetcallback(_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgpdfoperatortablesetcallback(_:_:_:))

# CGPDFOperatorTableSetCallback(\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets a callback function for a PDF operator.

## Declaration

```swift
func CGPDFOperatorTableSetCallback(_ table: CGPDFOperatorTableRef, _ name: UnsafePointer<CChar>, _ callback: CGPDFOperatorCallback)
```

## Parameters

- `table`: A PDF operator table.
- `name`: The name of the PDF operator you want to set a callback for.
- `callback`: The callback to invoke for the PDF operator specified by the `name` parameter.

<a id="Discussion"></a>

## Discussion

You call the function [CGPDFOperatorTableSetCallback(\_:\_:\_:)](cgpdfoperatortablesetcallback%28______%29.md) for each PDF operator for which you want to provide a callback. See Appendix A in the *PDF Reference, Second Edition*, version 1.3, Adobe Systems Incorporated for a summary of PDF operators.

# CGPDFOperatorTableSetCallback (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets a callback function for a PDF operator.

## Declaration

```objectivec
extern void CGPDFOperatorTableSetCallback(CGPDFOperatorTableRef table, const char *name, CGPDFOperatorCallback callback);
```

## Parameters

- `table`: A PDF operator table.
- `name`: The name of the PDF operator you want to set a callback for.
- `callback`: The callback to invoke for the PDF operator specified by the `name` parameter.

<a id="Discussion"></a>

## Discussion

You call the function [CGPDFOperatorTableSetCallback](cgpdfoperatortablesetcallback%28______%29.md) for each PDF operator for which you want to provide a callback. See Appendix A in the *PDF Reference, Second Edition*, version 1.3, Adobe Systems Incorporated for a summary of PDF operators.
