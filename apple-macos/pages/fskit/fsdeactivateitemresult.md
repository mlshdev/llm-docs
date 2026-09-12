> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdeactivateitemresult](https://developer.apple.com/documentation/fskit/fsdeactivateitemresult)

# FSDeactivateItemResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a deactivate-item call.

## Declaration

```swift
class FSDeactivateItemResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [deactivateItem(\_:context:replyHandler:)](fsvolume/itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md)

## Topics

### Creating a deactive-item result

- [init(freeSpace:)](fsdeactivateitemresult/init%28freespace_%29.md): Creates a result for an item-deactivation operation.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

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

### Deactivating an item

- [deactivateItem(\_:context:replyHandler:)](fsvolume/itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md): Notifies the file system that the kernel is no longer making immediate use of the given item.

# FSDeactivateItemResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a deactivate-item call.

## Declaration

```objectivec
@interface FSDeactivateItemResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [deactivateItem:context:replyHandler:](fsvolume/itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md)

## Topics

### Creating a deactive-item result

- [initWithFreeSpace:](fsdeactivateitemresult/init%28freespace_%29.md): Creates a result for an item-deactivation operation.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Deactivating an item

- [deactivateItem:context:replyHandler:](fsvolume/itemdeactivationhandler/deactivateitem%28__context_replyhandler_%29.md): Notifies the file system that the kernel is no longer making immediate use of the given item.
