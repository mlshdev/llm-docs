> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fssyncflags](https://developer.apple.com/documentation/fskit/fssyncflags)

# FSSyncFlags (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Behavior flags for use with synchronization calls.

## Declaration

```swift
enum FSSyncFlags
```

<a id="overview"></a>

## Overview

These values are based on flags defined in `mount.h`. Since there are system-defined flags that are valid in the kernel but not in FSKit, this type defines its members as options rather than use an enumeration.

## Topics

### Declaring synchronization behaviors

- [FSSyncFlags.wait](fssyncflags/wait.md): A flag for synchronized I/O with file-integrity completion.
- [FSSyncFlags.noWait](fssyncflags/nowait.md): A flag for synchronized I/O that starts I/O but doesn’t wait for it.
- [FSSyncFlags.dWait](fssyncflags/dwait.md): A flag for synchronized I/O with data-integrity completion.

### Initializers

- [init(rawValue:)](fssyncflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing synchronization

- [synchronize(flags:replyHandler:)](fsvolume/handler/synchronize%28flags_replyhandler_%29.md)

# FSSyncFlags (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Behavior flags for use with synchronization calls.

## Declaration

```objectivec
enum FSSyncFlags : NSInteger;
```

<a id="overview"></a>

## Overview

These values are based on flags defined in `mount.h`. Since there are system-defined flags that are valid in the kernel but not in FSKit, this type defines its members as options rather than use an enumeration.

## Topics

### Declaring synchronization behaviors

- [FSSyncFlagsWait](fssyncflags/wait.md): A flag for synchronized I/O with file-integrity completion.
- [FSSyncFlagsNoWait](fssyncflags/nowait.md): A flag for synchronized I/O that starts I/O but doesn’t wait for it.
- [FSSyncFlagsDWait](fssyncflags/dwait.md): A flag for synchronized I/O with data-integrity completion.

## See Also

### Performing synchronization

- [synchronizeWithFlags:replyHandler:](fsvolume/handler/synchronize%28flags_replyhandler_%29.md)
