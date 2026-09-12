> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imagecreator](https://developer.apple.com/documentation/imageplayground/imagecreator)

# ImageCreator

**Framework:** Image Playground  
**Kind:** Class  
**Availability:** iOS 18.4+ (deprecated in 27.0) · iPadOS 18.4+ (deprecated in 27.0) · Mac Catalyst 18.4+ (deprecated in 27.0) · macOS 15.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

Generates images programmatically from the description and style information you specify.

> Use ImagePlaygroundViewController or imagePlaygroundSheet.

## Declaration

```swift
final class ImageCreator
```

<a id="overview"></a>

## Overview

Use an `ImageCreator` object to generate images programmatically from your app on devices that support the capability. You provide a description of the image content, as a text string or as a combination of text and images. The system’s generative models use that information to generate one or more images and return them to your code.

Create an `ImageCreator` object and use its [images(for:style:limit:)](imagecreator/images%28for_style_limit_%29.md) method to start the image generation process. Image generation occurs asynchronously, delivering results back to your code using an [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) object.

## Topics

### Creating the object

- [init()](imagecreator/init%28%29.md): Deprecated. Creates a new image creator object for you to use in your app.

### Generating images

- [images(for:style:limit:)](imagecreator/images%28for_style_limit_%29.md): Deprecated. Starts the creation of images based on the description and style information you provide.
- [availableStyles](imagecreator/availablestyles.md): Deprecated. The set of styles you can apply to the images you create.
- [ImageCreator.CreatedImage](imagecreator/createdimage.md): Deprecated. A structure that stores a programmatically generated image.
- [ImageCreator.Error](imagecreator/error.md): Deprecated. Errors that can occur during the image generation process.

### Instance Methods

- [images(for:style:options:limit:)](imagecreator/images%28for_style_options_limit_%29.md): Deprecated. Creates one or more images from the provided description and style information and returns the results asynchronously.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
