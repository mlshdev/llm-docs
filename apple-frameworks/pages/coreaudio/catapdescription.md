> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription](https://developer.apple.com/documentation/coreaudio/catapdescription)

# CATapDescription (Swift)

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

This class describes a tap object that contains an input stream.

## Declaration

```swift
class CATapDescription
```

<a id="Overview"></a>

## Overview

The input stream is a mix of all of the specified processes’ output audio.

## Topics

### Initializers

- [init()](catapdescription/init%28%29.md)
- [init(excludingProcesses:deviceUID:stream:)](catapdescription/init%28excludingprocesses_deviceuid_stream_%29.md)
- [init(monoGlobalTapButExcludeProcesses:)](catapdescription/init%28monoglobaltapbutexcludeprocesses_%29.md)
- [init(monoMixdownOfProcesses:)](catapdescription/init%28monomixdownofprocesses_%29.md)
- [init(processes:deviceUID:stream:)](catapdescription/init%28processes_deviceuid_stream_%29.md)
- [init(stereoGlobalTapButExcludeProcesses:)](catapdescription/init%28stereoglobaltapbutexcludeprocesses_%29.md)
- [init(stereoMixdownOfProcesses:)](catapdescription/init%28stereomixdownofprocesses_%29.md)

### Instance Properties

- [bundleIDs](catapdescription/bundleids.md)
- [deviceUID](catapdescription/deviceuid.md)
- [isExclusive](catapdescription/isexclusive.md)
- [isMixdown](catapdescription/ismixdown.md)
- [isMono](catapdescription/ismono.md)
- [isPrivate](catapdescription/isprivate.md)
- [isProcessRestoreEnabled](catapdescription/isprocessrestoreenabled.md)
- [muteBehavior](catapdescription/mutebehavior.md)
- [name](catapdescription/name.md)
- [processes](catapdescription/processes-1m4cr.md)
- [stream](catapdescription/stream-ajk3.md)
- [uuid](catapdescription/uuid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# CATapDescription (Objective-C)

**Framework:** Core Audio  
**Kind:** Class  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

This class describes a tap object that contains an input stream.

## Declaration

```objectivec
@interface CATapDescription : NSObject
```

<a id="Overview"></a>

## Overview

The input stream is a mix of all of the specified processes’ output audio.

## Topics

### Initializers

- [init](catapdescription/init%28%29.md)

### Instance Properties

- [bundleIDs](catapdescription/bundleids.md)
- [deviceUID](catapdescription/deviceuid.md)
- [exclusive](catapdescription/isexclusive.md)
- [mixdown](catapdescription/ismixdown.md)
- [mono](catapdescription/ismono.md)
- [privateTap](catapdescription/isprivate.md)
- [processRestoreEnabled](catapdescription/isprocessrestoreenabled.md)
- [muteBehavior](catapdescription/mutebehavior.md)
- [name](catapdescription/name.md)
- [processes](catapdescription/processes-3cdzw.md)
- [stream](catapdescription/stream-u4ff.md)
- [UUID](catapdescription/uuid.md)

### Instance Methods

- [initExcludingProcesses:andDeviceUID:withStream:](catapdescription/initexcludingprocesses_anddeviceuid_withstream_.md)
- [initMonoGlobalTapButExcludeProcesses:](catapdescription/initmonoglobaltapbutexcludeprocesses_.md)
- [initMonoMixdownOfProcesses:](catapdescription/initmonomixdownofprocesses_.md)
- [initStereoGlobalTapButExcludeProcesses:](catapdescription/initstereoglobaltapbutexcludeprocesses_.md)
- [initStereoMixdownOfProcesses:](catapdescription/initstereomixdownofprocesses_.md)
- [initWithProcesses:andDeviceUID:withStream:](catapdescription/initwithprocesses_anddeviceuid_withstream_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
