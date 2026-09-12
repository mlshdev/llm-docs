> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/participantstate/seat-swift.property](https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstate/seat-swift.property)

# seat

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The seat assigned to this participant.

## Declaration

```swift
let seat: SystemCoordinator.ParticipantState.Seat?
```

<a id="discussion"></a>

## Discussion

If this value is `nil`, either the participant is non-spatial or there is no seat available for the participant.
