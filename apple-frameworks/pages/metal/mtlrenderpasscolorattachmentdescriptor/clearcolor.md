> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpasscolorattachmentdescriptor/clearcolor](https://developer.apple.com/documentation/metal/mtlrenderpasscolorattachmentdescriptor/clearcolor)

# clearColor (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The color to use when clearing the color attachment.

## Declaration

```swift
var clearColor: MTLClearColor { get set }
```

<a id="discussion"></a>

## Discussion

If the [loadAction](../mtlrenderpassattachmentdescriptor/loadaction.md) property of the attachment is set to [MTLLoadAction.clear](../mtlloadaction/clear.md), then at the start of a render pass, the GPU fills the texture with the value stored in the [clearColor](clearcolor.md) property. Otherwise, the GPU ignores the [clearColor](clearcolor.md) property.

The [clearColor](clearcolor.md) property represents a set of RGBA components. The default value is `(0.0, 0.0, 0.0, 1.0)` (black). Use the [MTLClearColorMake(\_:\_:\_:\_:)](../mtlclearcolormake%28________%29.md) function to construct an [MTLClearColor](../mtlclearcolor.md) value.

## See Also

### Specifying clearing value

- [MTLClearColorMake(\_:\_:\_:\_:)](../mtlclearcolormake%28________%29.md): Returns a color value used to clear a color attachment.

# clearColor (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The color to use when clearing the color attachment.

## Declaration

```objectivec
@property (nonatomic) MTLClearColor clearColor;
```

<a id="discussion"></a>

## Discussion

If the [loadAction](../mtlrenderpassattachmentdescriptor/loadaction.md) property of the attachment is set to [MTLLoadActionClear](../mtlloadaction/clear.md), then at the start of a render pass, the GPU fills the texture with the value stored in the [clearColor](clearcolor.md) property. Otherwise, the GPU ignores the [clearColor](clearcolor.md) property.

The [clearColor](clearcolor.md) property represents a set of RGBA components. The default value is `(0.0, 0.0, 0.0, 1.0)` (black). Use the [MTLClearColorMake](../mtlclearcolormake%28________%29.md) function to construct an [MTLClearColor](../mtlclearcolor.md) value.

## See Also

### Specifying clearing value

- [MTLClearColorMake](../mtlclearcolormake%28________%29.md): Returns a color value used to clear a color attachment.
