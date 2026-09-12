> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/init(clockname:sourceidentifier:gettimecallminimuminterval:numberofeventsforratesmoothing:numberofaveragesforratesmoothing:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamcustomclockconfiguration/init(clockname:sourceidentifier:gettimecallminimuminterval:numberofeventsforratesmoothing:numberofaveragesforratesmoothing:))

# init(clockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a custom clock configuration.

## Declaration

```swift
init(clockName: String, sourceIdentifier: UUID, getTimeCallMinimumInterval: CMTime, numberOfEventsForRateSmoothing: UInt32, numberOfAveragesForRateSmoothing: UInt32)
```

## Parameters

- `clockName`: The name of the clock.
- `sourceIdentifier`: A universally unique identifier for the clock.
- `getTimeCallMinimumInterval`: A minimum call time interval for the clock. If you query the clock for its current time more often than this interval, it returns an interpolated value.
- `numberOfEventsForRateSmoothing`: The number of events to use for rate smoothing. This value must be greater than `0`.
- `numberOfAveragesForRateSmoothing`: The number of averages to use for rate smoothing. Specify `0`, to use the default smoothing algorithm.

# initWithClockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a custom clock configuration.

## Declaration

```objectivec
- (instancetype) initWithClockName:(NSString *) clockName sourceIdentifier:(NSUUID *) sourceIdentifier getTimeCallMinimumInterval:(CMTime) getTimeCallMinimumInterval numberOfEventsForRateSmoothing:(uint32_t) numberOfEventsForRateSmoothing numberOfAveragesForRateSmoothing:(uint32_t) numberOfAveragesForRateSmoothing;
```

## Parameters

- `clockName`: The name of the clock.
- `sourceIdentifier`: A universally unique identifier for the clock.
- `getTimeCallMinimumInterval`: A minimum call time interval for the clock. If you query the clock for its current time more often than this interval, it returns an interpolated value.
- `numberOfEventsForRateSmoothing`: The number of events to use for rate smoothing. This value must be greater than `0`.
- `numberOfAveragesForRateSmoothing`: The number of averages to use for rate smoothing. Specify `0`, to use the default smoothing algorithm.

## See Also

### Creating a Clock Configuration

- [customClockConfigurationWithClockName:sourceIdentifier:getTimeCallMinimumInterval:numberOfEventsForRateSmoothing:numberOfAveragesForRateSmoothing:](customclockconfigurationwithclockname_sourceidentifier_gettimecallminimuminterval_numberofeventsforratesmoothing_numberofaveragesforratesmoothing_.md): Returns a new a custom clock configuration.
