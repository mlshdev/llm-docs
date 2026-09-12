> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/audioaccessoryheadtracking/handler](https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/handler)

# AudioAccessoryHeadTracking.Handler

**Framework:** AudioAccessoryKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+

## Declaration

```swift
protocol Handler : Sendable
```

## Topics

### Instance Methods

- [activate(for:)](handler/activate%28for_%29.md): Called when a head-tracking session has been established with the host.
- [handleAccessorySensorMessage(\_:)](handler/handleaccessorysensormessage%28__%29.md): Called when a `TransportMessage` arrives from the accessory’s transport extension on the inbound channel.
- [headTrackingStateDidChange(isActive:)](handler/headtrackingstatedidchange%28isactive_%29.md): Called when the user-facing Head Tracking state for this accessory changes (e.g. via Settings or Control Center).
- [invalidate()](handler/invalidate%28%29.md): Called when the head-tracking session has been invalidated.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
