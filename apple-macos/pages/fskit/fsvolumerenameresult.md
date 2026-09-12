> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolumerenameresult](https://developer.apple.com/documentation/fskit/fsvolumerenameresult)

# FSVolumeRenameResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a rename-volume call.

## Declaration

```swift
class FSVolumeRenameResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [setVolumeName(\_:context:replyHandler:)](fsvolume/renamehandler/setvolumename%28__context_replyhandler_%29.md).

## Topics

### Creating a volume-rename result

- [init(newName:)](fsvolumerenameresult/init%28newname_%29.md): Creates a result for a volume-renaming operation.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Renaming the volume

- [setVolumeName(\_:context:replyHandler:)](fsvolume/renamehandler/setvolumename%28__context_replyhandler_%29.md): Sets a new name for the volume.

# FSVolumeRenameResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a rename-volume call.

## Declaration

```objectivec
@interface FSVolumeRenameResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [setVolumeName:context:replyHandler:](fsvolume/renamehandler/setvolumename%28__context_replyhandler_%29.md).

## Topics

### Creating a volume-rename result

- [initWithNewName:](fsvolumerenameresult/init%28newname_%29.md): Creates a result for a volume-renaming operation.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Renaming the volume

- [setVolumeName:context:replyHandler:](fsvolume/renamehandler/setvolumename%28__context_replyhandler_%29.md): Sets a new name for the volume.
