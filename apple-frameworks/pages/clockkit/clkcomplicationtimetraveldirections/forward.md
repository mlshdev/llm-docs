> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimetraveldirections/forward](https://developer.apple.com/documentation/clockkit/clkcomplicationtimetraveldirections/forward)

# forward (Swift)

**Framework:** ClockKit  
**Kind:** Type Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Future data support. Use this option when it makes sense to provide future data for your complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
static var forward: CLKComplicationTimeTravelDirections { get }
```

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)

## See Also

### Constants

- [backward](backward.md): Deprecated. Past data support. Use this option when it makes sense to provide past data for your complication.

# CLKComplicationTimeTravelDirectionForward (Objective-C)

**Framework:** ClockKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Future data support. Use this option when it makes sense to provide future data for your complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
CLKComplicationTimeTravelDirectionForward
```

## Mentioned In

- [Loading future timeline events](../loading-future-timeline-events.md)

## See Also

### Constants

- [CLKComplicationTimeTravelDirectionNone](clkcomplicationtimetraveldirectionnone.md): Deprecated. No past or future data support. Use this option when it doesn’t make sense to provide future or past data for your complication.
- [CLKComplicationTimeTravelDirectionBackward](backward.md): Deprecated. Past data support. Use this option when it makes sense to provide past data for your complication.
