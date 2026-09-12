> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/localparticipant](https://developer.apple.com/documentation/groupactivities/groupsession/localparticipant)

# localParticipant

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The participant on the current device.

## Declaration

```swift
final var localParticipant: Participant { get }
```

<a id="discussion"></a>

## Discussion

Use this property to differentiate the participant on the current device from participants on other devices.

## See Also

### Getting the participants

- [activeParticipants](activeparticipants.md): The set of participants currently engaged in the activity.
