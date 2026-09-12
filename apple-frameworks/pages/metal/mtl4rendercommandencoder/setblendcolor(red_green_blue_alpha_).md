> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/setblendcolor(red:green:blue:alpha:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/setblendcolor(red:green:blue:alpha:))

# setBlendColor(red:green:blue:alpha:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.

## Declaration

```swift
func setBlendColor(red: Float, green: Float, blue: Float, alpha: Float)
```

## Parameters

- `red`: A value for the red component for the blend color constant.
- `green`: A value for the green component for the blend color constant.
- `blue`: A value for the blue component for the blend color constant.
- `alpha`: A value for the alpha component for the blend color constant.

## See Also

### Configuring blend behavior

- [setColorAttachmentMap(\_:)](setcolorattachmentmap%28__%29.md): Sets the mapping from logical shader color output to physical render pass color attachments.

# setBlendColorRed:green:blue:alpha: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.

## Declaration

```objectivec
- (void) setBlendColorRed:(float) red green:(float) green blue:(float) blue alpha:(float) alpha;
```

## Parameters

- `red`: A value for the red component for the blend color constant.
- `green`: A value for the green component for the blend color constant.
- `blue`: A value for the blue component for the blend color constant.
- `alpha`: A value for the alpha component for the blend color constant.

## See Also

### Configuring blend behavior

- [setColorAttachmentMap:](setcolorattachmentmap%28__%29.md): Sets the mapping from logical shader color output to physical render pass color attachments.
