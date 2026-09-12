> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagecanny/init(device:lineartograyscaletransform:sigma:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagecanny/init(device:lineartograyscaletransform:sigma:))

# init(device:linearToGrayScaleTransform:sigma:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```swift
init(device: any MTLDevice, linearToGrayScaleTransform transform: UnsafePointer<Float>, sigma: Float)
```

# initWithDevice:linearToGrayScaleTransform:sigma: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device linearToGrayScaleTransform:(const float *) transform sigma:(const float) sigma;
```
