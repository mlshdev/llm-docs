> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderencoderoptions/suspending](https://developer.apple.com/documentation/metal/mtl4renderencoderoptions/suspending)

# suspending (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the render pass as *suspending*.

## Declaration

```swift
static var suspending: MTL4RenderEncoderOptions { get }
```

<a id="discussion"></a>

## Discussion

Pass this option to [makeRenderCommandEncoder(descriptor:options:)](../mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md) to specify that Metal can stitch the work a render command encoder encodes with a subsequent “resuming” render command encoder.

# MTL4RenderEncoderOptionSuspending (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the render pass as *suspending*.

## Declaration

```objectivec
MTL4RenderEncoderOptionSuspending
```

<a id="discussion"></a>

## Discussion

Pass this option to [renderCommandEncoderWithDescriptor:options:](../mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md) to specify that Metal can stitch the work a render command encoder encodes with a subsequent “resuming” render command encoder.
