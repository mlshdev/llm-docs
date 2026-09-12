> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avexperiencecontroller/expandedconfiguration](https://developer.apple.com/documentation/avkit/avexperiencecontroller/expandedconfiguration)

# AVExperienceController.ExpandedConfiguration

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure that specifies options for an expanded experience.

## Declaration

```swift
struct ExpandedConfiguration
```

<a id="overview"></a>

## Overview

It’s valid to transition to this experience even when the original container isn’t in a view hierarchy. In this case, you must specify a [fallbackPlacement](expandedconfiguration/fallbackplacement.md) or the transition result is [AVExperienceController.TransitionContext.TransitionResult.reversed(reason:)](transitioncontext/transitionresult/reversed%28reason_%29.md).

## Topics

### Creating an expanded configuration

- [init(fallbackPlacement:)](expandedconfiguration/init%28fallbackplacement_%29.md): Creates a configuration object for an expanded experience.

### Specifying placement

- [fallbackPlacement](expandedconfiguration/fallbackplacement.md): A fallback placement to use when the original container isn’t in the view controller hierarchy.
- [AVExperienceController.ExpandedConfiguration.Placement](expandedconfiguration/placement.md): A structure that represents where the video will be experienced.

### Configuring automatic immersive transitions

- [automaticTransitionToImmersive](expandedconfiguration/automatictransitiontoimmersive-swift.property.md): The expanded experience automatic transition behavior for the immersive experience.
- [AVExperienceController.ExpandedConfiguration.AutomaticTransitionToImmersive](expandedconfiguration/automatictransitiontoimmersive-swift.enum.md): The expanded experience automatic transition behavior into the immersive experience.

## See Also

### Configuring experiences

- [expanded](configuration-swift.struct/expanded.md): Configuration options for an expanded experience.
