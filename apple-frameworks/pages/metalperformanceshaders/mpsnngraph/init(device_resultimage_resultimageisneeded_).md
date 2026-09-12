> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngraph/init(device:resultimage:resultimageisneeded:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngraph/init(device:resultimage:resultimageisneeded:))

# init(device:resultImage:resultImageIsNeeded:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init?(device: any MTLDevice, resultImage: MPSNNImageNode, resultImageIsNeeded resultIsNeeded: Bool)
```

## See Also

### Initializers

- [init(coder:device:)](init%28coder_device_%29.md)
- [init(device:resultImage:)](init%28device_resultimage_%29.md): Deprecated.
- [init(device:resultImages:resultsAreNeeded:)](init%28device_resultimages_resultsareneeded_%29.md)

# initWithDevice:resultImage:resultImageIsNeeded: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device resultImage:(MPSNNImageNode *) resultImage resultImageIsNeeded:(BOOL) resultIsNeeded;
```

## See Also

### Initializers

- [initWithCoder:device:](init%28coder_device_%29.md)
- [initWithDevice:resultImage:](init%28device_resultimage_%29.md): Deprecated.
- [initWithDevice:resultImages:resultsAreNeeded:](init%28device_resultimages_resultsareneeded_%29.md)
