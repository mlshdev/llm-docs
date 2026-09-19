> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimebase/settimertofireimmediately(_:)-9t3wi

# setTimerToFireImmediately(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the timer to fire immediately once, overriding any previous calls.

## Declaration

```swift
func setTimerToFireImmediately(_ timer: Timer) throws
```

## See Also

### Setting Timers

- [setTimerNextFireTime(\_:fireTime:)](settimernextfiretime%28__firetime_%29-13hjt.md): Sets the time on the timebase’s timeline at which the timer should fire next.
- [setTimerNextFireTime(\_:fireTime:)](settimernextfiretime%28__firetime_%29-2yvaa.md): Sets the time on the timebase’s timeline at which the timer dispatch source should fire next.
- [setTimerToFireImmediately(\_:)](settimertofireimmediately%28__%29-4903g.md): Sets the timer dispatch source to fire immediately once, overriding any previous calls.
