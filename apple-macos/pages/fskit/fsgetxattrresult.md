> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsgetxattrresult](https://developer.apple.com/documentation/fskit/fsgetxattrresult)

# FSGetXattrResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a get-extended-attributes call.

## Declaration

```swift
class FSGetXattrResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation [getXattr(named:of:context:replyHandler:)](fsvolume/xattrhandler/getxattr%28named_of_context_replyhandler_%29.md)

## Topics

### Creating a get-extended-attributes result

- [init(xattrValue:)](fsgetxattrresult/init%28xattrvalue_%29.md): Creates a result for an extended-attribute-getting operation.

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

### Reading and writing

- [getXattr(named:of:context:replyHandler:)](fsvolume/xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [listXattrs(of:context:replyHandler:)](fsvolume/xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattr(named:to:on:policy:context:replyHandler:)](fsvolume/xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](fsvolume/setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](fsvolume/xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

# FSGetXattrResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a get-extended-attributes call.

## Declaration

```objectivec
@interface FSGetXattrResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation [getXattrNamed:ofItem:context:replyHandler:](fsvolume/xattrhandler/getxattr%28named_of_context_replyhandler_%29.md)

## Topics

### Creating a get-extended-attributes result

- [initWithXattrValue:](fsgetxattrresult/init%28xattrvalue_%29.md): Creates a result for an extended-attribute-getting operation.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Reading and writing

- [getXattrNamed:ofItem:context:replyHandler:](fsvolume/xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [listXattrsOfItem:context:replyHandler:](fsvolume/xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](fsvolume/xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](fsvolume/setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](fsvolume/xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.
