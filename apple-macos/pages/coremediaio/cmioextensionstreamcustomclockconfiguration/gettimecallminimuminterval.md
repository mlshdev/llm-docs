> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/gettimecallminimuminterval](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/gettimecallminimuminterval)

# getTimeCallMinimumInterval (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A minimum call time interval for the clock.

## Declaration

```swift
var getTimeCallMinimumInterval: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

If you query the clock for its current time more often than this interval, the system returns an interpolated value.

## See Also

### Inspecting the Configuration

- [clockName](clockname.md): The name of the clock.
- [sourceIdentifier](sourceidentifier.md): A universally unique identifier for the clock.
- [numberOfEventsForRateSmoothing](numberofeventsforratesmoothing.md): The number of events to use for rate smoothing.
- [numberOfAveragesForRateSmoothing](numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.

# getTimeCallMinimumInterval (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A minimum call time interval for the clock.

## Declaration

```objectivec
@property (atomic, readonly) CMTime getTimeCallMinimumInterval;
```

<a id="Discussion"></a>

## Discussion

If you query the clock for its current time more often than this interval, the system returns an interpolated value.

## See Also

### Inspecting the Configuration

- [clockName](clockname.md): The name of the clock.
- [sourceIdentifier](sourceidentifier.md): A universally unique identifier for the clock.
- [numberOfEventsForRateSmoothing](numberofeventsforratesmoothing.md): The number of events to use for rate smoothing.
- [numberOfAveragesForRateSmoothing](numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.
