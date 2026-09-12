> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagethresholdtozero/init(device:thresholdvalue:lineargraycolortransform:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagethresholdtozero/init(device:thresholdvalue:lineargraycolortransform:))

# init(device:thresholdValue:linearGrayColorTransform:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes the kernel.

## Declaration

```swift
init(device: any MTLDevice, thresholdValue: Float, linearGrayColorTransform transform: UnsafePointer<Float>?)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `thresholdValue`: The threshold value to use.
- `transform`: The color transform to use. This matrix is an array of 3 floats that defaults to the *BT.601/JPEG* standard: `{0.299f, 0.587f, 0.114f}`

<a id="return-value"></a>

## Return Value

An initialized kernel object.

# initWithDevice:thresholdValue:linearGrayColorTransform: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes the kernel.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device thresholdValue:(float) thresholdValue linearGrayColorTransform:(const float *) transform;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `thresholdValue`: The threshold value to use.
- `transform`: The color transform to use. This matrix is an array of 3 floats that defaults to the *BT.601/JPEG* standard: `{0.299f, 0.587f, 0.114f}`

<a id="return-value"></a>

## Return Value

An initialized kernel object.
