> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/init(cgimage:orientation:constraint:options:)-1djlw](https://developer.apple.com/documentation/coreml/mlfeaturevalue/init(cgimage:orientation:constraint:options:)-1djlw)

# init(cgImage:orientation:constraint:options:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage w/ specified orientation, using the size and type information required by feature description

## Declaration

```swift
convenience init(cgImage: CGImage, orientation: CGImagePropertyOrientation, constraint: MLImageConstraint, options: [MLFeatureValue.ImageOption : Any]? = nil) throws
```

# featureValueWithCGImage:orientation:constraint:options:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Construct image feature value from CGImage w/ specified orientation, using the size and type information required by feature description

## Declaration

```objectivec
+ (instancetype) featureValueWithCGImage:(CGImageRef) cgImage orientation:(CGImagePropertyOrientation) orientation constraint:(MLImageConstraint *) constraint options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```
