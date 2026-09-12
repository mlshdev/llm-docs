> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(cgimage:constraint:options:)-30mu4](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(cgimage:constraint:options:)-30mu4)

# init(cgImage:constraint:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage, using the size and type information required by feature description (orientation is assumed to be kCGImagePropertyOrientationUp)

## Declaration

```swift
convenience init(cgImage: CGImage, constraint: MLImageConstraint, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithCGImage:constraint:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage, using the size and type information required by feature description (orientation is assumed to be kCGImagePropertyOrientationUp)

## Declaration

```objectivec
+ (instancetype) featureValueWithCGImage:(CGImageRef) cgImage constraint:(MLImageConstraint *) constraint options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```
