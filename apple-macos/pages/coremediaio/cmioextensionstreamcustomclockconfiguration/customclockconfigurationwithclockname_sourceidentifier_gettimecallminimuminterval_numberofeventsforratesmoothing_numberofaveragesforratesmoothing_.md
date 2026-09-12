> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/customclockconfigurationwithclockname:sourceidentifier:gettimecallminimuminterval:numberofeventsforratesmoothing:numberofaveragesforratesmoothing:](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/customclockconfigurationwithclockname:sourceidentifier:gettimecallminimuminterval:numberofeventsforratesmoothing:numberofaveragesforratesmoothing:)

# customClockConfigurationWithClockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new a custom clock configuration.

## Declaration

```objectivec
+ (instancetype) customClockConfigurationWithClockName:(NSString *) clockName sourceIdentifier:(NSUUID *) sourceIdentifier getTimeCallMinimumInterval:(CMTime) getTimeCallMinimumInterval numberOfEventsForRateSmoothing:(uint32_t) numberOfEventsForRateSmoothing numberOfAveragesForRateSmoothing:(uint32_t) numberOfAveragesForRateSmoothing;
```

## Parameters

- `clockName`: The name of the clock.
- `sourceIdentifier`: A universally unique identifier for the clock.
- `getTimeCallMinimumInterval`: A minimum call time interval for the clock. If you query the clock for its current time more often than this interval, it returns an interpolated value.
- `numberOfEventsForRateSmoothing`: The number of events to use for rate smoothing. This value must be greater than `0`.
- `numberOfAveragesForRateSmoothing`: The number of averages to use for rate smoothing. Specify `0`, to use the default smoothing algorithm.

<a id="return-value"></a>

## Return Value

A new custom clock configuration.

## See Also

### Creating a Clock Configuration

- [initWithClockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:](init%28clockname_sourceidentifier_gettimecallminimuminterval_numberofeventsforratesmoothing_numberofaveragesforratesmoothing_%29.md): Creates a custom clock configuration.
