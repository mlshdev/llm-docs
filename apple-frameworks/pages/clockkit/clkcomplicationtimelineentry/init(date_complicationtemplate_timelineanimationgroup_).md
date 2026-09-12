> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineentry/init(date:complicationtemplate:timelineanimationgroup:)](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineentry/init(date:complicationtemplate:timelineanimationgroup:))

# init(date:complicationTemplate:timelineAnimationGroup:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a timeline entry with the specified information.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(date: Date, complicationTemplate: CLKComplicationTemplate, timelineAnimationGroup: String?)
```

## Parameters

- `date`: The time at which to display the complication data.
- `complicationTemplate`: The complication template containing the data to display. Specify a template that’s appropriate for the complication family.
- `timelineAnimationGroup`: The animation group with which to associate the entry. For more information about how this value is used, see [timelineAnimationGroup](timelineanimationgroup.md).

<a id="return-value"></a>

## Return Value

A timeline entry initialized with the specified data.

<a id="Discussion"></a>

## Discussion

Use this method to create new timeline entries. You can change the values of the timeline entry later by modifying the properties of the returned object.

## See Also

### Creating a Timeline Entry

- [init(date:complicationTemplate:)](init%28date_complicationtemplate_%29.md): Deprecated. Creates and returns a timeline entry with the specified date and complication data.

# entryWithDate:complicationTemplate:timelineAnimationGroup: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a timeline entry with the specified information.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) entryWithDate:(NSDate *) date complicationTemplate:(CLKComplicationTemplate *) complicationTemplate timelineAnimationGroup:(NSString *) timelineAnimationGroup;
```

## Parameters

- `date`: The time at which to display the complication data.
- `complicationTemplate`: The complication template containing the data to display. Specify a template that’s appropriate for the complication family.
- `timelineAnimationGroup`: The animation group with which to associate the entry. For more information about how this value is used, see [timelineAnimationGroup](timelineanimationgroup.md).

<a id="return-value"></a>

## Return Value

A timeline entry initialized with the specified data.

<a id="Discussion"></a>

## Discussion

Use this method to create new timeline entries. You can change the values of the timeline entry later by modifying the properties of the returned object.

## See Also

### Creating a Timeline Entry

- [entryWithDate:complicationTemplate:](init%28date_complicationtemplate_%29.md): Deprecated. Creates and returns a timeline entry with the specified date and complication data.
