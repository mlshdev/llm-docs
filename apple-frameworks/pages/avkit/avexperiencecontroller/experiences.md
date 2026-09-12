> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experiences](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experiences)

# AVExperienceController.Experiences

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure that represents a collection of experiences to use with an experience controller.

## Declaration

```swift
@preconcurrency struct Experiences
```

<a id="overview"></a>

## Overview

When creating, choose between using [only(\_:)](experiences/only%28__%29.md) or [recommended(excluding:including:)](experiences/recommended%28excluding_including_%29.md). Use [only(\_:)](experiences/only%28__%29.md) to specify the list of supported experiences. Use [recommended(excluding:including:)](experiences/recommended%28excluding_including_%29.md) to include the default set of experiences appropriate for a given platform.

Experiences can be explicitly included or excluded from this list with the corresponding parameters.

## Topics

### Defining experiences

- [only(\_:)](experiences/only%28__%29.md): Returns a set of experiences for the provided list.
- [recommended(excluding:including:)](experiences/recommended%28excluding_including_%29.md): Returns the recommended set of experiences.

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Configuring the experience

- [allowedExperiences](allowedexperiences.md): The set of experiences the app supports.
- [availableExperiences](availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [experience](experience-swift.property.md): The current experience.
- [AVExperienceController.Experience](experience-swift.enum.md): The types of experiences the system supports.
- [configuration](configuration-swift.property.md): The configuration options per experience.
- [AVExperienceController.Configuration](configuration-swift.struct.md): Options that configure each experience.
