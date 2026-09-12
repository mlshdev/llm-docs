> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/participant/isnearbywithlocalparticipant](https://developer.apple.com/documentation/groupactivities/participant/isnearbywithlocalparticipant)

# isNearbyWithLocalParticipant

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether the participant is physically nearby with the local participant.

## Declaration

```swift
var isNearbyWithLocalParticipant: Bool { get }
```

## Mentioned In

- [Configure your visionOS app for sharing with people nearby](../configure-your-app-for-sharing-with-people-nearby.md)

<a id="discussion"></a>

## Discussion

This property is always true for the local participant.

You can observe which remote participants are nearby with the [$activeParticipants](../groupsession/$activeparticipants.md) publisher.

```swift
for await activeParticipants in session.$activeParticipants.values {
    // Ignore the local participant value that defaults to 'true'.
    self.isNearbyWithOthers = activeParticipants.contains {
         $0 != session.localParticipant && $0.isNearbyWithLocalParticipant
    }
}
```
