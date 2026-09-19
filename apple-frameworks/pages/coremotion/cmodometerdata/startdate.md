> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmodometerdata/startdate

# startDate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 1.0+

The time that the device starts recording the odometer data.

## Declaration

```swift
var startDate: Date { get }
```

## See Also

### Getting date and times

- [endDate](enddate.md): The time that the device stops recording the odometer data.
- [gpsDate](gpsdate.md): The time of the GPS measurement associated with the location.

# startDate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 1.0+

The time that the device starts recording the odometer data.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * startDate;
```

## See Also

### Getting date and times

- [endDate](enddate.md): The time that the device stops recording the odometer data.
- [gpsDate](gpsdate.md): The time of the GPS measurement associated with the location.
