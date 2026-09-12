> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/writemask](https://developer.apple.com/documentation/metal/mtlrenderpipelinecolorattachmentdescriptor/writemask)

# writeMask (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A bitmask that restricts which color channels are written into the texture.

## Declaration

```swift
var writeMask: MTLColorWriteMask { get set }
```

<a id="discussion"></a>

## Discussion

The default value of `writeMask` is all ones, [all](../mtlcolorwritemask/all.md), which allows all color channels to be blended. The `MTLColorWriteMask` values `MTLColorWriteMaskRed`, `MTLColorWriteMaskGreen`, `MTLColorWriteMaskBlue`, and `MTLColorWriteMaskAlpha` limit blending to one color channel, and these values can be bitwise combined. `MTLColorWriteMaskNone` does not allow any color channels to be blended.

## See Also

### Configuring render pipeline states

- [pixelFormat](pixelformat.md): The pixel format of the color attachment’s texture.
- [MTLColorWriteMask](../mtlcolorwritemask.md): Values used to specify a mask to permit or restrict writing to color channels of a color value.

# writeMask (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A bitmask that restricts which color channels are written into the texture.

## Declaration

```objectivec
@property (nonatomic) MTLColorWriteMask writeMask;
```

<a id="discussion"></a>

## Discussion

The default value of `writeMask` is all ones, [MTLColorWriteMaskAll](../mtlcolorwritemask/all.md), which allows all color channels to be blended. The `MTLColorWriteMask` values `MTLColorWriteMaskRed`, `MTLColorWriteMaskGreen`, `MTLColorWriteMaskBlue`, and `MTLColorWriteMaskAlpha` limit blending to one color channel, and these values can be bitwise combined. `MTLColorWriteMaskNone` does not allow any color channels to be blended.

## See Also

### Configuring render pipeline states

- [pixelFormat](pixelformat.md): The pixel format of the color attachment’s texture.
- [MTLColorWriteMask](../mtlcolorwritemask.md): Values used to specify a mask to permit or restrict writing to color channels of a color value.
