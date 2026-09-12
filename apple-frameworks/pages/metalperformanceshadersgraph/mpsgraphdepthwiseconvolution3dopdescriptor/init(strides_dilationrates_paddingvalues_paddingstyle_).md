> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor/init(strides:dilationrates:paddingvalues:paddingstyle:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor/init(strides:dilationrates:paddingvalues:paddingstyle:))

# init(strides:dilationRates:paddingValues:paddingStyle:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 3D depthwise convolution descriptor with given values.

## Declaration

```swift
convenience init?(strides: [NSNumber], dilationRates: [NSNumber], paddingValues: [NSNumber], paddingStyle: MPSGraphPaddingStyle)
```

## Parameters

- `strides`: See `strides` property.
- `dilationRates`: See `dilationRates` property.
- `paddingValues`: See `paddingValues` property.
- `paddingStyle`: See `paddingStyle` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.

# descriptorWithStrides:dilationRates:paddingValues:paddingStyle: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 3D depthwise convolution descriptor with given values.

## Declaration

```objectivec
+ (instancetype) descriptorWithStrides:(NSArray<NSNumber *> *) strides dilationRates:(NSArray<NSNumber *> *) dilationRates paddingValues:(NSArray<NSNumber *> *) paddingValues paddingStyle:(MPSGraphPaddingStyle) paddingStyle;
```

## Parameters

- `strides`: See `strides` property.
- `dilationRates`: See `dilationRates` property.
- `paddingValues`: See `paddingValues` property.
- `paddingStyle`: See `paddingStyle` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.
