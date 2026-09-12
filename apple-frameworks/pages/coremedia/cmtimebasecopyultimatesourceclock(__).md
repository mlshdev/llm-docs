> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasecopyultimatesourceclock(_:)](https://developer.apple.com/documentation/coremedia/cmtimebasecopyultimatesourceclock(_:))

# CMTimebaseCopyUltimateSourceClock(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the source clock that’s the source of all of a timebase’s source timebases.

## Declaration

```swift
func CMTimebaseCopyUltimateSourceClock(_ timebase: CMTimebase) -> CMClock
```

## See Also

### Copying Timebases

- [CMTimebaseCopySource(\_:)](cmtimebasecopysource%28__%29.md): Returns the immediate source — either a clock or timebase — of a timebase.
- [CMTimebaseCopySourceClock(\_:)](cmtimebasecopysourceclock%28__%29.md): Returns the immediate source clock of a timebase.
- [CMTimebaseCopySourceTimebase(\_:)](cmtimebasecopysourcetimebase%28__%29.md): Returns the immediate source timebase of a timebase.

# CMTimebaseCopyUltimateSourceClock (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the source clock that’s the source of all of a timebase’s source timebases.

## Declaration

```objectivec
extern CMClockRefCMTimebaseCopyUltimateSourceClock(CMTimebaseRef timebase);
```

## See Also

### Copying Timebases

- [CMTimebaseCopySource](cmtimebasecopysource%28__%29.md): Returns the immediate source — either a clock or timebase — of a timebase.
- [CMTimebaseCopySourceClock](cmtimebasecopysourceclock%28__%29.md): Returns the immediate source clock of a timebase.
- [CMTimebaseCopySourceTimebase](cmtimebasecopysourcetimebase%28__%29.md): Returns the immediate source timebase of a timebase.
