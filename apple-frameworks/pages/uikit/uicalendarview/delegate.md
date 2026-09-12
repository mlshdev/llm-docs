> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/delegate](https://developer.apple.com/documentation/uikit/uicalendarview/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object the calendar view calls for decoration views.

## Declaration

```swift
weak var delegate: (any UICalendarViewDelegate)? { get set }
```

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarView.Decoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarView.DecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorations(forDateComponents:animated:)](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object the calendar view calls for decoration views.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UICalendarViewDelegate> delegate;
```

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarViewDecoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarViewDecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorationsForDateComponents:animated:](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.
