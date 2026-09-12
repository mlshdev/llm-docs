> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclockmightdrift(_:otherclock:)](https://developer.apple.com/documentation/coremedia/cmclockmightdrift(_:otherclock:))

# CMClockMightDrift(\_:otherClock:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether it’s possible for two clocks to drift relative to each other.

## Declaration

```swift
func CMClockMightDrift(_ clock: CMClock, otherClock: CMClock) -> Bool
```

## Parameters

- `clock`: The first clock to compare.
- `otherClock`: The second clock to compare.

## See Also

### Determining Clock Drift

- [CMSyncMightDrift(\_:\_:)](cmsyncmightdrift%28____%29.md): Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to the other.

# CMClockMightDrift (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether it’s possible for two clocks to drift relative to each other.

## Declaration

```objectivec
extern Boolean CMClockMightDrift(CMClockRef clock, CMClockRef otherClock);
```

## Parameters

- `clock`: The first clock to compare.
- `otherClock`: The second clock to compare.

## See Also

### Determining Clock Drift

- [CMSyncMightDrift](cmsyncmightdrift%28____%29.md): Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to the other.
