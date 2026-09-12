> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvtime-q1e](https://developer.apple.com/documentation/corevideo/cvtime-q1e)

# CVTime (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A structure used for storing Core Video time values.

<a id="overview"></a>

## Overview

Core video uses the [CVTime](cvtime.md) and [CVTimeStamp](cvtimestamp.md) structures for storing Core Video time values. You use them to interact with the Core Video display link.

## Topics

### Inspecting the Host Clock

- [CVGetCurrentHostTime()](cvgetcurrenthosttime%28%29.md): Returns the current system time.
- [CVGetHostClockFrequency()](cvgethostclockfrequency%28%29.md): Returns the frequency of updates to the system time.
- [CVGetHostClockMinimumTimeDelta()](cvgethostclockminimumtimedelta%28%29.md): Returns the smallest possible increment in the system time.

### Data Types

- [CVTime](cvtime.md): A structure for reporting Core Video time values.
- [CVTimeStamp](cvtimestamp-api.md): A structure for representing a display timestamp.
- [CVSMPTETime](cvsmptetime.md): A structure for holding an SMPTE time.

### Constants

- [CVTime Values](cvtime-values.md): Keys that represent Core Video time values.

### Enumerations

- [CVSMPTETimeType](cvsmptetimetype.md)
- [CVSMPTETimeFlags](cvsmptetimeflags.md)
- [CVTimeFlags](cvtimeflags.md)
- [CVTimeStampFlags](cvtimestampflags.md)

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Time Management

- [CVDisplayLink](cvdisplaylink-k0k.md): A high-priority thread that notifies your app when a given display will need each frame.

# CVTime (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A structure used for storing Core Video time values.

<a id="overview"></a>

## Overview

Core video uses the [CVTime](cvtime.md) and [CVTimeStamp](cvtimestamp.md) structures for storing Core Video time values. You use them to interact with the Core Video display link.

## Topics

### Inspecting the Host Clock

- [CVGetCurrentHostTime](cvgetcurrenthosttime%28%29.md): Returns the current system time.
- [CVGetHostClockFrequency](cvgethostclockfrequency%28%29.md): Returns the frequency of updates to the system time.
- [CVGetHostClockMinimumTimeDelta](cvgethostclockminimumtimedelta%28%29.md): Returns the smallest possible increment in the system time.

### Data Types

- [CVTime](cvtime.md): A structure for reporting Core Video time values.
- [CVTimeStamp](cvtimestamp-api.md): A structure for representing a display timestamp.
- [CVSMPTETime](cvsmptetime.md): A structure for holding an SMPTE time.

### Constants

- [CVTime Values](cvtime-values.md): Keys that represent Core Video time values.

### Enumerations

- [CVSMPTETimeType](cvsmptetimetype.md)
- [CVSMPTETimeFlags](cvsmptetimeflags.md)
- [CVTimeFlags](cvtimeflags.md)
- [CVTimeStampFlags](cvtimestampflags.md)

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Time Management

- [CVDisplayLink](cvdisplaylink-k0k.md): A high-priority thread that notifies your app when a given display will need each frame.
