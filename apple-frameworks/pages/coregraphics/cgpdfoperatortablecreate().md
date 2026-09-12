> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfoperatortablecreate()](https://developer.apple.com/documentation/coregraphics/cgpdfoperatortablecreate())

# CGPDFOperatorTableCreate() (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an empty PDF operator table.

## Declaration

```swift
func CGPDFOperatorTableCreate() -> CGPDFOperatorTableRef?
```

<a id="return-value"></a>

## Return Value

An empty PDF operator table. In Objective-C, you’re responsible for releasing this object by calling [CGPDFOperatorTableRelease(\_:)](cgpdfoperatortablerelease%28__%29.md).

<a id="Discussion"></a>

## Discussion

Call the function [CGPDFOperatorTableSetCallback(\_:\_:\_:)](cgpdfoperatortablesetcallback%28______%29.md) to fill the operator table with callbacks.

# CGPDFOperatorTableCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an empty PDF operator table.

## Declaration

```objectivec
extern CGPDFOperatorTableRefCGPDFOperatorTableCreate();
```

<a id="return-value"></a>

## Return Value

An empty PDF operator table. In Objective-C, you’re responsible for releasing this object by calling [CGPDFOperatorTableRelease](cgpdfoperatortablerelease%28__%29.md).

<a id="Discussion"></a>

## Discussion

Call the function [CGPDFOperatorTableSetCallback](cgpdfoperatortablesetcallback%28______%29.md) to fill the operator table with callbacks.
