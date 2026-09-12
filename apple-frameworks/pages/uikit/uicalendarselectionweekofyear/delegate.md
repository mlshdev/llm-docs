> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionweekofyear/delegate](https://developer.apple.com/documentation/uikit/uicalendarselectionweekofyear/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A delegate object that a calendar view asks about selectable weeks and informs of changes to the week selection.

## Declaration

```swift
weak var delegate: (any UICalendarSelectionWeekOfYearDelegate)? { get }
```

## See Also

### Setting the selection delegate

- [UICalendarSelectionWeekOfYearDelegate](../uicalendarselectionweekofyeardelegate.md): A set of methods you implement to provide selectable weeks and handle changes to the week selection in a calendar view.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A delegate object that a calendar view asks about selectable weeks and informs of changes to the week selection.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UICalendarSelectionWeekOfYearDelegate> delegate;
```

## See Also

### Setting the selection delegate

- [UICalendarSelectionWeekOfYearDelegate](../uicalendarselectionweekofyeardelegate.md): A set of methods you implement to provide selectable weeks and handle changes to the week selection in a calendar view.
