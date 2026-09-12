> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametaldrawable/texture](https://developer.apple.com/documentation/quartzcore/cametaldrawable/texture)

# texture (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Metal texture object that contains the drawable’s contents.

## Declaration

```swift
var texture: any MTLTexture { get }
```

<a id="Discussion"></a>

## Discussion

Use this object to configure a [MTLRenderPipelineColorAttachmentDescriptor](../../metal/mtlrenderpipelinecolorattachmentdescriptor.md) object to render to the drawable object.

# texture (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Metal texture object that contains the drawable’s contents.

## Declaration

```objectivec
@property (readonly) id<MTLTexture> texture;
```

<a id="Discussion"></a>

## Discussion

Use this object to configure a [MTLRenderPipelineColorAttachmentDescriptor](../../metal/mtlrenderpipelinecolorattachmentdescriptor.md) object to render to the drawable object.
