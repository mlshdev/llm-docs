> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/expandedconfiguration/fallbackplacement](https://developer.apple.com/documentation/avkit/avexperiencecontroller/expandedconfiguration/fallbackplacement)

# fallbackPlacement

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A fallback placement to use when the original container isn’t in the view controller hierarchy.

## Declaration

```swift
var fallbackPlacement: AVExperienceController.ExpandedConfiguration.Placement
```

<a id="Discussion"></a>

## Discussion

The system places the expanded experience over the scene of the original container. When the container isn’t available, the system uses this value. A transition to an expanded experience fails unless the container or this value specifies a valid placement.

## See Also

### Specifying placement

- [AVExperienceController.ExpandedConfiguration.Placement](placement.md): A structure that represents where the video will be experienced.
