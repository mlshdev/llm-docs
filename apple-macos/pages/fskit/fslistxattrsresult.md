> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fslistxattrsresult](https://developer.apple.com/documentation/fskit/fslistxattrsresult)

# FSListXattrsResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a list-extended-attributes call.

## Declaration

```swift
class FSListXattrsResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [supportedXattrNames(for:)](fsvolume/xattrhandler/supportedxattrnames%28for_%29.md).

## Topics

### Creating a list-extended-attributes result

- [init(xattrNames:)](fslistxattrsresult/init%28xattrnames_%29.md): Creates a result instance with all required properties populated.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

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
- [FSGetXattrResult](fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrs(of:context:replyHandler:)](fsvolume/xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [setXattr(named:to:on:policy:context:replyHandler:)](fsvolume/xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSVolume.SetXattrPolicy](fsvolume/setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](fsvolume/xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

# FSListXattrsResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a list-extended-attributes call.

## Declaration

```objectivec
@interface FSListXattrsResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [supportedXattrNamesForItem:](fsvolume/xattrhandler/supportedxattrnames%28for_%29.md).

## Topics

### Creating a list-extended-attributes result

- [initWithXattrNames:](fslistxattrsresult/init%28xattrnames_%29.md): Creates a result instance with all required properties populated.
- [FSFileName](fsfilename.md): The name of a file, expressed as a data buffer.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Reading and writing

- [getXattrNamed:ofItem:context:replyHandler:](fsvolume/xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrsOfItem:context:replyHandler:](fsvolume/xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](fsvolume/xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrPolicy](fsvolume/setxattrpolicy.md): Flags to specify the policy when setting extended file attributes.
- [FSSetXattrResult](fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](fsvolume/xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.
