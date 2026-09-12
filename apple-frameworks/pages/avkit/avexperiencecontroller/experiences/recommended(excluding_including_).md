> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/experiences/recommended(excluding:including:)](https://developer.apple.com/documentation/avkit/avexperiencecontroller/experiences/recommended(excluding:including:))

# recommended(excluding:including:)

**Framework:** AVKit  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Returns the recommended set of experiences.

## Declaration

```swift
static func recommended<C>(excluding: C = [], including: C = []) -> AVExperienceController.Experiences where C : Collection, C.Element == AVExperienceController.Experience
```

## Parameters

- `excluding`: The experiences to remove. Removal happens before adding.
- `including`: The experiences to add. Redundant items are ignored.

<a id="Discussion"></a>

## Discussion

Use this method to return the default recommended set of experiences for each platform and SDK version. Include or exclude experiences specifically desired or not supported by your app.

## See Also

### Defining experiences

- [only(\_:)](only%28__%29.md): Returns a set of experiences for the provided list.
