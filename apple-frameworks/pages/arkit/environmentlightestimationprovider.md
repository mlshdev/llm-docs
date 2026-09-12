> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/environmentlightestimationprovider](https://developer.apple.com/documentation/arkit/environmentlightestimationprovider)

# EnvironmentLightEstimationProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

A source of live data about lighting information in the environment.

## Declaration

```swift
final class EnvironmentLightEstimationProvider
```

<a id="overview"></a>

## Overview

Use the anchor this provider returns to reflect lighting from a person’s surroundings on the surfaces of virtual objects.

## Topics

### Creating an environment light estimation provider

- [init()](environmentlightestimationprovider/init%28%29.md): Creates an environment light estimation provider.

### Inspecting the environment light estimation provider

- [anchorUpdates](environmentlightestimationprovider/anchorupdates.md): An asynchronous sequence of all anchor updates.
- [description](environmentlightestimationprovider/description.md): A textual representation of this environment light estimation provider.
- [state](environmentlightestimationprovider/state.md): The state of an environment light estimation provider.

### Type properties

- [isSupported](environmentlightestimationprovider/issupported.md): A Boolean value that indicates whether a device supports the environment light estimation provider.
- [requiredAuthorizations](environmentlightestimationprovider/requiredauthorizations.md): The authorization types that an environment light estimation provider requires.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lighting estimation

- [EnvironmentProbeAnchor](environmentprobeanchor.md): An environment probe in the world.
