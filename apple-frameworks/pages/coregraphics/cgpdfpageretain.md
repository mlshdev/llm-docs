> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpdfpageretain](https://developer.apple.com/documentation/coregraphics/cgpdfpageretain)

# CGPDFPageRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a PDF page.

## Declaration

```objectivec
extern CGPDFPageRefCGPDFPageRetain(CGPDFPageRef page);
```

## Parameters

- `page`: A PDF page.

<a id="return-value"></a>

## Return Value

The same page you passed in as the `page` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `page` parameter is `NULL`.

## See Also

### Retaining and Releasing a PDF Page

- [CGPDFPageRelease](cgpdfpagerelease.md): Decrements the retain count of a PDF page.
