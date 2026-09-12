> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensionitem](https://developer.apple.com/documentation/foundation/nsextensionitem)

# NSExtensionItem (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable collection of values representing different aspects of an item for an extension to act upon.

## Declaration

```swift
class NSExtensionItem
```

## Topics

### Identifying the Item

- [attributedTitle](nsextensionitem/attributedtitle.md): An optional title for the item.
- [userInfo](nsextensionitem/userinfo.md): An optional dictionary of keys and values corresponding to the extension item’s properties.

### Item Contents

- [attachments](nsextensionitem/attachments.md): An optional array of media data associated with the extension item.
- [attributedContentText](nsextensionitem/attributedcontenttext.md): An optional string describing the extension item content.

### Constants

- [Property Keys](property-keys.md): These keys correspond to the extension item properties and are specified in the extension’s `Info.plist`.
- [UTI Subtypes for Data Detector Types](uti-subtypes-for-data-detector-types.md): These constants represent sub-Uniform Type Identifier of `com.apple.structured-text`

### Initializers

- [init(coder:)](nsextensionitem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Attachments

- [NSItemProvider](nsitemprovider.md): An item provider for conveying data or a file between processes during drag-and-drop or copy-and-paste activities, or from a host app to an app extension.
- [Add Functionality to Finder with Action Extensions](https://developer.apple.com/documentation/appkit/add-functionality-to-finder-with-action-extensions): Implement Action Extensions to provide quick access to commonly used features of your app.

# NSExtensionItem (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An immutable collection of values representing different aspects of an item for an extension to act upon.

## Declaration

```objectivec
@interface NSExtensionItem : NSObject
```

## Topics

### Identifying the Item

- [attributedTitle](nsextensionitem/attributedtitle.md): An optional title for the item.
- [userInfo](nsextensionitem/userinfo.md): An optional dictionary of keys and values corresponding to the extension item’s properties.

### Item Contents

- [attachments](nsextensionitem/attachments.md): An optional array of media data associated with the extension item.
- [attributedContentText](nsextensionitem/attributedcontenttext.md): An optional string describing the extension item content.

### Constants

- [Property Keys](property-keys.md): These keys correspond to the extension item properties and are specified in the extension’s `Info.plist`.
- [UTI Subtypes for Data Detector Types](uti-subtypes-for-data-detector-types.md): These constants represent sub-Uniform Type Identifier of `com.apple.structured-text`

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Attachments

- [NSItemProvider](nsitemprovider.md): An item provider for conveying data or a file between processes during drag-and-drop or copy-and-paste activities, or from a host app to an app extension.
