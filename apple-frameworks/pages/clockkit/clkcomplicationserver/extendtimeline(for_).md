> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver/extendtimeline(for:)](https://developer.apple.com/documentation/clockkit/clkcomplicationserver/extendtimeline(for:))

# extendTimeline(for:) (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Asks the system to extend the data in your complication’s timeline.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
func extendTimeline(for complication: CLKComplication)
```

## Parameters

- `complication`: The complication whose data you want to extend.

## Mentioned In

- [Keeping your complications up to date](../keeping-your-complications-up-to-date.md)

<a id="Discussion"></a>

## Discussion

Call this method when your existing complication data is still valid and you’ve new data to add to the end of your timeline. ClockKit initiates an update session to request the additional data from your complication data source. If your complication has already exceeded its allotted daily budget for execution time, calls to this method do nothing.

## See Also

### Updating Your Timeline Data

- [reloadTimeline(for:)](reloadtimeline%28for_%29.md): Deprecated. Invalidates your existing timeline data and triggers an update session to reload it.

# extendTimelineForComplication: (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Asks the system to extend the data in your complication’s timeline.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
- (void) extendTimelineForComplication:(CLKComplication *) complication;
```

## Parameters

- `complication`: The complication whose data you want to extend.

## Mentioned In

- [Keeping your complications up to date](../keeping-your-complications-up-to-date.md)

<a id="Discussion"></a>

## Discussion

Call this method when your existing complication data is still valid and you’ve new data to add to the end of your timeline. ClockKit initiates an update session to request the additional data from your complication data source. If your complication has already exceeded its allotted daily budget for execution time, calls to this method do nothing.

## See Also

### Updating Your Timeline Data

- [reloadTimelineForComplication:](reloadtimeline%28for_%29.md): Deprecated. Invalidates your existing timeline data and triggers an update session to reload it.
