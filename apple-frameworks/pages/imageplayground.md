> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground](https://developer.apple.com/documentation/imageplayground)

# Image Playground

**Framework:** Image Playground  
**Kind:** Framework  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · visionOS 2.4+

Present a system interface to generate images based on descriptive information.

<a id="Overview"></a>

## Overview

Use the `ImagePlayground` framework to generate custom images using system-supported styles. To generate images, you specify a text description of what you want, an optional image, and the style you want the image to adopt. Use that information to present a system sheet from your SwiftUI view, or present a system view controller from your UIKit or AppKit interface. The system interface manages all interactions with the person, and upon success delivers an image for you to incorporate into your content. You can also use a programmatic interface to generate images without interactions.

## Topics

### SwiftUI presentation

- [imagePlaygroundSheet(isPresented:concept:sourceImage:onCompletion:onCancellation:)](https://developer.apple.com/documentation/swiftui/view/imageplaygroundsheet%28ispresented:concept:sourceimage:oncompletion:oncancellation:%29): Presents the system sheet to create an image using the specified string and optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImage:onCompletion:onCancellation:)](https://developer.apple.com/documentation/swiftui/view/imageplaygroundsheet%28ispresented:concepts:sourceimage:oncompletion:oncancellation:%29): Presents the system sheet to create an image using one or more concepts and an optional starting image.
- [imagePlaygroundSheet(isPresented:concepts:sourceImageURL:onCompletion:onCancellation:)](https://developer.apple.com/documentation/swiftui/view/imageplaygroundsheet%28ispresented:concepts:sourceimageurl:oncompletion:oncancellation:%29): Presents the system sheet to create an image using one or more concepts and an image URL.

### UIKit and AppKit presentation

- [ImagePlaygroundViewController](imageplayground/imageplaygroundviewcontroller.md): Displays a standard system interface to generate images from the provided input.

### Programmatic creation

- [ImageCreator](imageplayground/imagecreator.md): Deprecated. Generates images programmatically from the description and style information you specify.

### Platform support

- [ImagePlaygroundConcept](imageplayground/imageplaygroundconcept.md): Text elements that specify the content to include in the image.
- [ImagePlaygroundStyle](imageplayground/imageplaygroundstyle.md): Style options that determine the appearance of generated images.

### Structures

- [ImagePlaygroundOptions](imageplayground/imageplaygroundoptions.md): A type that stores the options that affect the image-generation process.
