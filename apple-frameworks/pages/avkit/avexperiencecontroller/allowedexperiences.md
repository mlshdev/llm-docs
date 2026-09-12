> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/allowedexperiences](https://developer.apple.com/documentation/avkit/avexperiencecontroller/allowedexperiences)

# allowedExperiences

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The set of experiences the app supports.

## Declaration

```swift
@MainActor final var allowedExperiences: AVExperienceController.Experiences { get set }
```

<a id="Discussion"></a>

## Discussion

Use this to allow additional experiences like multiview, or to disable expanded. This list is the basis for [availableExperiences](availableexperiences.md), which filters out inapplicable experiences.

> **Note**

> Because [AVExperienceController.Experience.embedded](experience-swift.enum/embedded.md) is the initial experience, and the one that the player returns to when others end, it’s a programming error to exclude it from this list.

## See Also

### Configuring the experience

- [availableExperiences](availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [AVExperienceController.Experiences](experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [experience](experience-swift.property.md): The current experience.
- [AVExperienceController.Experience](experience-swift.enum.md): The types of experiences the system supports.
- [configuration](configuration-swift.property.md): The configuration options per experience.
- [AVExperienceController.Configuration](configuration-swift.struct.md): Options that configure each experience.
