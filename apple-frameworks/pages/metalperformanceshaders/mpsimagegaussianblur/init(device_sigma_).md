> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagegaussianblur/init(device:sigma:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagegaussianblur/init(device:sigma:))

# init(device:sigma:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Gaussian blur filter.

## Declaration

```swift
init(device: any MTLDevice, sigma: Float)
```

## Parameters

- `device`: The Metal device the filter will run on.
- `sigma`: The standard deviation of the gaussian blur filter.

  Gaussian weight `w`, centered at `0`, at integer grid `i`, is given as:

  `w(i) = 1/sqrt(2*pi*sigma) * exp(-i^2/2*sigma^2)`

  If we take cut off at 1% of `w(0)` (max weight) beyond which weights are considered `0`, we have `ceil(sqrt(-log(0.01)*2)*sigma) ~ ceil(3.7*sigma)` as the rough estimate of the filter width.

<a id="return-value"></a>

## Return Value

An initialized Gaussian blur filter object.

# initWithDevice:sigma: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a Gaussian blur filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device sigma:(float) sigma;
```

## Parameters

- `device`: The Metal device the filter will run on.
- `sigma`: The standard deviation of the gaussian blur filter.

  Gaussian weight `w`, centered at `0`, at integer grid `i`, is given as:

  `w(i) = 1/sqrt(2*pi*sigma) * exp(-i^2/2*sigma^2)`

  If we take cut off at 1% of `w(0)` (max weight) beyond which weights are considered `0`, we have `ceil(sqrt(-log(0.01)*2)*sigma) ~ ceil(3.7*sigma)` as the rough estimate of the filter width.

<a id="return-value"></a>

## Return Value

An initialized Gaussian blur filter object.
