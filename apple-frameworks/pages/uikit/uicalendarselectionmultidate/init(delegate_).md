> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidate/init(delegate:)](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidate/init(delegate:))

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an object that tracks multiple dates a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

## Declaration

```swift
init(delegate: (any UICalendarSelectionMultiDateDelegate)?)
```

## Parameters

- `delegate`: A delegate object that a calendar view asks for selectable dates, and informs of changes to the selection of multiple dates.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an object that tracks multiple dates a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UICalendarSelectionMultiDateDelegate>) delegate;
```

## Parameters

- `delegate`: A delegate object that a calendar view asks for selectable dates, and informs of changes to the selection of multiple dates.
