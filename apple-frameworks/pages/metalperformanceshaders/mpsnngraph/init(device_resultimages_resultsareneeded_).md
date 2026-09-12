> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngraph/init(device:resultimages:resultsareneeded:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngraph/init(device:resultimages:resultsareneeded:))

# init(device:resultImages:resultsAreNeeded:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
init?(device: any MTLDevice, resultImages: [MPSNNImageNode], resultsAreNeeded areResultsNeeded: UnsafeMutablePointer<ObjCBool>?)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md)
- [init(device:resultImage:)](init%28device_resultimage_%29.md): Deprecated.
- [init(device:resultImage:resultImageIsNeeded:)](init%28device_resultimage_resultimageisneeded_%29.md)

# initWithDevice:resultImages:resultsAreNeeded: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device resultImages:(NSArray<MPSNNImageNode *> *) resultImages resultsAreNeeded:(BOOL *) areResultsNeeded;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md)
- [initWithDevice:resultImage:](init%28device_resultimage_%29.md): Deprecated.
- [initWithDevice:resultImage:resultImageIsNeeded:](init%28device_resultimage_resultimageisneeded_%29.md)
