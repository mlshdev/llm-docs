> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldtrackingprovider/worldanchorsharingavailability-swift.enum](https://developer.apple.com/documentation/arkit/worldtrackingprovider/worldanchorsharingavailability-swift.enum)

# WorldTrackingProvider.WorldAnchorSharingAvailability

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 26.0+

Enumeration indicating the availability of world anchor sharing.

## Declaration

```swift
enum WorldAnchorSharingAvailability
```

## Topics

### Enumeration Cases

- [WorldTrackingProvider.WorldAnchorSharingAvailability.available](worldanchorsharingavailability-swift.enum/available.md): World anchors can be shared with nearby participants. This indicates that the device is in a SharePlay session with nearby participants.
- [WorldTrackingProvider.WorldAnchorSharingAvailability.unavailable](worldanchorsharingavailability-swift.enum/unavailable.md): World anchors cannot be shared with nearby participants. This indicates that either there’s no SharePlay session or the session has ended.

### Instance Properties

- [description](worldanchorsharingavailability-swift.enum/description.md): A textual representation of this world anchor sharing availability.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
