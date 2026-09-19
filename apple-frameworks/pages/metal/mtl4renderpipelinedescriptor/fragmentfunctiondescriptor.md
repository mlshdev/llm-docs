> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4renderpipelinedescriptor/fragmentfunctiondescriptor

# fragmentFunctionDescriptor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns the shader function that this pipeline executes for each fragment.

## Declaration

```swift
@NSCopying var fragmentFunctionDescriptor: MTL4FunctionDescriptor? { get set }
```

<a id="discussion"></a>

## Discussion

When you don’t specify a fragment function, you need to disable rasterization by setting property [isRasterizationEnabled](israsterizationenabled.md) to false.

# fragmentFunctionDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns the shader function that this pipeline executes for each fragment.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) MTL4FunctionDescriptor * fragmentFunctionDescriptor;
```

<a id="discussion"></a>

## Discussion

When you don’t specify a fragment function, you need to disable rasterization by setting property [rasterizationEnabled](israsterizationenabled.md) to false.
