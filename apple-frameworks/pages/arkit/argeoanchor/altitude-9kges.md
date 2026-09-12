> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeoanchor/altitude-9kges](https://developer.apple.com/documentation/arkit/argeoanchor/altitude-9kges)

# altitude

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Vertical distance, in meters, between this anchor and sea level.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDistance altitude;
```

<a id="Discussion"></a>

## Discussion

Negative values indicate below sea level. This property is valid only when [altitudeSource](altitudesource-swift.property.md) is a value other than [ARAltitudeSourceUnknown](altitudesource-swift.enum/unknown.md).

## See Also

### Defining Altitude

- [altitudeSource](altitudesource-swift.property.md): A record of the source from which an altitude came.
- [ARAltitudeSource](altitudesource-swift.enum.md): Options for setting a location anchor’s altitude.
