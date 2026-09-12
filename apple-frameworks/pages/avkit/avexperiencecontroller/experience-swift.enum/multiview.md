> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experience-swift.enum/multiview](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experience-swift.enum/multiview)

# AVExperienceController.Experience.multiview

**Framework:** AVKit  
**Kind:** Case  
**Availability:** visionOS 2.0+

An experience where multiple videos play together.

## Declaration

```swift
case multiview
```

<a id="Discussion"></a>

## Discussion

Configure this experience type using an [AVMultiviewManager](../../avmultiviewmanager.md).

It’s valid to transition to this experience from a player view controller that isn’t in a view hierarchy. This is useful when adding additional videos to a multiview experience.

Transition to embedded to remove an item from the multiview experience.

## See Also

### Supported experiences

- [AVExperienceController.Experience.embedded](embedded.md): An experience where the video embeds within its original container.
- [AVExperienceController.Experience.expanded](expanded.md): An experience where the system places the video outside of its original container.
- [AVExperienceController.Experience.immersive](immersive.md): Indicates an experience in which the video extends beyond the app window boundaries/container.
