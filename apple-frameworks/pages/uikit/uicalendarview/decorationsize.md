> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/decorationsize](https://developer.apple.com/documentation/uikit/uicalendarview/decorationsize)

# UICalendarView.DecorationSize (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that indicate the relative size of a decoration in a calendar view.

## Declaration

```swift
enum DecorationSize
```

## Topics

### Decoration View Sizes

- [UICalendarView.DecorationSize.large](decorationsize/large.md): A large relative decoration size in a calendar view.
- [UICalendarView.DecorationSize.medium](decorationsize/medium.md): A medium relative decoration size in a calendar view.
- [UICalendarView.DecorationSize.small](decorationsize/small.md): A small relative decoration size in a calendar view.

### Initializers

- [init(rawValue:)](decorationsize/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarView.Decoration](decoration.md): A view that a calendar view displays for a specific date.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorations(forDateComponents:animated:)](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.

# UICalendarViewDecorationSize (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that indicate the relative size of a decoration in a calendar view.

## Declaration

```objectivec
enum UICalendarViewDecorationSize : NSInteger;
```

## Topics

### Decoration View Sizes

- [UICalendarViewDecorationSizeLarge](decorationsize/large.md): A large relative decoration size in a calendar view.
- [UICalendarViewDecorationSizeMedium](decorationsize/medium.md): A medium relative decoration size in a calendar view.
- [UICalendarViewDecorationSizeSmall](decorationsize/small.md): A small relative decoration size in a calendar view.

## See Also

### Customizing the calendar display

- [fontDesign](fontdesign.md): A font design that the calendar view uses for displaying calendar text.
- [delegate](delegate.md): A delegate object the calendar view calls for decoration views.
- [UICalendarViewDelegate](../uicalendarviewdelegate.md): An object that a calendar view uses to display decorations for dates.
- [UICalendarViewDecoration](decoration.md): A view that a calendar view displays for a specific date.
- [wantsDateDecorations](wantsdatedecorations.md): A Boolean value that indicates whether the calendar view displays date decorations.
- [reloadDecorationsForDateComponents:animated:](reloaddecorations%28fordatecomponents_animated_%29.md): Reloads the decorations for the dates you provide, with an option to animate the decoration reload.
