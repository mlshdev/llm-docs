> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionsingledate/delegate](https://developer.apple.com/documentation/uikit/uicalendarselectionsingledate/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object that a calendar view asks about selectable dates and informs of changes to the selection of a single date.

## Declaration

```swift
weak var delegate: (any UICalendarSelectionSingleDateDelegate)? { get }
```

## See Also

### Setting the selection delegate

- [UICalendarSelectionSingleDateDelegate](../uicalendarselectionsingledatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of a single date.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object that a calendar view asks about selectable dates and informs of changes to the selection of a single date.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UICalendarSelectionSingleDateDelegate> delegate;
```

## See Also

### Setting the selection delegate

- [UICalendarSelectionSingleDateDelegate](../uicalendarselectionsingledatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of a single date.
