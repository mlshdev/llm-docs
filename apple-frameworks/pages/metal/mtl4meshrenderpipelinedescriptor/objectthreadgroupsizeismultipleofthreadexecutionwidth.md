> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/objectthreadgroupsizeismultipleofthreadexecutionwidth](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/objectthreadgroupsizeismultipleofthreadexecutionwidth)

# objectThreadgroupSizeIsMultipleOfThreadExecutionWidth (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a guarantee to Metal regarding the number of threadgroup threads for the object stage of a pipeline you create from this descriptor.

## Declaration

```swift
var objectThreadgroupSizeIsMultipleOfThreadExecutionWidth: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If you set this property to [true](https://developer.apple.com/documentation/swift/true), you state to Metal that when you use a mesh render pipeline you create from this descriptor, the number of threadgroup threads you dispatch for the object stage is a multiple of its [objectThreadExecutionWidth](../mtlrenderpipelinestate/objectthreadexecutionwidth.md). The compiler’s optimizer can use this guarantee to generate more efficient code.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).

# objectThreadgroupSizeIsMultipleOfThreadExecutionWidth (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides a guarantee to Metal regarding the number of threadgroup threads for the object stage of a pipeline you create from this descriptor.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL objectThreadgroupSizeIsMultipleOfThreadExecutionWidth;
```

<a id="discussion"></a>

## Discussion

If you set this property to [true](https://developer.apple.com/documentation/swift/true), you state to Metal that when you use a mesh render pipeline you create from this descriptor, the number of threadgroup threads you dispatch for the object stage is a multiple of its [objectThreadExecutionWidth](../mtlrenderpipelinestate/objectthreadexecutionwidth.md). The compiler’s optimizer can use this guarantee to generate more efficient code.

This property’s default value is [false](https://developer.apple.com/documentation/swift/false).
