> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(reductionmode:offsets:strides:dilationrates:explicitpadding:boundarymode:paddingstyle:paddingconstant:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphstencilopdescriptor/init(reductionmode:offsets:strides:dilationrates:explicitpadding:boundarymode:paddingstyle:paddingconstant:))

# init(reductionMode:offsets:strides:dilationRates:explicitPadding:boundaryMode:paddingStyle:paddingConstant:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with given values.

## Declaration

```swift
convenience init?(reductionMode: MPSGraphReductionMode, offsets: [NSNumber], strides: [NSNumber], dilationRates: [NSNumber], explicitPadding: [NSNumber], boundaryMode: MPSGraphPaddingMode, paddingStyle: MPSGraphPaddingStyle, paddingConstant: Float)
```

## Parameters

- `reductionMode`: See `reductionMode` property.
- `offsets`: See `offsets` property.
- `strides`: See `strides` property.
- `dilationRates`: See `dilationRates` property.
- `explicitPadding`: See `explicitPadding` property.
- `boundaryMode`: See `boundaryMode` property.
- `paddingStyle`: See `paddingStyle` property.
- `paddingConstant`: See `paddingConstant` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object

# descriptorWithReductionMode:offsets:strides:dilationRates:explicitPadding:boundaryMode:paddingStyle:paddingConstant: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a stencil operation descriptor with given values.

## Declaration

```objectivec
+ (instancetype) descriptorWithReductionMode:(MPSGraphReductionMode) reductionMode offsets:(MPSShape *) offsets strides:(MPSShape *) strides dilationRates:(MPSShape *) dilationRates explicitPadding:(MPSShape *) explicitPadding boundaryMode:(MPSGraphPaddingMode) boundaryMode paddingStyle:(MPSGraphPaddingStyle) paddingStyle paddingConstant:(float) paddingConstant;
```

## Parameters

- `reductionMode`: See `reductionMode` property.
- `offsets`: See `offsets` property.
- `strides`: See `strides` property.
- `dilationRates`: See `dilationRates` property.
- `explicitPadding`: See `explicitPadding` property.
- `boundaryMode`: See `boundaryMode` property.
- `paddingStyle`: See `paddingStyle` property.
- `paddingConstant`: See `paddingConstant` property.

<a id="return-value"></a>

## Return Value

A valid MPSGraphStencilOpDescriptor object
