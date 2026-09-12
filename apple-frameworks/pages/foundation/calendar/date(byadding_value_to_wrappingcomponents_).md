> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/date(byadding:value:to:wrappingcomponents:)](https://developer.apple.com/documentation/foundation/calendar/date(byadding:value:to:wrappingcomponents:))

# date(byAdding:value:to:wrappingComponents:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new `Date` representing the date calculated by adding an amount of a specific component to a given date.

## Declaration

```swift
func date(byAdding component: Calendar.Component, value: Int, to date: Date, wrappingComponents: Bool = false) -> Date?
```

## Parameters

- `component`: A single component to add.
- `value`: The value of the specified component to add.
- `date`: The starting date.
- `wrappingComponents`: If `true`, the component should be incremented and wrap around to zero/one on overflow, and should not cause higher components to be incremented. The default value is `false`.

<a id="return-value"></a>

## Return Value

A new date, or nil if a date could not be calculated with the given input.

## See Also

### Calculating Dates from Components

- [date(from:)](date%28from_%29.md): Returns a date created from the specified components.
- [date(byAdding:to:wrappingComponents:)](date%28byadding_to_wrappingcomponents_%29.md): Returns a new `Date` representing the date calculated by adding components to a given date.
- [date(bySetting:value:of:)](date%28bysetting_value_of_%29.md): Returns a new `Date` representing the date calculated by setting a specific component to a given time, and trying to keep lower components the same. If the component already has that value, this may result in a date which is the same as the given date.
- [date(bySettingHour:minute:second:of:matchingPolicy:repeatedTimePolicy:direction:)](date%28bysettinghour_minute_second_of_matchingpolicy_repeatedtimepolicy_direction_%29.md): Returns a new `Date` representing the date calculated by setting hour, minute, and second to a given time on a specified `Date`.
