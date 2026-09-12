> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/numberofeventsforratesmoothing](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/numberofeventsforratesmoothing)

# numberOfEventsForRateSmoothing (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The number of events to use for rate smoothing.

## Declaration

```swift
var numberOfEventsForRateSmoothing: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The property value is always greater than `0`.

## See Also

### Inspecting the Configuration

- [clockName](clockname.md): The name of the clock.
- [sourceIdentifier](sourceidentifier.md): A universally unique identifier for the clock.
- [getTimeCallMinimumInterval](gettimecallminimuminterval.md): A minimum call time interval for the clock.
- [numberOfAveragesForRateSmoothing](numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.

# numberOfEventsForRateSmoothing (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The number of events to use for rate smoothing.

## Declaration

```objectivec
@property (atomic, readonly) uint32_t numberOfEventsForRateSmoothing;
```

<a id="Discussion"></a>

## Discussion

The property value is always greater than `0`.

## See Also

### Inspecting the Configuration

- [clockName](clockname.md): The name of the clock.
- [sourceIdentifier](sourceidentifier.md): A universally unique identifier for the clock.
- [getTimeCallMinimumInterval](gettimecallminimuminterval.md): A minimum call time interval for the clock.
- [numberOfAveragesForRateSmoothing](numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.
