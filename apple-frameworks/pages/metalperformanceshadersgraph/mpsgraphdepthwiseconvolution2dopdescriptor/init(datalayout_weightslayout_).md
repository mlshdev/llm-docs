> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution2dopdescriptor/init(datalayout:weightslayout:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution2dopdescriptor/init(datalayout:weightslayout:))

# init(dataLayout:weightsLayout:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D-depthwise convolution descriptor with given properties and default values.

## Declaration

```swift
convenience init?(dataLayout: MPSGraphTensorNamedDataLayout, weightsLayout: MPSGraphTensorNamedDataLayout)
```

## Parameters

- `dataLayout`: See `dataLayout` property.
- `weightsLayout`: See `weightsLayout` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.

# descriptorWithDataLayout:weightsLayout: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a 2D-depthwise convolution descriptor with given properties and default values.

## Declaration

```objectivec
+ (instancetype) descriptorWithDataLayout:(MPSGraphTensorNamedDataLayout) dataLayout weightsLayout:(MPSGraphTensorNamedDataLayout) weightsLayout;
```

## Parameters

- `dataLayout`: See `dataLayout` property.
- `weightsLayout`: See `weightsLayout` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.
