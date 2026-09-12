> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4meshrenderpipelinedescriptor/israsterizationenabled](https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/israsterizationenabled)

# isRasterizationEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines whether the pipeline rasterizes primitives.

## Declaration

```swift
var isRasterizationEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, this value is [true](https://developer.apple.com/documentation/swift/true), specifying that this pipeline rasterizes primitives. Set this property to [false](https://developer.apple.com/documentation/swift/false) when you don’t provide a fragment shader function via function [fragmentFunctionDescriptor](fragmentfunctiondescriptor.md).

# rasterizationEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines whether the pipeline rasterizes primitives.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isRasterizationEnabled) BOOL rasterizationEnabled;
```

<a id="discussion"></a>

## Discussion

By default, this value is [true](https://developer.apple.com/documentation/swift/true), specifying that this pipeline rasterizes primitives. Set this property to [false](https://developer.apple.com/documentation/swift/false) when you don’t provide a fragment shader function via function [fragmentFunctionDescriptor](fragmentfunctiondescriptor.md).
