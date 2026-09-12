> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnupsamplingbilinear/init(device:integerscalefactorx:integerscalefactory:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnupsamplingbilinear/init(device:integerscalefactorx:integerscalefactory:))

# init(device:integerScaleFactorX:integerScaleFactorY:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a bilinear spatial upsampling filter.

## Declaration

```swift
convenience init(device: any MTLDevice, integerScaleFactorX: Int, integerScaleFactorY: Int)
```

## See Also

### Initializers

- [init(device:integerScaleFactorX:integerScaleFactorY:alignCorners:)](init%28device_integerscalefactorx_integerscalefactory_aligncorners_%29.md)

# initWithDevice:integerScaleFactorX:integerScaleFactorY: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a bilinear spatial upsampling filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device integerScaleFactorX:(NSUInteger) integerScaleFactorX integerScaleFactorY:(NSUInteger) integerScaleFactorY;
```

## See Also

### Initializers

- [initWithDevice:integerScaleFactorX:integerScaleFactorY:alignCorners:](init%28device_integerscalefactorx_integerscalefactory_aligncorners_%29.md)
