> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineentry/complicationtemplate](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineentry/complicationtemplate)

# complicationTemplate (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The template containing the data to display in your complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var complicationTemplate: CLKComplicationTemplate { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a template that matches the style of complication for which you’re providing data. Different templates require different types of data. You must configure the template data before returning the timeline entry to ClockKit.

## See Also

### Setting the Entry Values

- [date](date.md): Deprecated. The time at which to display the entry.
- [timelineAnimationGroup](timelineanimationgroup.md): Deprecated. The animation group to which the entry belongs.

# complicationTemplate (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The template containing the data to display in your complication.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKComplicationTemplate * complicationTemplate;
```

<a id="Discussion"></a>

## Discussion

Specify a template that matches the style of complication for which you’re providing data. Different templates require different types of data. You must configure the template data before returning the timeline entry to ClockKit.

## See Also

### Setting the Entry Values

- [date](date.md): Deprecated. The time at which to display the entry.
- [timelineAnimationGroup](timelineanimationgroup.md): Deprecated. The animation group to which the entry belongs.
