> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsopenitemresult](https://developer.apple.com/documentation/fskit/fsopenitemresult)

# FSOpenItemResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an open-item call.

## Declaration

```swift
class FSOpenItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [open(\_:modes:cacheMode:context:replyHandler:)](fsvolume/datacachehandler/open%28__modes_cachemode_context_replyhandler_%29.md).

## Topics

### Creating an open-item result

- [init(grantedCoherency:)](fsopenitemresult/init%28grantedcoherency_%29.md): Creates an open-item result.
- [FSVolume.KernelCacheCoherencyType](fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.

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

### Opening and closing items

- [open(\_:modes:cacheMode:context:replyHandler:)](fsvolume/datacachehandler/open%28__modes_cachemode_context_replyhandler_%29.md): Opens an item with cache mode negotiation.
- [close(\_:context:replyHandler:)](fsvolume/datacachehandler/close%28__context_replyhandler_%29.md): Closes an item and releases associated cache resources.
- [FSVolume.DataCacheMode](fsvolume/datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSContext](fscontext.md): A context object that provides information about the initiator of a file system operation.

# FSOpenItemResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an open-item call.

## Declaration

```objectivec
@interface FSOpenItemResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [openItem:modes:cacheMode:context:replyHandler:](fsvolume/datacachehandler/open%28__modes_cachemode_context_replyhandler_%29.md).

## Topics

### Creating an open-item result

- [initWithGrantedCoherency:](fsopenitemresult/init%28grantedcoherency_%29.md): Creates an open-item result.
- [FSKernelCacheCoherencyType](fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Opening and closing items

- [openItem:modes:cacheMode:context:replyHandler:](fsvolume/datacachehandler/open%28__modes_cachemode_context_replyhandler_%29.md): Opens an item with cache mode negotiation.
- [closeItem:context:replyHandler:](fsvolume/datacachehandler/close%28__context_replyhandler_%29.md): Closes an item and releases associated cache resources.
- [FSDataCacheMode](fsvolume/datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSContext](fscontext.md): A context object that provides information about the initiator of a file system operation.
