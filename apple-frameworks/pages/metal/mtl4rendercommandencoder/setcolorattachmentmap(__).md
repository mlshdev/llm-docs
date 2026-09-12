> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setcolorattachmentmap(_:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setcolorattachmentmap(_:))

# setColorAttachmentMap(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the mapping from logical shader color output to physical render pass color attachments.

## Declaration

```swift
func setColorAttachmentMap(_ mapping: MTLLogicalToPhysicalColorAttachmentMap?)
```

## Parameters

- `mapping`: Mapping from logical shader outputs to physical outputs.

<a id="discussion"></a>

## Discussion

Use this method to define how the physical color attachments you specify via [colorAttachments](../mtl4renderpassdescriptor/colorattachments.md) map to the logical color output the fragment shader writes to.

To use this feature, make sure to set [supportColorAttachmentMapping](../mtl4renderpassdescriptor/supportcolorattachmentmapping.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring blend behavior

- [setBlendColor(red:green:blue:alpha:)](setblendcolor%28red_green_blue_alpha_%29.md): Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.

# setColorAttachmentMap: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the mapping from logical shader color output to physical render pass color attachments.

## Declaration

```objectivec
- (void) setColorAttachmentMap:(MTLLogicalToPhysicalColorAttachmentMap *) mapping;
```

## Parameters

- `mapping`: Mapping from logical shader outputs to physical outputs.

<a id="discussion"></a>

## Discussion

Use this method to define how the physical color attachments you specify via [colorAttachments](../mtl4renderpassdescriptor/colorattachments.md) map to the logical color output the fragment shader writes to.

To use this feature, make sure to set [supportColorAttachmentMapping](../mtl4renderpassdescriptor/supportcolorattachmentmapping.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring blend behavior

- [setBlendColorRed:green:blue:alpha:](setblendcolor%28red_green_blue_alpha_%29.md): Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.
