> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/attendees](https://developer.apple.com/documentation/eventkit/ekcalendaritem/attendees)

# attendees (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The attendees associated with the calendar item, as an array of [EKParticipant](../ekparticipant.md) objects.

## Declaration

```swift
var attendees: [EKParticipant]? { get }
```

<a id="Discussion"></a>

## Discussion

This property is read-only; it is not possible to add attendees with Event Kit. This property is `nil` if the calendar item has no attendees.

## See Also

### Displaying Attendees

- [hasAttendees](hasattendees.md): A Boolean value that indicates whether the calendar item has attendees.

# attendees (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The attendees associated with the calendar item, as an array of [EKParticipant](../ekparticipant.md) objects.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<__kindof EKParticipant *> * attendees;
```

<a id="Discussion"></a>

## Discussion

This property is read-only; it is not possible to add attendees with Event Kit. This property is `nil` if the calendar item has no attendees.

## See Also

### Displaying Attendees

- [hasAttendees](hasattendees.md): A Boolean value that indicates whether the calendar item has attendees.
