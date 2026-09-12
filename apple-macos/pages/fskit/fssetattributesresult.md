> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fssetattributesresult](https://developer.apple.com/documentation/fskit/fssetattributesresult)

# FSSetAttributesResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The restlt of a set-attributes call.

## Declaration

```swift
class FSSetAttributesResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [setAttributes(\_:on:context:replyHandler:)](fsvolume/handler/setattributes%28__on_context_replyhandler_%29.md).

## Topics

### Creating a set-attributes result

- [init(attributes:freeSpace:)](fssetattributesresult/init%28attributes_freespace_%29.md): Creates a result for an attribute-setting operation.
- [FSItem.Attributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
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

### Working with attributes

- [getAttributes(\_:of:context:replyHandler:)](fsvolume/handler/getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItem.GetAttributesRequest](fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](fsgetattributesresult.md): The result of a get-attributes call.
- [setAttributes(\_:on:context:replyHandler:)](fsvolume/handler/setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.

# FSSetAttributesResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The restlt of a set-attributes call.

## Declaration

```objectivec
@interface FSSetAttributesResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [setAttributes:onItem:context:replyHandler:](fsvolume/handler/setattributes%28__on_context_replyhandler_%29.md).

## Topics

### Creating a set-attributes result

- [initWithAttributes:freeSpace:](fssetattributesresult/init%28attributes_freespace_%29.md): Creates a result for an attribute-setting operation.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSFreeSpace](fsfreespace.md): A free space object that pairs free space values with atomic sequence numbers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Working with attributes

- [getAttributes:ofItem:context:replyHandler:](fsvolume/handler/getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItemGetAttributesRequest](fsitem/getattributesrequest.md): A request to get attributes from an item.
- [FSGetAttributesResult](fsgetattributesresult.md): The result of a get-attributes call.
- [setAttributes:onItem:context:replyHandler:](fsvolume/handler/setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
