> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciblendkernel/clear](https://developer.apple.com/documentation/coreimage/ciblendkernel/clear)

# clear (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A blend kernel that returns a clear color.

## Declaration

```swift
class var clear: CIBlendKernel { get }
```

## See Also

### Builtin Blend Kernels

- [color](color.md): A blend kernel that uses the luminance values of the background with the hue and saturation values of the foreground image.
- [colorBurn](colorburn.md): A blend kernel that darkens the background image samples to reflect the foreground image samples.
- [colorDodge](colordodge.md): A blend kernel that brightens the background image samples to reflect the foreground image samples.
- [componentAdd](componentadd.md): A blend kernel that adds color components to achieve a brightening effect.
- [componentMax](componentmax.md): A blend kernel that creates an image using the maximum values of two input images.
- [componentMin](componentmin.md): A blend kernel that creates an image using the minimum values of two input images.
- [componentMultiply](componentmultiply.md): A blend kernel that multiplies the color components of its input images.
- [darken](darken.md): A blend kernel that creates an image using the darker values of two input images.
- [darkerColor](darkercolor.md): A blend kernel that creates an image using the darker color of two input images.
- [destination](destination.md): A blend kernel that returns the background input image.
- [destinationAtop](destinationatop.md): A blend kernel that places the background over the foreground and crops based on the visibility of the foreground.
- [destinationIn](destinationin.md): A blend kernel that places the background over the foreground and crops based on the visibility of both.
- [destinationOut](destinationout.md): A blend kernel that uses the background image to define what to take out of the foreground image.
- [destinationOver](destinationover.md): A blend kernel that places the background image over the input foreground image.
- [difference](difference.md): A blend kernel that creates an image using the difference between the background and foreground images.

# clear (Objective-C)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A blend kernel that returns a clear color.

## Declaration

```objectivec
@property (class, strong, readonly) CIBlendKernel * clear;
```

## See Also

### Builtin Blend Kernels

- [color](color.md): A blend kernel that uses the luminance values of the background with the hue and saturation values of the foreground image.
- [colorBurn](colorburn.md): A blend kernel that darkens the background image samples to reflect the foreground image samples.
- [colorDodge](colordodge.md): A blend kernel that brightens the background image samples to reflect the foreground image samples.
- [componentAdd](componentadd.md): A blend kernel that adds color components to achieve a brightening effect.
- [componentMax](componentmax.md): A blend kernel that creates an image using the maximum values of two input images.
- [componentMin](componentmin.md): A blend kernel that creates an image using the minimum values of two input images.
- [componentMultiply](componentmultiply.md): A blend kernel that multiplies the color components of its input images.
- [darken](darken.md): A blend kernel that creates an image using the darker values of two input images.
- [darkerColor](darkercolor.md): A blend kernel that creates an image using the darker color of two input images.
- [destination](destination.md): A blend kernel that returns the background input image.
- [destinationAtop](destinationatop.md): A blend kernel that places the background over the foreground and crops based on the visibility of the foreground.
- [destinationIn](destinationin.md): A blend kernel that places the background over the foreground and crops based on the visibility of both.
- [destinationOut](destinationout.md): A blend kernel that uses the background image to define what to take out of the foreground image.
- [destinationOver](destinationover.md): A blend kernel that places the background image over the input foreground image.
- [difference](difference.md): A blend kernel that creates an image using the difference between the background and foreground images.
