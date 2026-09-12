> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/configuration-swift.struct/placement-swift.struct](https://developer.apple.com/documentation/avkit/avexperiencecontroller/configuration-swift.struct/placement-swift.struct)

# AVExperienceController.Configuration.Placement

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A struct used to set the placement for the media playback to be experienced.

## Declaration

```swift
struct Placement
```

<a id="overview"></a>

## Overview

Controls where an experience is placed. It can be over a UIScene.

## Topics

### Placements

- [over(scene:)](placement-swift.struct/over%28scene_%29.md): Place the video over the provided scene.
- [unspecified](placement-swift.struct/unspecified.md): Used as default when no UIScene is specified as a placement.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring placement

- [placement](placement-swift.property.md): Supply a Placement to be used when the original container isn’t added to the view controller hierarchy; i.e. the AVPlayerViewController is off-screen.
