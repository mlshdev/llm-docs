> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicalendarselectionsingledate/init(delegate:)

# init(delegate:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an object that tracks a date a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

## Declaration

```swift
init(delegate: (any UICalendarSelectionSingleDateDelegate)?)
```

## Parameters

- `delegate`: A delegate object that a calendar view asks about selectable dates, and informs of changes to the selection of a single date.

# initWithDelegate: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates an object that tracks a date a user selects from a calendar view, with an optional delegate to manage selectable dates and selection changes.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<UICalendarSelectionSingleDateDelegate>) delegate;
```

## Parameters

- `delegate`: A delegate object that a calendar view asks about selectable dates, and informs of changes to the selection of a single date.
