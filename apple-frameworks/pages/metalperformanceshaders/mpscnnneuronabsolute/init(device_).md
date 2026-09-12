> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnneuronabsolute/init(device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnneuronabsolute/init(device:))

# init(device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 10.0+ (deprecated in 12.0) · macOS 10.13+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes an absolute neuron filter.

## Declaration

```swift
init(device: any MTLDevice)
```

## Parameters

- `device`: The device the filter will run on.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNNeuronAbsolute](../mpscnnneuronabsolute.md) object or `nil`, if failure.

# initWithDevice: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · macOS 10.13+ (deprecated in 10.14) · tvOS 10.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes an absolute neuron filter.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The device the filter will run on.

<a id="return-value"></a>

## Return Value

A valid [MPSCNNNeuronAbsolute](../mpscnnneuronabsolute.md) object or `nil`, if failure.
