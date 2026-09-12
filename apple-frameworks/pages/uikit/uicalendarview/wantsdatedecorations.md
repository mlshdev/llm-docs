> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/wantsdatedecorations](https://developer.apple.com/documentation/uikit/uicalendarview/wantsdatedecorations)

# wantsDateDecorations (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the calendar view displays date decorations.

## Declaration

```swift
var wantsDateDecorations: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [true](https://developer.apple.com/documentation/swift/true). You must implement `UICalendarDateDelegate`’s [calendarView(\_:decorationFor:)](../uicalendarviewdelegate/calendarview%28__decorationfor_%29.md) to provide decorations that the calendar view shows.

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarView.Decoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarView.DecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [reloadDecorations(forDateComponents:animated:)](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

# wantsDateDecorations (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the calendar view displays date decorations.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL wantsDateDecorations;
```

<a id="Discussion"></a>

## Discussion

Defaults to [true](https://developer.apple.com/documentation/swift/true). You must implement `UICalendarDateDelegate`’s [calendarView:decorationForDateComponents:](../uicalendarviewdelegate/calendarview%28__decorationfor_%29.md) to provide decorations that the calendar view shows.

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarViewDecoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarViewDecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [reloadDecorationsForDateComponents:animated:](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.
