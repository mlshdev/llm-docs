> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendardecomposeabsolutetime](https://developer.apple.com/documentation/corefoundation/cfcalendardecomposeabsolutetime)

# CFCalendarDecomposeAbsoluteTime

**Interface language:** Objective-C

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Computes the components which are indicated by the componentDesc description string for the given absolute time.

## Declaration

```objectivec
extern Boolean CFCalendarDecomposeAbsoluteTime(CFCalendarRef calendar, CFAbsoluteTime at, const char *componentDesc, ...);
```

## Parameters

- `calendar`: The calendar to use for the computation.
- `at`: An absolute time.
- `componentDesc`: A string that describes the components provided in the variadic parameters if pointers to storage for each of the desired components. On successful return, the pointers are filled with values of the corresponding components. The type of all units is `int`.

<a id="return-value"></a>

## Return Value

`TRUE` if the function is able to compute the components indicated by the `componentDesc` description string for the given absolute time, and fills the values to the components given in the varargs. Returns `FALSE` if the absolute time falls outside the defined range of the calendar, or the computation cannot be performed.

<a id="Discussion"></a>

## Discussion

The Weekday ordinality, when requested, refers to the next larger (than Week) of the requested units. Some computations can take a relatively long time to perform.

The following example shows how to use this function to determine the current year, month, and day, using an existing calendar (`gregorian`):

```objc
CFCalendarDecomposeAbsoluteTime(gregorian, CFAbsoluteTimeGetCurrent(), "yMd",  &year, &month, &day);
```

## See Also

### Calendrical Calculations

- [CFCalendarAddComponents](cfcalendaraddcomponents.md): Computes the absolute time when specified components are added to a given absolute time.
- [CFCalendarComposeAbsoluteTime](cfcalendarcomposeabsolutetime.md): Computes the absolute time from components in a description string.
- [CFCalendarGetComponentDifference](cfcalendargetcomponentdifference.md): Computes the difference between the two absolute times, in terms of specified calendrical components.
