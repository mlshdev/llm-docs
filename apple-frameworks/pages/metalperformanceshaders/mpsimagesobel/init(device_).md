> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagesobel/init(device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagesobel/init(device:))

# init(device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Sobel filter on a given device using the default color transform.

## Declaration

```swift
convenience init(device: any MTLDevice)
```

## Parameters

- `device`: The Metal device the filter will run on.

<a id="return-value"></a>

## Return Value

An initialized Sobel filter object.

<a id="Discussion"></a>

## Discussion

The default color transform matrix is an array of 3 floats set to the *BT.601/JPEG* standard: `{0.299f, 0.587f, 0.114f}`.

## See Also

### Methods

- [init(device:linearGrayColorTransform:)](init%28device_lineargraycolortransform_%29.md): Initializes a Sobel filter on a given device using a specific color transform.

# initWithDevice: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Sobel filter on a given device using the default color transform.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device the filter will run on.

<a id="return-value"></a>

## Return Value

An initialized Sobel filter object.

<a id="Discussion"></a>

## Discussion

The default color transform matrix is an array of 3 floats set to the *BT.601/JPEG* standard: `{0.299f, 0.587f, 0.114f}`.

## See Also

### Methods

- [initWithDevice:linearGrayColorTransform:](init%28device_lineargraycolortransform_%29.md): Initializes a Sobel filter on a given device using a specific color transform.
