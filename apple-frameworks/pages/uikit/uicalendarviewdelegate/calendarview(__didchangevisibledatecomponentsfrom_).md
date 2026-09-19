> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicalendarviewdelegate/calendarview(_:didchangevisibledatecomponentsfrom:)

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
