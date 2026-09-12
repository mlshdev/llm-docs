> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpipelinecolorattachmentdescriptor/blendingstate](https://developer.apple.com/documentation/metal/mtl4renderpipelinecolorattachmentdescriptor/blendingstate)

# blendingState (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configure the blend state for color attachments the pipeline state uses.

## Declaration

```swift
var blendingState: MTL4BlendState { get set }
```

<a id="discussion"></a>

## Discussion

This property’s default value is `MTL4BlendStateDisabled`.

# blendingState (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configure the blend state for color attachments the pipeline state uses.

## Declaration

```objectivec
@property (nonatomic) MTL4BlendState blendingState;
```

<a id="discussion"></a>

## Discussion

This property’s default value is `MTL4BlendStateDisabled`.
