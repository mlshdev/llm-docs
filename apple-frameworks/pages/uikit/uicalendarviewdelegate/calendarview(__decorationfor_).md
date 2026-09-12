> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarviewdelegate/calendarview(_:decorationfor:)](https://developer.apple.com/documentation/uikit/uicalendarviewdelegate/calendarview(_:decorationfor:))

# calendarView(\_:decorationFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a calendar view decoration for the date represented by the date components you provide.

## Declaration

```swift
optional func calendarView(_ calendarView: UICalendarView, decorationFor dateComponents: DateComponents) -> UICalendarView.Decoration?
```

## Parameters

- `calendarView`: The calendar view object requesting the decoration.
- `dateComponents`: Date components that represent the date for the calendar view to display a decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

# calendarView:decorationForDateComponents: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a calendar view decoration for the date represented by the date components you provide.

## Declaration

```objectivec
- (UICalendarViewDecoration *) calendarView:(UICalendarView *) calendarView decorationForDateComponents:(NSDateComponents *) dateComponents;
```

## Parameters

- `calendarView`: The calendar view object requesting the decoration.
- `dateComponents`: Date components that represent the date for the calendar view to display a decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.
