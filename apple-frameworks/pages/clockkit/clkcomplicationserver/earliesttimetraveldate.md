> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver/earliesttimetraveldate](https://developer.apple.com/documentation/clockkit/clkcomplicationserver/earliesttimetraveldate)

# earliestTimeTravelDate (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

The earliest Time Travel date for which you should provide data.

> Time Travel is no longer supported.

## Declaration

```swift
var earliestTimeTravelDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

When constructing your timeline, don’t create any entries before this date. Doing so is a waste of time because those entries will never be displayed.

## See Also

### Getting the Time Travel Boundaries

- [latestTimeTravelDate](latesttimetraveldate.md): Deprecated. The latest date supported by Time Travel.

# earliestTimeTravelDate (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

The earliest Time Travel date for which you should provide data.

> Time Travel is no longer supported.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * earliestTimeTravelDate;
```

<a id="Discussion"></a>

## Discussion

When constructing your timeline, don’t create any entries before this date. Doing so is a waste of time because those entries will never be displayed.

## See Also

### Getting the Time Travel Boundaries

- [latestTimeTravelDate](latesttimetraveldate.md): Deprecated. The latest date supported by Time Travel.
