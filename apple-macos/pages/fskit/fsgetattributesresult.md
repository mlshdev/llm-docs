> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsgetattributesresult](https://developer.apple.com/documentation/fskit/fsgetattributesresult)

# FSGetAttributesResult (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a get-attributes call.

## Declaration

```swift
class FSGetAttributesResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [getAttributes(\_:of:context:replyHandler:)](fsvolume/handler/getattributes%28__of_context_replyhandler_%29.md).

## Topics

### Creating a get-attributes result

- [init(attributes:)](fsgetattributesresult/init%28attributes_%29.md): Creates a result for an attribute-getting operation.
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

### Working with attributes

- [getAttributes(\_:of:context:replyHandler:)](fsvolume/handler/getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItem.GetAttributesRequest](fsitem/getattributesrequest.md): A request to get attributes from an item.
- [setAttributes(\_:on:context:replyHandler:)](fsvolume/handler/setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItem.SetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](fssetattributesresult.md): The restlt of a set-attributes call.

# FSGetAttributesResult (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 27.0+

The result of a get-attributes call.

## Declaration

```objectivec
@interface FSGetAttributesResult : FSVolumeHandlerResult
```

<a id="overview"></a>

## Overview

Use this type in your implementation of [getAttributes:ofItem:context:replyHandler:](fsvolume/handler/getattributes%28__of_context_replyhandler_%29.md).

## Topics

### Creating a get-attributes result

- [initWithAttributes:](fsgetattributesresult/init%28attributes_%29.md): Creates a result for an attribute-getting operation.
- [FSItemAttributes](fsitem/attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.

## Relationships

### Inherits From

- [FSVolumeHandlerResult](fsvolumehandlerresult.md)

## See Also

### Working with attributes

- [getAttributes:ofItem:context:replyHandler:](fsvolume/handler/getattributes%28__of_context_replyhandler_%29.md): Fetches attributes for the given item.
- [FSItemGetAttributesRequest](fsitem/getattributesrequest.md): A request to get attributes from an item.
- [setAttributes:onItem:context:replyHandler:](fsvolume/handler/setattributes%28__on_context_replyhandler_%29.md): Sets the given attributes on an item.
- [FSItemSetAttributesRequest](fsitem/setattributesrequest.md): A request to set attributes on an item.
- [FSSetAttributesResult](fssetattributesresult.md): The restlt of a set-attributes call.
