> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneurontanh/init(device:a:b:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneurontanh/init(device:a:b:))

# init(device:a:b:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 10.0+ (deprecated in 12.0) · macOS 10.13+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a hyperbolic tangent neuron filter.

## Declaration

```swift
init(device: any MTLDevice, a: Float, b: Float)
```

## Parameters

- `device`: The device the filter will run on.
- `a`: The “a” variable of the filter function.
- `b`: The “b” variable of the filter function.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNNeuronTanH](../mpscnnneurontanh.md) object or `nil`, if failure.

# initWithDevice:a:b: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · macOS 10.13+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a hyperbolic tangent neuron filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device a:(float) a b:(float) b;
```

## Parameters

- `device`: The device the filter will run on.
- `a`: The “a” variable of the filter function.
- `b`: The “b” variable of the filter function.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNNeuronTanH](../mpscnnneurontanh.md) object or `nil`, if failure.
