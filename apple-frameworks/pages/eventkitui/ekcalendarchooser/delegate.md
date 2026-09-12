> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekcalendarchooser/delegate](https://developer.apple.com/documentation/eventkitui/ekcalendarchooser/delegate)

# delegate (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The calendar chooser’s delegate.

## Declaration

```swift
weak var delegate: (any EKCalendarChooserDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

This object should conform to [EKCalendarChooserDelegate](../ekcalendarchooserdelegate.md).

## See Also

### Managing Calendar Selection

- [EKCalendarChooserDelegate](../ekcalendarchooserdelegate.md): Methods a calendar chooser’s delegate may use to receive notifications.

# delegate (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The calendar chooser’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<EKCalendarChooserDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

This object should conform to [EKCalendarChooserDelegate](../ekcalendarchooserdelegate.md).

## See Also

### Managing Calendar Selection

- [EKCalendarChooserDelegate](../ekcalendarchooserdelegate.md): Methods a calendar chooser’s delegate may use to receive notifications.
