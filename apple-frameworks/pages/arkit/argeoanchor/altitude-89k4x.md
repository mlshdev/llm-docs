> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/altitude-89k4x](https://developer.apple.com/documentation/arkit/argeoanchor/altitude-89k4x)

# altitude

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Vertical distance, in meters, between this anchor and sea level.

## Declaration

```swift
@nonobjc var altitude: CLLocationDistance? { get }
```

<a id="Discussion"></a>

## Discussion

Negative values indicate below sea level. This property is valid only when [altitudeSource](altitudesource-swift.property.md) is a value other than [ARGeoAnchor.AltitudeSource.unknown](altitudesource-swift.enum/unknown.md).

## See Also

### Defining Altitude

- [altitudeSource](altitudesource-swift.property.md): A record of the source from which an altitude came.
- [ARGeoAnchor.AltitudeSource](altitudesource-swift.enum.md): Options for setting a location anchor’s altitude.
