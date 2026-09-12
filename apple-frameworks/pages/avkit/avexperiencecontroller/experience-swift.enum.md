> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experience-swift.enum](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experience-swift.enum)

# AVExperienceController.Experience

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

The types of experiences the system supports.

## Declaration

```swift
@preconcurrency enum Experience
```

## Topics

### Supported experiences

- [AVExperienceController.Experience.embedded](experience-swift.enum/embedded.md): An experience where the video embeds within its original container.
- [AVExperienceController.Experience.expanded](experience-swift.enum/expanded.md): An experience where the system places the video outside of its original container.
- [AVExperienceController.Experience.multiview](experience-swift.enum/multiview.md): An experience where multiple videos play together.
- [AVExperienceController.Experience.immersive](experience-swift.enum/immersive.md): Indicates an experience in which the video extends beyond the app window boundaries/container.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the experience

- [allowedExperiences](allowedexperiences.md): The set of experiences the app supports.
- [availableExperiences](availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [AVExperienceController.Experiences](experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [experience](experience-swift.property.md): The current experience.
- [configuration](configuration-swift.property.md): The configuration options per experience.
- [AVExperienceController.Configuration](configuration-swift.struct.md): Options that configure each experience.
