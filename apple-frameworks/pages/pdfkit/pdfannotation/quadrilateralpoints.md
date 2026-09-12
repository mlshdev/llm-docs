> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/quadrilateralpoints](https://developer.apple.com/documentation/pdfkit/pdfannotation/quadrilateralpoints)

# quadrilateralPoints (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

An array of values that represents the points bounding the marked-up text.

## Declaration

```swift
var quadrilateralPoints: [NSValue]? { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains `N * 4` [NSValue](../../foundation/nsvalue.md) objects that use [pointValue](../../foundation/nsvalue/pointvalue.md) or [cgPointValue](../../foundation/nsvalue/cgpointvalue.md) to define `N` quadrilaterals in page-space coordinates, where `N` is the number of quad points. The order of the points is a Z pattern as follows:

- Upper-left point
- Upper-right point
- Lower-left point
- Lower-right point

The coordinates of each point are relative to the bound’s origin of the annotation.

## See Also

### Configuring Text Markup Annotations

- [markupType](markuptype.md): The markup type that the annotation displays, either highlight, strikethrough, underline, or redact.
- [PDFMarkupType](../pdfmarkuptype.md): The styles available for markup annotations in PDFKit.

# quadrilateralPoints (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

An array of values that represents the points bounding the marked-up text.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSValue *> * quadrilateralPoints;
```

<a id="Discussion"></a>

## Discussion

The array contains `N * 4` [NSValue](../../foundation/nsvalue.md) objects that use [pointValue](../../foundation/nsvalue/pointvalue.md) or [CGPointValue](../../foundation/nsvalue/cgpointvalue.md) to define `N` quadrilaterals in page-space coordinates, where `N` is the number of quad points. The order of the points is a Z pattern as follows:

- Upper-left point
- Upper-right point
- Lower-left point
- Lower-right point

The coordinates of each point are relative to the bound’s origin of the annotation.

## See Also

### Configuring Text Markup Annotations

- [markupType](markuptype.md): The markup type that the annotation displays, either highlight, strikethrough, underline, or redact.
- [PDFMarkupType](../pdfmarkuptype.md): The styles available for markup annotations in PDFKit.
