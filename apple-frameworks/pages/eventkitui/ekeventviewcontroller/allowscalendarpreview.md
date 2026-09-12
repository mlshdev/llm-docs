> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventviewcontroller/allowscalendarpreview](https://developer.apple.com/documentation/eventkitui/ekeventviewcontroller/allowscalendarpreview)

# allowsCalendarPreview (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that determines whether the user can preview the event in a calendar day.

## Declaration

```swift
var allowsCalendarPreview: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the event is an invitation and this property is [true](https://developer.apple.com/documentation/swift/true), then a table cell appears allowing the user to preview the event along with other events on the same day. If [false](https://developer.apple.com/documentation/swift/false) (the default), the calendar day preview does not appear. This property applies only to invitations.

## See Also

### Displaying and Editing Event Previews

- [allowsEditing](allowsediting.md): A Boolean that determines whether the user may edit the event.

# allowsCalendarPreview (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that determines whether the user can preview the event in a calendar day.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsCalendarPreview;
```

<a id="Discussion"></a>

## Discussion

If the event is an invitation and this property is [true](https://developer.apple.com/documentation/swift/true), then a table cell appears allowing the user to preview the event along with other events on the same day. If [false](https://developer.apple.com/documentation/swift/false) (the default), the calendar day preview does not appear. This property applies only to invitations.

## See Also

### Displaying and Editing Event Previews

- [allowsEditing](allowsediting.md): A Boolean that determines whether the user may edit the event.
