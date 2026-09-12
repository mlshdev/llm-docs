> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasecreatewithsourceclock(allocator:sourceclock:timebaseout:)](https://developer.apple.com/documentation/coremedia/cmtimebasecreatewithsourceclock(allocator:sourceclock:timebaseout:))

# CMTimebaseCreateWithSourceClock(allocator:sourceClock:timebaseOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a timebase by using a source clock.

## Declaration

```swift
func CMTimebaseCreateWithSourceClock(allocator: CFAllocator?, sourceClock: CMClock, timebaseOut: UnsafeMutablePointer<CMTimebase?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for creating the timebase.
- `sourceClock`: The source clock.
- `timebaseOut`: Receives the timebase the function creates.

## See Also

### Creating Timebases

- [CMTimebaseCreateWithSourceTimebase(allocator:sourceTimebase:timebaseOut:)](cmtimebasecreatewithsourcetimebase%28allocator_sourcetimebase_timebaseout_%29.md): Creates a timebase by using a source timebase.

# CMTimebaseCreateWithSourceClock (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a timebase by using a source clock.

## Declaration

```objectivec
extern OSStatus CMTimebaseCreateWithSourceClock(CFAllocatorRef allocator, CMClockRef sourceClock, CMTimebaseRef*timebaseOut);
```

## Parameters

- `allocator`: The allocator to use for creating the timebase.
- `sourceClock`: The source clock.
- `timebaseOut`: Receives the timebase the function creates.

## See Also

### Creating Timebases

- [CMTimebaseCreateWithSourceTimebase](cmtimebasecreatewithsourcetimebase%28allocator_sourcetimebase_timebaseout_%29.md): Creates a timebase by using a source timebase.
