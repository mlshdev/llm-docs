> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/altitudesource-swift.property](https://developer.apple.com/documentation/arkit/argeoanchor/altitudesource-swift.property)

# altitudeSource (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A record of the source from which an altitude came.

## Declaration

```swift
var altitudeSource: ARGeoAnchor.AltitudeSource { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [ARGeoAnchor.AltitudeSource.userDefined](altitudesource-swift.enum/userdefined.md) if you set the altitude yourself (see [getGeoLocation(forPoint:completionHandler:)](../arsession/getgeolocation%28forpoint_completionhandler_%29.md)).

If your app doesn’t set the altitude, ARKit populates this property to indicate the altitude’s expected accuracy (either [ARGeoAnchor.AltitudeSource.precise](altitudesource-swift.enum/precise.md), or [ARGeoAnchor.AltitudeSource.coarse](altitudesource-swift.enum/coarse.md)), depending on the level of confidence ARKit has with the altitude data that’s available at the time.

## See Also

### Defining Altitude

- [altitude](altitude-89k4x.md): Vertical distance, in meters, between this anchor and sea level.
- [ARGeoAnchor.AltitudeSource](altitudesource-swift.enum.md): Options for setting a location anchor’s altitude.

# altitudeSource (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A record of the source from which an altitude came.

## Declaration

```objectivec
@property (nonatomic, readonly) ARAltitudeSource altitudeSource;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [ARAltitudeSourceUserDefined](altitudesource-swift.enum/userdefined.md) if you set the altitude yourself (see [getGeoLocationForPoint:completionHandler:](../arsession/getgeolocation%28forpoint_completionhandler_%29.md)).

If your app doesn’t set the altitude, ARKit populates this property to indicate the altitude’s expected accuracy (either [ARAltitudeSourcePrecise](altitudesource-swift.enum/precise.md), or [ARAltitudeSourceCoarse](altitudesource-swift.enum/coarse.md)), depending on the level of confidence ARKit has with the altitude data that’s available at the time.

## See Also

### Defining Altitude

- [altitude](altitude-9kges.md): Vertical distance, in meters, between this anchor and sea level.
- [ARAltitudeSource](altitudesource-swift.enum.md): Options for setting a location anchor’s altitude.
