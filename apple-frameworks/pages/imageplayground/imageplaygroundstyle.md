> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundstyle](https://developer.apple.com/documentation/imageplayground/imageplaygroundstyle)

# ImagePlaygroundStyle

**Framework:** Image Playground  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Style options that determine the appearance of generated images.

## Declaration

```swift
struct ImagePlaygroundStyle
```

<a id="overview"></a>

## Overview

When you create images programmatically, you can ask the system to create images in a particular style. The generative model takes the requested style option and applies it to the content it generates.

## Topics

### Getting the style options

- [animation](imageplaygroundstyle/animation.md): An option that yields animated images.
- [illustration](imageplaygroundstyle/illustration.md): An option that yields images in a 2D cartoon style.
- [sketch](imageplaygroundstyle/sketch.md): An option that yields images in the style of a hand-drawn sketch.
- [all](imageplaygroundstyle/all.md): An option that allows the creation of images in any style.

### Getting the style identifier

- [id](imageplaygroundstyle/id.md): A text-based description of the style option.

### Type Properties

- [any](imageplaygroundstyle/any.md): An option that yields images in a style inferred from the prompt.
- [emoji](imageplaygroundstyle/emoji.md): An option that yields images in an emoji style.
- [externalProvider](imageplaygroundstyle/externalprovider.md): An option that yields images in a style provided by an external provider

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Platform support

- [ImagePlaygroundConcept](imageplaygroundconcept.md): Text elements that specify the content to include in the image.
