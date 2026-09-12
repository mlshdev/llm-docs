> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/configuration-swift.property](https://developer.apple.com/documentation/avkit/avexperiencecontroller/configuration-swift.property)

# configuration

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The configuration options per experience.

## Declaration

```swift
@MainActor final var configuration: AVExperienceController.Configuration
```

<a id="discussion"></a>

## Discussion

You may modify the configuration at any time, but after the [experienceController(\_:prepareForTransitionUsing:)](delegate-swift.protocol/experiencecontroller%28__preparefortransitionusing_%29.md) delegate callback returns, the system copies the configuration and uses it for the ensuing transition. Further modifications affect subsequent transitions.

## See Also

### Configuring the experience

- [allowedExperiences](allowedexperiences.md): The set of experiences the app supports.
- [availableExperiences](availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [AVExperienceController.Experiences](experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [experience](experience-swift.property.md): The current experience.
- [AVExperienceController.Experience](experience-swift.enum.md): The types of experiences the system supports.
- [AVExperienceController.Configuration](configuration-swift.struct.md): Options that configure each experience.
