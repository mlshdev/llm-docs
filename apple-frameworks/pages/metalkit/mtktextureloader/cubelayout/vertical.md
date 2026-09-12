> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/cubelayout/vertical](https://developer.apple.com/documentation/metalkit/mtktextureloader/cubelayout/vertical)

# vertical (Swift)

**Framework:** MetalKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies that the source 2D image is a vertical arrangement of six cube faces.

## Declaration

```swift
static let vertical: MTKTextureLoader.CubeLayout
```

<a id="Discussion"></a>

## Discussion

The texture loader creates a cube texture from six faces arranged vertically within a single 2D image. The image height must be six times the image width, with faces arranged in the following order from top to bottom: +X, -X, +Y, -Y, +Z, -Z.

# MTKTextureLoaderCubeLayoutVertical (Objective-C)

**Framework:** MetalKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Specifies that the source 2D image is a vertical arrangement of six cube faces.

## Declaration

```objectivec
extern MTKTextureLoaderCubeLayout const MTKTextureLoaderCubeLayoutVertical;
```

<a id="Discussion"></a>

## Discussion

The texture loader creates a cube texture from six faces arranged vertically within a single 2D image. The image height must be six times the image width, with faces arranged in the following order from top to bottom: +X, -X, +Y, -Y, +Z, -Z.
