> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/altitudesource-swift.enum/coarse](https://developer.apple.com/documentation/arkit/argeoanchor/altitudesource-swift.enum/coarse)

# ARGeoAnchor.AltitudeSource.coarse (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The framework sets the altitude using a coarse digital-elevation model.

## Declaration

```swift
case coarse
```

<a id="Discussion"></a>

## Discussion

The accuracy of this altitude is noticeably imprecise at close range, but it’s sufficient from far away. Use this option to save computational resources for anchors that are far off in the distance.

## See Also

### Sources

- [ARGeoAnchor.AltitudeSource.precise](precise.md): The framework sets the altitude using a high-resolution digital-elevation model.
- [ARGeoAnchor.AltitudeSource.userDefined](userdefined.md): The app defines the altitude.
- [ARGeoAnchor.AltitudeSource.unknown](unknown.md): Altitude isn’t yet set.

# ARAltitudeSourceCoarse (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The framework sets the altitude using a coarse digital-elevation model.

## Declaration

```objectivec
ARAltitudeSourceCoarse
```

<a id="Discussion"></a>

## Discussion

The accuracy of this altitude is noticeably imprecise at close range, but it’s sufficient from far away. Use this option to save computational resources for anchors that are far off in the distance.

## See Also

### Sources

- [ARAltitudeSourcePrecise](precise.md): The framework sets the altitude using a high-resolution digital-elevation model.
- [ARAltitudeSourceUserDefined](userdefined.md): The app defines the altitude.
- [ARAltitudeSourceUnknown](unknown.md): Altitude isn’t yet set.
