> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldanchor/init(originfromanchortransform:sharedwithnearbyparticipants:)](https://developer.apple.com/documentation/arkit/worldanchor/init(originfromanchortransform:sharedwithnearbyparticipants:))

# init(originFromAnchorTransform:sharedWithNearbyParticipants:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Initialize a world anchor with a transform and indicate if it should be shared with nearby participants.

## Declaration

```swift
init(originFromAnchorTransform: simd_float4x4, sharedWithNearbyParticipants: Bool)
```

## Parameters

- `originFromAnchorTransform`: The transform from the world anchor to the origin coordinate system.
- `sharedWithNearbyParticipants`: Indicate if the anchor should be shared with nearby participants.

<a id="discussion"></a>

## Discussion

> **Note**

> - Nearby participants refer to participants that are nearby to the local participant in a SharePlay session.
> - World anchors that are marked for sharing do not get persisted and their lifetime is limited to that of the SharePlay session.
