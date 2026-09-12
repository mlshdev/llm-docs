> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver/latesttimetraveldate](https://developer.apple.com/documentation/clockkit/clkcomplicationserver/latesttimetraveldate)

# latestTimeTravelDate (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

The latest date supported by Time Travel.

> Time Travel is no longer supported.

## Declaration

```swift
var latestTimeTravelDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

When constructing your timeline, don’t create any entries after this date. Doing so is a waste of time because those entries won’t be displayed right away.

## See Also

### Getting the Time Travel Boundaries

- [earliestTimeTravelDate](earliesttimetraveldate.md): Deprecated. The earliest Time Travel date for which you should provide data.

# latestTimeTravelDate (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

The latest date supported by Time Travel.

> Time Travel is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * latestTimeTravelDate;
```

<a id="Discussion"></a>

## Discussion

When constructing your timeline, don’t create any entries after this date. Doing so is a waste of time because those entries won’t be displayed right away.

## See Also

### Getting the Time Travel Boundaries

- [earliestTimeTravelDate](earliesttimetraveldate.md): Deprecated. The earliest Time Travel date for which you should provide data.
