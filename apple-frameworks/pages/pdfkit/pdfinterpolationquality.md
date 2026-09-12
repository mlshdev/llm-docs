> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfinterpolationquality](https://developer.apple.com/documentation/pdfkit/pdfinterpolationquality)

# PDFInterpolationQuality (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 11.0+ · visionOS 1.0+

A wrapper for the specified interpolation quality.

## Declaration

```swift
enum PDFInterpolationQuality
```

## Topics

### Enumeration Cases

- [PDFInterpolationQuality.none](pdfinterpolationquality/none.md): The case where no interpolation quality is specified.
- [PDFInterpolationQuality.low](pdfinterpolationquality/low.md): The case specifying low interpolation quality.
- [PDFInterpolationQuality.high](pdfinterpolationquality/high.md): The case specifying high interpolation quality.

### Initializers

- [init(rawValue:)](pdfinterpolationquality/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Antialiasing

- [shouldAntiAlias](pdfview/shouldantialias.md): Deprecated. A Boolean value indicating whether the view is antialiased.
- [interpolationQuality](pdfview/interpolationquality.md): The interpolation quality for images drawn into the `PDFView` context.

# PDFInterpolationQuality (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A wrapper for the specified interpolation quality.

## Declaration

```objectivec
enum PDFInterpolationQuality : NSInteger;
```

## Topics

### Enumeration Cases

- [kPDFInterpolationQualityNone](pdfinterpolationquality/none.md): The case where no interpolation quality is specified.
- [kPDFInterpolationQualityLow](pdfinterpolationquality/low.md): The case specifying low interpolation quality.
- [kPDFInterpolationQualityHigh](pdfinterpolationquality/high.md): The case specifying high interpolation quality.

## See Also

### Antialiasing

- [shouldAntiAlias](pdfview/shouldantialias.md): Deprecated. A Boolean value indicating whether the view is antialiased.
- [interpolationQuality](pdfview/interpolationquality.md): The interpolation quality for images drawn into the `PDFView` context.
