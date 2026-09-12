> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/hasattendees](https://developer.apple.com/documentation/eventkit/ekcalendaritem/hasattendees)

# hasAttendees (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the calendar item has attendees.

## Declaration

```swift
var hasAttendees: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar item has attendees; otherwise it does not.

## See Also

### Displaying Attendees

- [attendees](attendees.md): The attendees associated with the calendar item, as an array of [EKParticipant](../ekparticipant.md) objects.

# hasAttendees (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the calendar item has attendees.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAttendees;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar item has attendees; otherwise it does not.

## See Also

### Displaying Attendees

- [attendees](attendees.md): The attendees associated with the calendar item, as an array of [EKParticipant](../ekparticipant.md) objects.
