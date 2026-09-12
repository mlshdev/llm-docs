> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkview/currentmtl4renderpassdescriptor](https://developer.apple.com/documentation/metalkit/mtkview/currentmtl4renderpassdescriptor)

# currentMTL4RenderPassDescriptor (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var currentMTL4RenderPassDescriptor: MTL4RenderPassDescriptor? { get }
```

<a id="discussion"></a>

## Discussion

A render pass descriptor generated from the currentDrawable’s texture and the view’s depth, stencil, and sample buffers and clear values.

This is a convience property.  The view does not use this descriptor and there is no requirement for an app to use this descriptor.

# currentMTL4RenderPassDescriptor (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MTL4RenderPassDescriptor * currentMTL4RenderPassDescriptor;
```

<a id="discussion"></a>

## Discussion

A render pass descriptor generated from the currentDrawable’s texture and the view’s depth, stencil, and sample buffers and clear values.

This is a convience property.  The view does not use this descriptor and there is no requirement for an app to use this descriptor.
