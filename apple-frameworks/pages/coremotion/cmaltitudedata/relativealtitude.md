> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmaltitudedata/relativealtitude](https://developer.apple.com/documentation/coremotion/cmaltitudedata/relativealtitude)

# relativeAltitude (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

The change in altitude (in meters) since the first reported event.

## Declaration

```swift
var relativeAltitude: NSNumber { get }
```

<a id="Discussion"></a>

## Discussion

For the first altitude event delivered to your altimeter object, the value of this property is `0`. Subsequent events contain a number that reflects the relative change in altitude with respect to the first reported event. For example, if the altitude changed five meters between the first and second events, the value in this property is `5` for the second event.

## See Also

### Getting the Altitude Data

- [pressure](pressure.md): The recorded pressure, in kilopascals.

# relativeAltitude (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

The change in altitude (in meters) since the first reported event.

## Declaration

```objectivec
@property (nonatomic, readonly) NSNumber * relativeAltitude;
```

<a id="Discussion"></a>

## Discussion

For the first altitude event delivered to your altimeter object, the value of this property is `0`. Subsequent events contain a number that reflects the relative change in altitude with respect to the first reported event. For example, if the altitude changed five meters between the first and second events, the value in this property is `5` for the second event.

## See Also

### Getting the Altitude Data

- [pressure](pressure.md): The recorded pressure, in kilopascals.
