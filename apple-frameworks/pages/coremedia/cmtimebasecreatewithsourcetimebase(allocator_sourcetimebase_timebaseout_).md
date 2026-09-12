> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebasecreatewithsourcetimebase(allocator:sourcetimebase:timebaseout:)](https://developer.apple.com/documentation/coremedia/cmtimebasecreatewithsourcetimebase(allocator:sourcetimebase:timebaseout:))

# CMTimebaseCreateWithSourceTimebase(allocator:sourceTimebase:timebaseOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a timebase by using a source timebase.

## Declaration

```swift
func CMTimebaseCreateWithSourceTimebase(allocator: CFAllocator?, sourceTimebase: CMTimebase, timebaseOut: UnsafeMutablePointer<CMTimebase?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for creating the timebase.
- `sourceTimebase`: The source timebase.
- `timebaseOut`: Receives the timebase the function creates.

## See Also

### Creating Timebases

- [CMTimebaseCreateWithSourceClock(allocator:sourceClock:timebaseOut:)](cmtimebasecreatewithsourceclock%28allocator_sourceclock_timebaseout_%29.md): Creates a timebase by using a source clock.

# CMTimebaseCreateWithSourceTimebase (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a timebase by using a source timebase.

## Declaration

```objectivec
extern OSStatus CMTimebaseCreateWithSourceTimebase(CFAllocatorRef allocator, CMTimebaseRef sourceTimebase, CMTimebaseRef*timebaseOut);
```

## Parameters

- `allocator`: The allocator to use for creating the timebase.
- `sourceTimebase`: The source timebase.
- `timebaseOut`: Receives the timebase the function creates.

## See Also

### Creating Timebases

- [CMTimebaseCreateWithSourceClock](cmtimebasecreatewithsourceclock%28allocator_sourceclock_timebaseout_%29.md): Creates a timebase by using a source clock.
