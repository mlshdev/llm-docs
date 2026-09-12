> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/init(kernelsizes:paddingstyle:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/init(kernelsizes:paddingstyle:))

# init(kernelSizes:paddingStyle:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 4D pooling descriptor with default values.

## Declaration

```swift
convenience init?(kernelSizes: [NSNumber], paddingStyle: MPSGraphPaddingStyle)
```

## Parameters

- `kernelSizes`: See `kernelSizes` property.
- `paddingStyle`: See `paddingStyle` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.

# descriptorWithKernelSizes:paddingStyle: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a 4D pooling descriptor with default values.

## Declaration

```objectivec
+ (instancetype) descriptorWithKernelSizes:(NSArray<NSNumber *> *) kernelSizes paddingStyle:(MPSGraphPaddingStyle) paddingStyle;
```

## Parameters

- `kernelSizes`: See `kernelSizes` property.
- `paddingStyle`: See `paddingStyle` property.

<a id="return-value"></a>

## Return Value

The descriptor on autoreleasepool.
