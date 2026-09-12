> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciblendkernel/saturation](https://developer.apple.com/documentation/coreimage/ciblendkernel/saturation)

# saturation (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A blend kernel that uses the luminance and hue values of the background image with the saturation of the foreground image.

## Declaration

```swift
class var saturation: CIBlendKernel { get }
```

<a id="Discussion"></a>

## Discussion

![The result of using the saturation blend kernel (background image is top left, foreground image is bottom left)](https://developer.apple.com/images/com.apple.coreimage/media-2926876@2x.png)

## See Also

### Builtin Blend Kernels

- [clear](clear.md): A blend kernel that returns a clear color.
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

# saturation (Objective-C)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A blend kernel that uses the luminance and hue values of the background image with the saturation of the foreground image.

## Declaration

```objectivec
@property (class, strong, readonly) CIBlendKernel * saturation;
```

<a id="Discussion"></a>

## Discussion

![The result of using the saturation blend kernel (background image is top left, foreground image is bottom left)](https://developer.apple.com/images/com.apple.coreimage/media-2926876@2x.png)

## See Also

### Builtin Blend Kernels

- [clear](clear.md): A blend kernel that returns a clear color.
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
