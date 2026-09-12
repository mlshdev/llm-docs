> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/fontdesign](https://developer.apple.com/documentation/uikit/uicalendarview/fontdesign)

# fontDesign (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A font design that the calendar view uses for displaying calendar text.

## Declaration

```swift
var fontDesign: UIFontDescriptor.SystemDesign { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [default](../uifontdescriptor/systemdesign/default.md).

## See Also

### Customizing the calendar display

- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarView.Decoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarView.DecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorations(forDateComponents:animated:)](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

# fontDesign (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A font design that the calendar view uses for displaying calendar text.

## Declaration

```objectivec
@property (nonatomic, copy, nonnull) UIFontDescriptorSystemDesign fontDesign;
```

<a id="Discussion"></a>

## Discussion

Defaults to [UIFontDescriptorSystemDesignDefault](../uifontdescriptor/systemdesign/default.md).

## See Also

### Customizing the calendar display

- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarViewDecoration](decoration.md): A view that a calendar view displays for a specific date.
- [UICalendarViewDecorationSize](decorationsize.md): Constants that indicate the relative size of a decoration in a calendar view.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorationsForDateComponents:animated:](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.
