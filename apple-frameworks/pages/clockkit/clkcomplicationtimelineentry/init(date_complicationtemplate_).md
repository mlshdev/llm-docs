> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineentry/init(date:complicationtemplate:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineentry/init(date:complicationtemplate:))

# init(date:complicationTemplate:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a timeline entry with the specified date and complication data.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(date: Date, complicationTemplate: CLKComplicationTemplate)
```

## Parameters

- `date`: The time at which to display the complication data.
- `complicationTemplate`: The complication template containing the data to display. The template must belong to the family of the associated complication.

<a id="return-value"></a>

## Return Value

A timeline entry initialized with the specified data.

<a id="Discussion"></a>

## Discussion

Use this method to create new timeline entries. You can change the values of the timeline entry later by modifying the properties of the returned object. This method sets the value of the [timelineAnimationGroup](timelineanimationgroup.md) property to `nil`.

## See Also

### Creating a Timeline Entry

- [init(date:complicationTemplate:timelineAnimationGroup:)](init%28date_complicationtemplate_timelineanimationgroup_%29.md): Deprecated. Creates and returns a timeline entry with the specified information.

# entryWithDate:complicationTemplate: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a timeline entry with the specified date and complication data.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) entryWithDate:(NSDate *) date complicationTemplate:(CLKComplicationTemplate *) complicationTemplate;
```

## Parameters

- `date`: The time at which to display the complication data.
- `complicationTemplate`: The complication template containing the data to display. The template must belong to the family of the associated complication.

<a id="return-value"></a>

## Return Value

A timeline entry initialized with the specified data.

<a id="Discussion"></a>

## Discussion

Use this method to create new timeline entries. You can change the values of the timeline entry later by modifying the properties of the returned object. This method sets the value of the [timelineAnimationGroup](timelineanimationgroup.md) property to `nil`.

## See Also

### Creating a Timeline Entry

- [entryWithDate:complicationTemplate:timelineAnimationGroup:](init%28date_complicationtemplate_timelineanimationgroup_%29.md): Deprecated. Creates and returns a timeline entry with the specified information.
