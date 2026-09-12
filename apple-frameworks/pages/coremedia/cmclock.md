> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmclock](https://developer.apple.com/documentation/coremedia/cmclock)

# CMClock (Swift)

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a source of time.

## Declaration

```swift
class CMClock
```

<a id="overview"></a>

## Overview

A clock represents a source of time information: a piece of hardware that measures the passage of time. One example of a clock is the host time clock, accessible via [CMClockGetHostTimeClock()](cmclockgethosttimeclock%28%29.md). It measures time using the CPU system clock, which in macOS is `mach_absolute_time()`. Every audio device is also a clock because the audio samples that it outputs or inputs each have a defined duration (for example, 1/48000 of a second for 48 kHz audio).

`CMClocks` are read-only; they cannot be stopped or started, and the current time cannot be set. A `CMClock` has one primary function, [CMClockGetTime(\_:)](cmclockgettime%28__%29.md), which tells what time it is now. Additionally, the `CMSync` infrastructure monitors relative drift between `CMClocks`.

## Topics

### Inspecting a Clock

- [time](cmclock/time.md): The current time.
- [typeID](cmclock/typeid.md): The Core Foundation identifier that corresponds to the clock structure.

### Stopping a Clock

- [invalidate()](cmclock/invalidate%28%29.md): Stops the clock.

### Getting the Host Time

- [hostTimeClock](cmclock/hosttimeclock.md): The singleton clock that the system identifies as host time.

### Getting Time and Devices

- [anchorTime()](cmclock/anchortime%28%29.md): Returns the current time from a clock and the matching time from the clock’s reference clock.
- [audioDevice()](cmclock/audiodevice%28%29.md): Returns the audio device the clock tracks.
- [setAudioDeviceID(\_:)](cmclock/setaudiodeviceid%28__%29.md): Sets the audio device by using the device identifier.
- [setAudioDeviceUID(\_:)](cmclock/setaudiodeviceuid%28__%29.md): Sets the audio device by using the unique device identifier.

### Determining Time Drift

- [mightDrift(relativeTo:)](cmclock/mightdrift%28relativeto_%29.md): Returns a Boolean value that indicates whether it’s possible for one timebase or clock to drift relative to another.

### Converting Time

- [convertHostTimeToSystemUnits(\_:)](cmclock/converthosttimetosystemunits%28__%29.md): Converts a host time from a time structure to the host time’s native units.
- [convertSystemUnitsToHostTime(\_:)](cmclock/convertsystemunitstohosttime%28__%29.md): Converts a host time from native units to a time structure.

### Constants

- [CMClock.Error](cmclock/error.md): Constants that describe clock errors.

### Structures

- [CMClock.DisplayGenlockModeChangedMessage](cmclock/displaygenlockmodechangedmessage.md): A message delivered when the display mode changes from genlock to non-genlock or vice versa.
- [CMClock.StartTimePattern](cmclock/starttimepattern.md)

### Initializers

- [init(referencing:)](cmclock/init%28referencing_%29.md)

### Instance Properties

- [implementsPreferredStartTimePattern](cmclock/implementspreferredstarttimepattern.md): Indicates whether this clock implements preferred start time patterns.

### Instance Methods

- [nextPreferredStartTimePattern()](cmclock/nextpreferredstarttimepattern%28%29.md): Returns the pattern of preferred start times, such as for synchronization with an external genlock signal.

### Type Aliases

- [CMClock.T](cmclock/t.md)

### Type Properties

- [genlockClock](cmclock/genlockclock.md)
- [isAnyDisplaySynchronizedToLockedGenlockSignal](cmclock/isanydisplaysynchronizedtolockedgenlocksignal.md)

### Default Implementations

- [CMSyncProtocol Implementations](cmclock/cmsyncprotocol-implementations.md)

## Relationships

### Conforms To

- [CMSyncProtocol](cmsyncprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CMClockOrTimebase](cmclockortimebase.md): A type you use in argument lists and function results to indicate that you can pass either a clock or timebase.
- [CMClockGetTypeID()](cmclockgettypeid%28%29.md): Returns the core foundation type identifier of a clock type.

# CMClockRef (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a source of time.

## Declaration

```objectivec
typedef struct OpaqueCMClock * CMClockRef;
```

<a id="overview"></a>

## Overview

A clock represents a source of time information: a piece of hardware that measures the passage of time. One example of a clock is the host time clock, accessible via [CMClockGetHostTimeClock](cmclockgethosttimeclock%28%29.md). It measures time using the CPU system clock, which in macOS is `mach_absolute_time()`. Every audio device is also a clock because the audio samples that it outputs or inputs each have a defined duration (for example, 1/48000 of a second for 48 kHz audio).

`CMClocks` are read-only; they cannot be stopped or started, and the current time cannot be set. A `CMClock` has one primary function, [CMClockGetTime](cmclockgettime%28__%29.md), which tells what time it is now. Additionally, the `CMSync` infrastructure monitors relative drift between `CMClocks`.

## See Also

### Data Types

- [CMClockOrTimebaseRef](cmclockortimebase.md): A type you use in argument lists and function results to indicate that you can pass either a clock or timebase.
- [CMClockGetTypeID](cmclockgettypeid%28%29.md): Returns the core foundation type identifier of a clock type.
