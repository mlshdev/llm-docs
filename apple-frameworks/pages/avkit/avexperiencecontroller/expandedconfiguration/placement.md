> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/expandedconfiguration/placement](https://developer.apple.com/documentation/avkit/avexperiencecontroller/expandedconfiguration/placement)

# AVExperienceController.ExpandedConfiguration.Placement

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure that represents where the video will be experienced.

## Declaration

```swift
struct Placement
```

<a id="overview"></a>

## Overview

Control where an experience is placed. It can be over a UIScene.

## Topics

### Placements

- [over(scene:)](placement/over%28scene_%29.md): Places the video over the provided scene.
- [unspecified](placement/unspecified.md): Doesn’t specify placement.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Specifying placement

- [fallbackPlacement](fallbackplacement.md): A fallback placement to use when the original container isn’t in the view controller hierarchy.
