> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsupgradeitemresult](https://developer.apple.com/documentation/fskit/fsupgradeitemresult)

# FSUpgradeItemResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an upgrade-item call.

## Declaration

```swift
class FSUpgradeItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [upgrade(\_:cacheMode:context:replyHandler:)](fsvolume/datacachehandler/upgrade%28__cachemode_context_replyhandler_%29.md).

## Topics

### Creating an upgrade-item result

- [init(grantedCoherency:)](fsupgradeitemresult/init%28grantedcoherency_%29.md): Creates an upgrade-item result.
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

### Changing cache behavior

- [upgrade(\_:cacheMode:context:replyHandler:)](fsvolume/datacachehandler/upgrade%28__cachemode_context_replyhandler_%29.md): Upgrades the item cache mode to a less restrictive level, allowing more caching.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSContext](fscontext.md): A context object that provides information about the initiator of a file system operation.

# FSUpgradeItemResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of an upgrade-item call.

## Declaration

```objectivec
@interface FSUpgradeItemResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [upgradeItem:cacheMode:context:replyHandler:](fsvolume/datacachehandler/upgrade%28__cachemode_context_replyhandler_%29.md).

## Topics

### Creating an upgrade-item result

- [initWithGrantedCoherency:](fsupgradeitemresult/init%28grantedcoherency_%29.md): Creates an upgrade-item result.
- [FSKernelCacheCoherencyType](fsvolume/kernelcachecoherencytype.md): A type that defines how the kernel caches data.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Changing cache behavior

- [upgradeItem:cacheMode:context:replyHandler:](fsvolume/datacachehandler/upgrade%28__cachemode_context_replyhandler_%29.md): Upgrades the item cache mode to a less restrictive level, allowing more caching.
- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSContext](fscontext.md): A context object that provides information about the initiator of a file system operation.
