> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/availableexperiences](https://developer.apple.com/documentation/avkit/avexperiencecontroller/availableexperiences)

# availableExperiences

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The allowed experiences that are available to use on the device at this time.

## Declaration

```swift
@MainActor final var availableExperiences: AVExperienceController.Experiences { get }
```

<a id="Discussion"></a>

## Discussion

This property is a subset of [allowedExperiences](allowedexperiences.md), filtered for platform, device configuration, and system state.

## See Also

### Configuring the experience

- [allowedExperiences](allowedexperiences.md): The set of experiences the app supports.
- [AVExperienceController.Experiences](experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [experience](experience-swift.property.md): The current experience.
- [AVExperienceController.Experience](experience-swift.enum.md): The types of experiences the system supports.
- [configuration](configuration-swift.property.md): The configuration options per experience.
- [AVExperienceController.Configuration](configuration-swift.struct.md): Options that configure each experience.
