> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybacksuspension](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension)

# AVCoordinatedPlaybackSuspension (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents a temporary suspension of coordinated playback.

## Declaration

```swift
class AVCoordinatedPlaybackSuspension
```

<a id="overview"></a>

## Overview

See the playback coordinator’s [beginSuspension(for:)](avplaybackcoordinator/beginsuspension%28for_%29.md) method for details about suspending playback.

## Topics

### Inspecting a suspension

- [beginDate](avcoordinatedplaybacksuspension/begindate.md): The time the suspension begins.
- [reason](avcoordinatedplaybacksuspension/reason-swift.property.md): The reason for the suspension.
- [AVCoordinatedPlaybackSuspension.Reason](avcoordinatedplaybacksuspension/reason-swift.struct.md): Constants that identify playback suspension reasons.

### Ending a suspension

- [end()](avcoordinatedplaybacksuspension/end%28%29.md): Ends a suspension.
- [end(proposingNewTime:)](avcoordinatedplaybacksuspension/end%28proposingnewtime_%29.md): Ends a suspension and proposes a new playback time to the group.

### Initializers

- [init(\_:)](avcoordinatedplaybacksuspension/reason-swift.struct/init%28__%29.md): Creates a suspension with a string.
- [init(rawValue:)](avcoordinatedplaybacksuspension/reason-swift.struct/init%28rawvalue_%29.md): Creates a suspension with a raw string value.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Suspending state coordination

- [beginSuspension(for:)](avplaybackcoordinator/beginsuspension%28for_%29.md): Tells the coordinator to stop sending playback commands temporarily when the playback object disconnects from the group activity.
- [expectedItemTime(atHostTime:)](avplaybackcoordinator/expecteditemtime%28athosttime_%29.md): Returns a time in the current item’s timeline that the coordinator expects to play at the specified host time.

# AVCoordinatedPlaybackSuspension (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An object that represents a temporary suspension of coordinated playback.

## Declaration

```objectivec
@interface AVCoordinatedPlaybackSuspension : NSObject
```

<a id="overview"></a>

## Overview

See the playback coordinator’s [beginSuspensionForReason:](avplaybackcoordinator/beginsuspension%28for_%29.md) method for details about suspending playback.

## Topics

### Inspecting a suspension

- [beginDate](avcoordinatedplaybacksuspension/begindate.md): The time the suspension begins.
- [reason](avcoordinatedplaybacksuspension/reason-swift.property.md): The reason for the suspension.
- [AVCoordinatedPlaybackSuspensionReason](avcoordinatedplaybacksuspension/reason-swift.struct.md): Constants that identify playback suspension reasons.

### Ending a suspension

- [end](avcoordinatedplaybacksuspension/end%28%29.md): Ends a suspension.
- [endProposingNewTime:](avcoordinatedplaybacksuspension/end%28proposingnewtime_%29.md): Ends a suspension and proposes a new playback time to the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Suspending state coordination

- [beginSuspensionForReason:](avplaybackcoordinator/beginsuspension%28for_%29.md): Tells the coordinator to stop sending playback commands temporarily when the playback object disconnects from the group activity.
- [expectedItemTimeAtHostTime:](avplaybackcoordinator/expecteditemtime%28athosttime_%29.md): Returns a time in the current item’s timeline that the coordinator expects to play at the specified host time.
