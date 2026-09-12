> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/altitudesource-swift.enum/userdefined](https://developer.apple.com/documentation/arkit/argeoanchor/altitudesource-swift.enum/userdefined)

# ARGeoAnchor.AltitudeSource.userDefined (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+

The app defines the altitude.

## Declaration

```swift
case userDefined
```

<a id="Discussion"></a>

## Discussion

ARKit records this altitude source when your app defines a geo anchor’s altitude.

You may acquire altitude by providing a particular scene coordinate to the session using [getGeoLocation(forPoint:completionHandler:)](../../arsession/getgeolocation%28forpoint_completionhandler_%29.md).

For example, your app might set a geo anchor’s altitude by raycasting a surface, then adding an arbitrary `y-`amount to make the anchor more visible from afar.

## See Also

### Sources

- [ARGeoAnchor.AltitudeSource.precise](precise.md): The framework sets the altitude using a high-resolution digital-elevation model.
- [ARGeoAnchor.AltitudeSource.coarse](coarse.md): The framework sets the altitude using a coarse digital-elevation model.
- [ARGeoAnchor.AltitudeSource.unknown](unknown.md): Altitude isn’t yet set.

# ARAltitudeSourceUserDefined (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The app defines the altitude.

## Declaration

```objectivec
ARAltitudeSourceUserDefined
```

<a id="Discussion"></a>

## Discussion

ARKit records this altitude source when your app defines a geo anchor’s altitude.

You may acquire altitude by providing a particular scene coordinate to the session using [getGeoLocationForPoint:completionHandler:](../../arsession/getgeolocation%28forpoint_completionhandler_%29.md).

For example, your app might set a geo anchor’s altitude by raycasting a surface, then adding an arbitrary `y-`amount to make the anchor more visible from afar.

## See Also

### Sources

- [ARAltitudeSourcePrecise](precise.md): The framework sets the altitude using a high-resolution digital-elevation model.
- [ARAltitudeSourceCoarse](coarse.md): The framework sets the altitude using a coarse digital-elevation model.
- [ARAltitudeSourceUnknown](unknown.md): Altitude isn’t yet set.
