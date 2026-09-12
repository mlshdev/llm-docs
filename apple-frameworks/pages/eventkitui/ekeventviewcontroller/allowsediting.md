> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventviewcontroller/allowsediting](https://developer.apple.com/documentation/eventkitui/ekeventviewcontroller/allowsediting)

# allowsEditing (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that determines whether the user may edit the event.

## Declaration

```swift
var allowsEditing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false) (the default), the event is not editable. If [true](https://developer.apple.com/documentation/swift/true), an Edit button appears, allowing the user to change properties of the event. This property applies only to events in calendars created by the user. For example, it doesn’t apply to invitations sent by another user.

## See Also

### Displaying and Editing Event Previews

- [allowsCalendarPreview](allowscalendarpreview.md): A Boolean that determines whether the user can preview the event in a calendar day.

# allowsEditing (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that determines whether the user may edit the event.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsEditing;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false) (the default), the event is not editable. If [true](https://developer.apple.com/documentation/swift/true), an Edit button appears, allowing the user to change properties of the event. This property applies only to events in calendars created by the user. For example, it doesn’t apply to invitations sent by another user.

## See Also

### Displaying and Editing Event Previews

- [allowsCalendarPreview](allowscalendarpreview.md): A Boolean that determines whether the user can preview the event in a calendar day.
