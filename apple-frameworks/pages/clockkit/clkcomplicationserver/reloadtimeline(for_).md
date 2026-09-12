> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver/reloadtimeline(for:)](https://developer.apple.com/documentation/clockkit/clkcomplicationserver/reloadtimeline(for:))

# reloadTimeline(for:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Invalidates your existing timeline data and triggers an update session to reload it.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
func reloadTimeline(for complication: CLKComplication)
```

## Mentioned In

- [Keeping your complications up to date](../keeping-your-complications-up-to-date.md)

<a id="Discussion"></a>

## Discussion

Call this method when your complication data is no longer accurate and needs to be completely replaced. ClockKit dumps any cached data and initiates a fresh update session to request new data from your complication data source. If your complication has already exceeded its allotted daily budget for execution time, calls to this method do nothing.

Call this method sparingly. If your existing complication data is still valid, consider calling the [extendTimeline(for:)](extendtimeline%28for_%29.md) method instead.

## See Also

### Updating Your Timeline Data

- [extendTimeline(for:)](extendtimeline%28for_%29.md): Deprecated. Asks the system to extend the data in your complication’s timeline.

# reloadTimelineForComplication: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Invalidates your existing timeline data and triggers an update session to reload it.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (void) reloadTimelineForComplication:(CLKComplication *) complication;
```

## Mentioned In

- [Keeping your complications up to date](../keeping-your-complications-up-to-date.md)

<a id="Discussion"></a>

## Discussion

Call this method when your complication data is no longer accurate and needs to be completely replaced. ClockKit dumps any cached data and initiates a fresh update session to request new data from your complication data source. If your complication has already exceeded its allotted daily budget for execution time, calls to this method do nothing.

Call this method sparingly. If your existing complication data is still valid, consider calling the [extendTimelineForComplication:](extendtimeline%28for_%29.md) method instead.

## See Also

### Updating Your Timeline Data

- [extendTimelineForComplication:](extendtimeline%28for_%29.md): Deprecated. Asks the system to extend the data in your complication’s timeline.
