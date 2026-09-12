> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarviewdelegate/calendarview(_:didchangevisibledatecomponentsfrom:)](https://developer.apple.com/documentation/uikit/uicalendarviewdelegate/calendarview(_:didchangevisibledatecomponentsfrom:))

# calendarView(\_:didChangeVisibleDateComponentsFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · visionOS 1.0+

## Declaration

```swift
optional func calendarView(_ calendarView: UICalendarView, didChangeVisibleDateComponentsFrom previousDateComponents: DateComponents)
```

## Parameters

- `calendarView`: The @c UICalendarView
- `previousDateComponents`: The previous date components before the visible date components changed.

<a id="discussion"></a>

## Discussion

Called when the visible date has changed from @c previousDateComponents from user interaction.

# calendarView:didChangeVisibleDateComponentsFrom: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · visionOS 1.0+

## Declaration

```objectivec
- (void) calendarView:(UICalendarView *) calendarView didChangeVisibleDateComponentsFrom:(NSDateComponents *) previousDateComponents;
```

## Parameters

- `calendarView`: The @c UICalendarView
- `previousDateComponents`: The previous date components before the visible date components changed.

<a id="discussion"></a>

## Discussion

Called when the visible date has changed from @c previousDateComponents from user interaction.
