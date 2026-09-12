> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsyncmightdrift(_:_:)](https://developer.apple.com/documentation/coremedia/cmsyncmightdrift(_:_:))

# CMSyncMightDrift(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to the other.

## Declaration

```swift
func CMSyncMightDrift(_ clockOrTimebase1: CMClockOrTimebase, _ clockOrTimebase2: CMClockOrTimebase) -> Bool
```

<a id="Discussion"></a>

## Discussion

A timebase can drift relative to another if they are ultimately mastered by clocks that can drift relative to each other.

## See Also

### Determining Clock Drift

- [CMClockMightDrift(\_:otherClock:)](cmclockmightdrift%28__otherclock_%29.md): Returns a Boolean value that indicates whether it’s possible for two clocks to drift relative to each other.

# CMSyncMightDrift (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to the other.

## Declaration

```objectivec
extern Boolean CMSyncMightDrift(CMClockOrTimebaseRef clockOrTimebase1, CMClockOrTimebaseRef clockOrTimebase2);
```

<a id="Discussion"></a>

## Discussion

A timebase can drift relative to another if they are ultimately mastered by clocks that can drift relative to each other.

## See Also

### Determining Clock Drift

- [CMClockMightDrift](cmclockmightdrift%28__otherclock_%29.md): Returns a Boolean value that indicates whether it’s possible for two clocks to drift relative to each other.
