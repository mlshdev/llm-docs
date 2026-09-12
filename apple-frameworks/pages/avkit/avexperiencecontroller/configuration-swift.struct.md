> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/configuration-swift.struct](https://developer.apple.com/documentation/avkit/avexperiencecontroller/configuration-swift.struct)

# AVExperienceController.Configuration

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Options that configure each experience.

## Declaration

```swift
struct Configuration
```

## Topics

### Configuring experiences

- [expanded](configuration-swift.struct/expanded.md): Configuration options for an expanded experience.
- [AVExperienceController.ExpandedConfiguration](expandedconfiguration.md): A structure that specifies options for an expanded experience.

### Configuring placement

- [placement](configuration-swift.struct/placement-swift.property.md): Supply a Placement to be used when the original container isn’t added to the view controller hierarchy; i.e. the AVPlayerViewController is off-screen.
- [AVExperienceController.Configuration.Placement](configuration-swift.struct/placement-swift.struct.md): A struct used to set the placement for the media playback to be experienced.

## See Also

### Configuring the experience

- [allowedExperiences](allowedexperiences.md): The set of experiences the app supports.
- [availableExperiences](availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [AVExperienceController.Experiences](experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [experience](experience-swift.property.md): The current experience.
- [AVExperienceController.Experience](experience-swift.enum.md): The types of experiences the system supports.
- [configuration](configuration-swift.property.md): The configuration options per experience.
