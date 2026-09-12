> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsenumeratedirectoryresult](https://developer.apple.com/documentation/fskit/fsenumeratedirectoryresult)

# FSEnumerateDirectoryResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an enumerate-directory call.

## Declaration

```swift
class FSEnumerateDirectoryResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md).

## Topics

### Creating an enumerate-directory result

- [init(verifier:)](fsenumeratedirectoryresult/init%28verifier_%29.md): Creates a result for an directory enumeration operation.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.

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

### Inspecting directory contents

- [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.

# FSEnumerateDirectoryResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an enumerate-directory call.

## Declaration

```objectivec
@interface FSEnumerateDirectoryResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md).

## Topics

### Creating an enumerate-directory result

- [initWithVerifier:](fsenumeratedirectoryresult/init%28verifier_%29.md): Creates a result for an directory enumeration operation.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Inspecting directory contents

- [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryCookie](fsdirectorycookie.md): A value that indicates a location in a directory from which to enumerate.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.
