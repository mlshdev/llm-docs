> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontext](https://developer.apple.com/documentation/fskit/fscontext)

# FSContext (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A context object that provides information about the initiator of a file system operation.

## Declaration

```swift
class FSContext
```

<a id="overview"></a>

## Overview

This object contains the user ID and group ID of the process that initiated the file system operation, allowing file systems to make authorization decisions based on the caller’s identity. Use this context in handler methods that provide the context as a parameter.

## Topics

### Accessing context properties

- [realUserID](fscontext/realuserid.md): The caller’s real user ID.
- [effectiveUserID](fscontext/effectiveuserid.md): The caller’s effective user ID.
- [realGroupID](fscontext/realgroupid.md): The caller’s real group ID.
- [effectiveGroupID](fscontext/effectivegroupid.md): The caller’s effective group ID.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Opening and closing items

- [open(\_:modes:cacheMode:context:replyHandler:)](fsvolume/datacachehandler/open%28__modes_cachemode_context_replyhandler_%29.md): Opens an item with cache mode negotiation.
- [FSOpenItemResult](fsopenitemresult.md): The result of an open-item call.
- [close(\_:context:replyHandler:)](fsvolume/datacachehandler/close%28__context_replyhandler_%29.md): Closes an item and releases associated cache resources.
- [FSVolume.DataCacheMode](fsvolume/datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.

# FSContext (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

A context object that provides information about the initiator of a file system operation.

## Declaration

```objectivec
@interface FSContext : NSObject
```

<a id="overview"></a>

## Overview

This object contains the user ID and group ID of the process that initiated the file system operation, allowing file systems to make authorization decisions based on the caller’s identity. Use this context in handler methods that provide the context as a parameter.

## Topics

### Accessing context properties

- [realUserID](fscontext/realuserid.md): The caller’s real user ID.
- [effectiveUserID](fscontext/effectiveuserid.md): The caller’s effective user ID.
- [realGroupID](fscontext/realgroupid.md): The caller’s real group ID.
- [effectiveGroupID](fscontext/effectivegroupid.md): The caller’s effective group ID.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Opening and closing items

- [openItem:modes:cacheMode:context:replyHandler:](fsvolume/datacachehandler/open%28__modes_cachemode_context_replyhandler_%29.md): Opens an item with cache mode negotiation.
- [FSOpenItemResult](fsopenitemresult.md): The result of an open-item call.
- [closeItem:context:replyHandler:](fsvolume/datacachehandler/close%28__context_replyhandler_%29.md): Closes an item and releases associated cache resources.
- [FSDataCacheMode](fsvolume/datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
