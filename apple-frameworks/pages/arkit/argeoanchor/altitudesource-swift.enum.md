> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/altitudesource-swift.enum](https://developer.apple.com/documentation/arkit/argeoanchor/altitudesource-swift.enum)

# ARGeoAnchor.AltitudeSource (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Options for setting a location anchor’s altitude.

## Declaration

```swift
enum AltitudeSource
```

<a id="Discussion"></a>

## Discussion

Each altitude source has unique performance and accuracy characteristics.

## Topics

### Sources

- [ARGeoAnchor.AltitudeSource.precise](altitudesource-swift.enum/precise.md): The framework sets the altitude using a high-resolution digital-elevation model.
- [ARGeoAnchor.AltitudeSource.coarse](altitudesource-swift.enum/coarse.md): The framework sets the altitude using a coarse digital-elevation model.
- [ARGeoAnchor.AltitudeSource.userDefined](altitudesource-swift.enum/userdefined.md): The app defines the altitude.
- [ARGeoAnchor.AltitudeSource.unknown](altitudesource-swift.enum/unknown.md): Altitude isn’t yet set.

### Initializers

- [init(rawValue:)](altitudesource-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining Altitude

- [altitude](altitude-89k4x.md): Vertical distance, in meters, between this anchor and sea level.
- [altitudeSource](altitudesource-swift.property.md): A record of the source from which an altitude came.

# ARAltitudeSource (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Options for setting a location anchor’s altitude.

## Declaration

```objectivec
enum ARAltitudeSource : NSInteger;
```

<a id="Discussion"></a>

## Discussion

Each altitude source has unique performance and accuracy characteristics.

## Topics

### Sources

- [ARAltitudeSourcePrecise](altitudesource-swift.enum/precise.md): The framework sets the altitude using a high-resolution digital-elevation model.
- [ARAltitudeSourceCoarse](altitudesource-swift.enum/coarse.md): The framework sets the altitude using a coarse digital-elevation model.
- [ARAltitudeSourceUserDefined](altitudesource-swift.enum/userdefined.md): The app defines the altitude.
- [ARAltitudeSourceUnknown](altitudesource-swift.enum/unknown.md): Altitude isn’t yet set.

## See Also

### Defining Altitude

- [altitude](altitude-9kges.md): Vertical distance, in meters, between this anchor and sea level.
- [altitudeSource](altitudesource-swift.property.md): A record of the source from which an altitude came.
