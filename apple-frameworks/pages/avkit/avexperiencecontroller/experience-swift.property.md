> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experience-swift.property](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experience-swift.property)

# experience

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The current experience.

## Declaration

```swift
@MainActor final var experience: AVExperienceController.Experience { get }
```

<a id="Discussion"></a>

## Discussion

The system updates this value only after the [status](transitioncontext/status-swift.property.md) changes to [AVExperienceController.TransitionContext.Status.finished(result:)](transitioncontext/status-swift.enum/finished%28result_%29.md).

Implement the [experienceController(\_:didChangeTransitionContext:)](delegate-swift.protocol/experiencecontroller%28__didchangetransitioncontext_%29.md) delegate method to observe changes to this value.

## See Also

### Configuring the experience

- [allowedExperiences](allowedexperiences.md): The set of experiences the app supports.
- [availableExperiences](availableexperiences.md): The allowed experiences that are available to use on the device at this time.
- [AVExperienceController.Experiences](experiences.md): A structure that represents a collection of experiences to use with an experience controller.
- [AVExperienceController.Experience](experience-swift.enum.md): The types of experiences the system supports.
- [configuration](configuration-swift.property.md): The configuration options per experience.
- [AVExperienceController.Configuration](configuration-swift.struct.md): Options that configure each experience.
