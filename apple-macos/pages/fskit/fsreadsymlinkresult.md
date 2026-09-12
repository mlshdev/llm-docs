> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsreadsymlinkresult](https://developer.apple.com/documentation/fskit/fsreadsymlinkresult)

# FSReadSymlinkResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a read-symlink call.

## Declaration

```swift
class FSReadSymlinkResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [readSymbolicLink(\_:context:replyHandler:)](fsvolume/handler/readsymboliclink%28__context_replyhandler_%29.md).

## Topics

### Creating a read-symlink result

- [init(contents:symlinkAttributes:)](fsreadsymlinkresult/init%28contents_symlinkattributes_%29.md): Creates a result for a symlink-reading operation.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

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

### Working with links

- [createLink(to:named:in:context:replyHandler:)](fsvolume/handler/createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLink(named:in:attributes:linkContents:context:replyHandler:)](fsvolume/handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink(\_:context:replyHandler:)](fsvolume/handler/readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.

# FSReadSymlinkResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a read-symlink call.

## Declaration

```objectivec
@interface FSReadSymlinkResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [readSymbolicLink:context:replyHandler:](fsvolume/handler/readsymboliclink%28__context_replyhandler_%29.md).

## Topics

### Creating a read-symlink result

- [initWithContents:symlinkAttributes:](fsreadsymlinkresult/init%28contents_symlinkattributes_%29.md): Creates a result for a symlink-reading operation.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Working with links

- [createLinkToItem:named:inDirectory:context:replyHandler:](fsvolume/handler/createlink%28to_named_in_context_replyhandler_%29.md): Creates a new hard link.
- [FSCreateLinkResult](fscreatelinkresult.md): The result of a create-link call.
- [createSymbolicLinkNamed:inDirectory:attributes:linkContents:context:replyHandler:](fsvolume/handler/createsymboliclink%28named_in_attributes_linkcontents_context_replyhandler_%29.md): Creates a new symbolic link.
- [FSCreateSymlinkResult](fscreatesymlinkresult.md): The result of a create-symlink call.
- [readSymbolicLink:context:replyHandler:](fsvolume/handler/readsymboliclink%28__context_replyhandler_%29.md): Reads a symbolic link.
