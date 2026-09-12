> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewcontroller/editviewdelegate](https://developer.apple.com/documentation/eventkitui/ekeventeditviewcontroller/editviewdelegate)

# editViewDelegate (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to notify when editing an event.

## Declaration

```swift
weak var editViewDelegate: (any EKEventEditViewDelegate)? { get set }
```

## See Also

### Managing the Event Editing Interface

- [EKEventEditViewDelegate](../ekeventeditviewdelegate.md): A notification sent to the delegate when the user finishes editing an event.

# editViewDelegate (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate to notify when editing an event.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<EKEventEditViewDelegate> editViewDelegate;
```

## See Also

### Managing the Event Editing Interface

- [EKEventEditViewDelegate](../ekeventeditviewdelegate.md): A notification sent to the delegate when the user finishes editing an event.
