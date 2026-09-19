> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(cgimage:orientation:pixelswide:pixelshigh:pixelformattype:options:)-8i6j0

# init(cgImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage w/ specified orientation

## Declaration

```swift
convenience init(cgImage: CGImage, orientation: CGImagePropertyOrientation, pixelsWide: Int, pixelsHigh: Int, pixelFormatType: OSType, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithCGImage:orientation:pixelsWide:pixelsHigh:pixelFormatType:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage w/ specified orientation

## Declaration

```objectivec
+ (instancetype) featureValueWithCGImage:(CGImageRef) cgImage orientation:(CGImagePropertyOrientation) orientation pixelsWide:(NSInteger) pixelsWide pixelsHigh:(NSInteger) pixelsHigh pixelFormatType:(OSType) pixelFormatType options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```
