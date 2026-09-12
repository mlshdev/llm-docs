> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscreatesymlinkresult](https://developer.apple.com/documentation/fskit/fscreatesymlinkresult)

# FSCreateSymlinkResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a create-symlink call.

## Declaration

```swift
class FSCreateSymlinkResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of  [createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:)](fsvolume/handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md).

## Relationships

### Inherits From

- [FSCreateItemResult](fscreateitemresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with links

- [createLink(to:named:in:context:replyHandler:)](fsvolume/handler/createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:)](fsvolume/handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [readSymbolicLink(\_:context:replyHandler:)](fsvolume/handler/readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](fsreadsymlinkresult.md): The result of a read-symlink call.

# FSCreateSymlinkResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a create-symlink call.

## Declaration

```objectivec
@interface FSCreateSymlinkResult : FSCreateItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of  [createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler:](fsvolume/handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md).

## Relationships

### Inherits From

- [FSCreateItemResult](fscreateitemresult.md)

## See Also

### Working with links

- [createLinkToItem:named:inDirectory:context:replyHandler:](fsvolume/handler/createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler:](fsvolume/handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [readSymbolicLink:context:replyHandler:](fsvolume/handler/readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
- [FSReadSymlinkResult](fsreadsymlinkresult.md): The result of a read-symlink call.
