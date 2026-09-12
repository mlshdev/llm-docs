> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/sourceidentifier](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/sourceidentifier)

# sourceIdentifier (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A universally unique identifier for the clock.

## Declaration

```swift
var sourceIdentifier: UUID { get }
```

## See Also

### Inspecting the Configuration

- [clockName](clockname.md): The name of the clock.
- [getTimeCallMinimumInterval](gettimecallminimuminterval.md): A minimum call time interval for the clock.
- [numberOfEventsForRateSmoothing](numberofeventsforratesmoothing.md): The number of events to use for rate smoothing.
- [numberOfAveragesForRateSmoothing](numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.

# sourceIdentifier (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A universally unique identifier for the clock.

## Declaration

```objectivec
@property (atomic, strong, readonly) NSUUID * sourceIdentifier;
```

## See Also

### Inspecting the Configuration

- [clockName](clockname.md): The name of the clock.
- [getTimeCallMinimumInterval](gettimecallminimuminterval.md): A minimum call time interval for the clock.
- [numberOfEventsForRateSmoothing](numberofeventsforratesmoothing.md): The number of events to use for rate smoothing.
- [numberOfAveragesForRateSmoothing](numberofaveragesforratesmoothing.md): The number of averages to use for rate smoothing.
