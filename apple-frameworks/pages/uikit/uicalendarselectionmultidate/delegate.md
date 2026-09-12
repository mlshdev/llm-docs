> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidate/delegate](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidate/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object that a calendar view asks for selectable dates and informs of changes to the selection of multiple dates.

## Declaration

```swift
weak var delegate: (any UICalendarSelectionMultiDateDelegate)? { get }
```

## See Also

### Setting the selection delegate

- [UICalendarSelectionMultiDateDelegate](../uicalendarselectionmultidatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of multiple dates.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object that a calendar view asks for selectable dates and informs of changes to the selection of multiple dates.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UICalendarSelectionMultiDateDelegate> delegate;
```

## See Also

### Setting the selection delegate

- [UICalendarSelectionMultiDateDelegate](../uicalendarselectionmultidatedelegate.md): A set of methods you implement to provide selectable dates and handle changes to the selection of multiple dates.
