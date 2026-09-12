> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/personalization-swift.enum](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/personalization-swift.enum)

# ImagePlaygroundOptions.Personalization

**Framework:** Image Playground  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Options for enabling and disabling personalization features when generating images.

## Declaration

```swift
enum Personalization
```

<a id="overview"></a>

## Overview

The SwiftUI sheets, [ImagePlaygroundViewController](../imageplaygroundviewcontroller.md) type, and [ImageCreator](../imagecreator.md) type offer ways to personalize the images you create using an existing photo or other information. When configuring one of those types, create an instance of [ImagePlaygroundOptions](../imageplaygroundoptions.md) and configure its [personalization](personalization-swift.property.md) property with your personalization preferences.

Personalization tells the system how to craft the appearance of people in the images it creates. The system can derive appearance choices for people from additional sources, such as from photos in the person’s Photos library. If you disable personalization, the system uses only the prompts and starting image you provide to generate the images.

## Topics

### Enumeration Cases

- [ImagePlaygroundOptions.Personalization.automatic](personalization-swift.enum/automatic.md): An option to choose the most appropriate personalization behavior.
- [ImagePlaygroundOptions.Personalization.disabled](personalization-swift.enum/disabled.md): An option to disable personalization features during image generation.
- [ImagePlaygroundOptions.Personalization.enabled](personalization-swift.enum/enabled.md): An option to enable personalization features during image generation.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
