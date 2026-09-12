> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncprotocol](https://developer.apple.com/documentation/coremedia/cmsyncprotocol)

# CMSyncProtocol

**Framework:** Core Media  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that provides behavior for syncing time.

## Declaration

```swift
protocol CMSyncProtocol : Sendable
```

## Topics

### Getting the Time

- [time](cmsyncprotocol/time.md): The current time.

### Converting Time

- [convertTime(\_:to:)](cmsyncprotocol/converttime%28__to_%29.md): Converts a time from one timebase or clock to another timebase or clock.

### Getting the Time Rate

- [rate(relativeTo:)](cmsyncprotocol/rate%28relativeto_%29.md): Queries the relative rate of one timebase or clock relative to another timebase or clock.
- [rateAndAnchorTime(relativeTo:)](cmsyncprotocol/rateandanchortime%28relativeto_%29.md): Queries the relative rate of one timebase or clock relative to another timebase or clock, and the times of each timebase or clock at which the relative rate went into effect.

### Determining Time Drift

- [mightDrift(relativeTo:)](cmsyncprotocol/mightdrift%28relativeto_%29.md): Returns a Boolean value that indicates whether it’s possible for the clock to drift relative to the input.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CMClock](cmclock.md)
- [CMTimebase](cmtimebase.md)

## See Also

### Data Types

- [CMTimebase](cmtimebase.md): A model of a timeline under application control.
- [CMSync](cmsync.md): A type that represents time syncing.
