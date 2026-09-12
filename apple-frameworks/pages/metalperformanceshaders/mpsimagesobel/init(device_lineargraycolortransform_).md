> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagesobel/init(device:lineargraycolortransform:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagesobel/init(device:lineargraycolortransform:))

# init(device:linearGrayColorTransform:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Sobel filter on a given device using a specific color transform.

## Declaration

```swift
init(device: any MTLDevice, linearGrayColorTransform transform: UnsafePointer<Float>)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `transform`: The color transform to use. This matrix is an array of 3 floats that describes the RGB-to-grayscale color transform:

  `Luminance = transform[0] * pixel.x + transform[1] * pixel.y + transform[2] * pixel.z`

<a id="return-value"></a>

## Return Value

An initialized Sobel filter object.

## See Also

### Methods

- [init(device:)](init%28device_%29.md): Initializes a Sobel filter on a given device using the default color transform.

# initWithDevice:linearGrayColorTransform: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Sobel filter on a given device using a specific color transform.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device linearGrayColorTransform:(const float *) transform;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `transform`: The color transform to use. This matrix is an array of 3 floats that describes the RGB-to-grayscale color transform:

  `Luminance = transform[0] * pixel.x + transform[1] * pixel.y + transform[2] * pixel.z`

<a id="return-value"></a>

## Return Value

An initialized Sobel filter object.

## See Also

### Methods

- [initWithDevice:](init%28device_%29.md): Initializes a Sobel filter on a given device using the default color transform.
