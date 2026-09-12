> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionevents/began/penetrationdistance](https://developer.apple.com/documentation/realitykit/collisionevents/began/penetrationdistance)

# penetrationDistance

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The estimated distance of overlap between the two colliding entities in scene coordinate space.

## Declaration

```swift
var penetrationDistance: Float { get }
```

<a id="discussion"></a>

## Discussion

This is the maximum penetration distance for all contacts, for more detailed penetration distance see [contacts](contacts.md) and [fullContactInformation](../../collisioncomponent/collisionoptions-swift.struct/fullcontactinformation.md).
