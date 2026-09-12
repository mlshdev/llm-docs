> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/reloaddecorations(fordatecomponents:animated:)](https://developer.apple.com/documentation/uikit/uicalendarview/reloaddecorations(fordatecomponents:animated:))

# reloadDecorations(forDateComponents:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

## Declaration

```swift
func reloadDecorations(forDateComponents dates: [DateComponents], animated: Bool)
```

## Parameters

- `dates`: An array of dates to reload that you provide as date components.
- `animated`: A Boolean value that indicates whether the calendar view should animate the decoration reload.

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarView.Decoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarView.DecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.

# reloadDecorationsForDateComponents:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

## Declaration

```objectivec
- (void) reloadDecorationsForDateComponents:(NSArray<NSDateComponents *> *) dates animated:(BOOL) animated;
```

## Parameters

- `dates`: An array of dates to reload that you provide as date components.
- `animated`: A Boolean value that indicates whether the calendar view should animate the decoration reload.

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarViewDecoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarViewDecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
