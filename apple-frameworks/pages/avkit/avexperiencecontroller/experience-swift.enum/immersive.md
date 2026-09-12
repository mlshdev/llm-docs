> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experience-swift.enum/immersive](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experience-swift.enum/immersive)

# AVExperienceController.Experience.immersive

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 26.0+

Indicates an experience in which the video extends beyond the app window boundaries/container.

## Declaration

```swift
case immersive
```

<a id="discussion"></a>

## Discussion

It is valid to transition to `immersive` even when the `AVPlayerViewController` is not in the view hiearchy. In this case, a Placement must be specified through the Configuration object. If no placement is specified, the transition result will be `.reversed`.

## See Also

### Supported experiences

- [AVExperienceController.Experience.embedded](embedded.md): An experience where the video embeds within its original container.
- [AVExperienceController.Experience.expanded](expanded.md): An experience where the system places the video outside of its original container.
- [AVExperienceController.Experience.multiview](multiview.md): An experience where multiple videos play together.
