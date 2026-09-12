> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarviewdelegate](https://developer.apple.com/documentation/uikit/uicalendarviewdelegate)

# UICalendarViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that a calendar view uses to display decorations for dates.

## Declaration

```swift
@MainActor protocol UICalendarViewDelegate : NSObjectProtocol
```

## Topics

### Providing calendar view decorations

- [calendarView(\_:decorationFor:)](uicalendarviewdelegate/calendarview%28__decorationfor_%29.md): Creates a calendar view decoration for the date represented by the date components you provide.

### Instance Methods

- [calendarView(\_:didChangeVisibleDateComponentsFrom:)](uicalendarviewdelegate/calendarview%28__didchangevisibledatecomponentsfrom_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the calendar display

- [fontDesign](uicalendarview/fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](uicalendarview/delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarView.Decoration](uicalendarview/decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarView.DecorationSize](uicalendarview/decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](uicalendarview/wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorations(forDateComponents:animated:)](uicalendarview/reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

# UICalendarViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that a calendar view uses to display decorations for dates.

## Declaration

```objectivec
@protocol UICalendarViewDelegate <NSObject>
```

## Topics

### Providing calendar view decorations

- [calendarView:decorationForDateComponents:](uicalendarviewdelegate/calendarview%28__decorationfor_%29.md): Creates a calendar view decoration for the date represented by the date components you provide.

### Instance Methods

- [calendarView:didChangeVisibleDateComponentsFrom:](uicalendarviewdelegate/calendarview%28__didchangevisibledatecomponentsfrom_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the calendar display

- [fontDesign](uicalendarview/fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](uicalendarview/delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDecoration](uicalendarview/decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarViewDecorationSize](uicalendarview/decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](uicalendarview/wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorationsForDateComponents:animated:](uicalendarview/reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.
