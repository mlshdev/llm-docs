> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsactivateresult](https://developer.apple.com/documentation/fskit/fsactivateresult)

# FSActivateResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an activate call.

## Declaration

```swift
class FSActivateResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [activateVolume(options:replyHandler:)](fsvolume/handler/activatevolume%28options_replyhandler_%29.md).

## Topics

### Creating an activate result

- [init(rootItem:)](fsactivateresult/init%28rootitem_%29.md): Creates an activate result instance.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

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

### Handling activation and deactivation

- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDeactivateOptions](fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.

# FSActivateResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an activate call.

## Declaration

```objectivec
@interface FSActivateResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [activateVolumeWithOptions:replyHandler:](fsvolume/handler/activatevolume%28options_replyhandler_%29.md).

## Topics

### Creating an activate result

- [initWithRootItem:](fsactivateresult/init%28rootitem_%29.md): Creates an activate result instance.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Handling activation and deactivation

- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDeactivateOptions](fsdeactivateoptions.md): Options that affect the behavior of deactivate methods.
