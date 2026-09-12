> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdirectorycookie](https://developer.apple.com/documentation/fskit/fsdirectorycookie)

# FSDirectoryCookie (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

A value that indicates a location in a directory from which to enumerate.

## Declaration

```swift
struct FSDirectoryCookie
```

<a id="overview"></a>

## Overview

Your implementation of [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md) defines the semantics of this value; it’s opaque to FSKit.

A value that indicates a location in a directory from which to enumerate.

Your implementation of [enumerateDirectory(\_:startingAt:verifier:attributes:packer:replyHandler:)](fsvolume/operations/enumeratedirectory%28__startingat_verifier_attributes_packer_replyhandler_%29.md) defines the semantics of this value; it’s opaque to FSKit.

## Topics

### Initializing a cookie

- [init(\_:)](fsdirectorycookie/init%28__%29.md)
- [init(rawValue:)](fsdirectorycookie/init%28rawvalue_%29.md)

### Using defined cookie values

- [initial](fsdirectorycookie/initial.md): The constant initial value for the directory-enumeration cookie.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting directory contents

- [enumerateDirectory(\_:startingAt:verifier:attributes:packer:context:replyHandler:)](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.
- [FSEnumerateDirectoryResult](fsenumeratedirectoryresult.md): The result of an enumerate-directory call.

# FSDirectoryCookie (Objective-C)

**Framework:** FSKit  
**Kind:** Type Alias  
**Availability:** macOS 15.4+

A value that indicates a location in a directory from which to enumerate.

## Declaration

```objectivec
typedef uint64_t FSDirectoryCookie;
```

<a id="overview"></a>

## Overview

Your implementation of [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md) defines the semantics of this value; it’s opaque to FSKit.

A value that indicates a location in a directory from which to enumerate.

Your implementation of [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:replyHandler:](fsvolume/operations/enumeratedirectory%28__startingat_verifier_attributes_packer_replyhandler_%29.md) defines the semantics of this value; it’s opaque to FSKit.

## Topics

### Using defined cookie values

- [FSDirectoryCookieInitial](fsdirectorycookie/initial.md): The constant initial value for the directory-enumeration cookie.

## See Also

### Inspecting directory contents

- [enumerateDirectory:startingAtCookie:verifier:providingAttributes:usingPacker:context:replyHandler:](fsvolume/handler/enumeratedirectory%28__startingat_verifier_attributes_packer_context_replyhandler_%29.md): Enumerates the contents of the given directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryEntryPacker](fsdirectoryentrypacker.md): An object used to provide items during a directory enumeration.
- [FSEnumerateDirectoryResult](fsenumeratedirectoryresult.md): The result of an enumerate-directory call.
