> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experiences/only(_:)](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experiences/only(_:))

# only(\_:)

**Framework:** AVKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Returns a set of experiences for the provided list.

## Declaration

```swift
static func only<C>(_ experiences: C) -> AVExperienceController.Experiences where C : Collection, C.Element == AVExperienceController.Experience
```

## Parameters

- `experiences`: The experiences to include. Order and duplication are not significant.

<a id="Discussion"></a>

## Discussion

Use this method when the use case requires a specific set of experiences.

## See Also

### Defining experiences

- [recommended(excluding:including:)](recommended%28excluding_including_%29.md): Returns the recommended set of experiences.
