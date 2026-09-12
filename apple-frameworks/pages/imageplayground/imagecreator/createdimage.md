> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imagecreator/createdimage](https://developer.apple.com/documentation/imageplayground/imagecreator/createdimage)

# ImageCreator.CreatedImage

**Framework:** Image Playground  
**Kind:** Structure  
**Availability:** iOS 18.4+ (deprecated in 27.0) · iPadOS 18.4+ (deprecated in 27.0) · Mac Catalyst 18.4+ (deprecated in 27.0) · macOS 15.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

A structure that stores a programmatically generated image.

## Declaration

```swift
struct CreatedImage
```

<a id="overview"></a>

## Overview

You receive `CreatedImage` structures from an `ImageCreator` object when you ask that object to generate images for you. You cannot create instances of this structure yourself.

## Topics

### Getting the image

- [cgImage](createdimage/cgimage.md): Deprecated. The programmatically generated image.

## See Also

### Generating images

- [images(for:style:limit:)](images%28for_style_limit_%29.md): Deprecated. Starts the creation of images based on the description and style information you provide.
- [availableStyles](availablestyles.md): Deprecated. The set of styles you can apply to the images you create.
- [ImageCreator.Error](error.md): Deprecated. Errors that can occur during the image generation process.
