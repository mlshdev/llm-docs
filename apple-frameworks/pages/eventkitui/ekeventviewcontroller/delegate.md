> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/eventkitui/ekeventviewcontroller/delegate

# delegate (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The event view controller’s delegate.

## Declaration

```swift
weak var delegate: (any EKEventViewDelegate)? { get set }
```

## See Also

### Dismissing the Event Interface

- [EKEventViewDelegate](../ekeventviewdelegate.md): Delegates used to display details for calendar events.

# delegate (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The event view controller’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<EKEventViewDelegate> delegate;
```

## See Also

### Dismissing the Event Interface

- [EKEventViewDelegate](../ekeventviewdelegate.md): Delegates used to display details for calendar events.
