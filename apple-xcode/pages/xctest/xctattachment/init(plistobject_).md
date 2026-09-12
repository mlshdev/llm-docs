> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(plistobject:)](https://developer.apple.com/documentation/xctest/xctattachment/init(plistobject:))

# init(plistObject:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment from an object that can be represented in an XML property list.

## Declaration

```swift
convenience init(plistObject object: Any)
```

## Parameters

- `object`: An object that can be serialized to an XML property list format, such as an array, dictionary, string, or date.

<a id="Discussion"></a>

## Discussion

The content of the attachment is an XML property list representation of the provided object with a [uniformTypeIdentifier](uniformtypeidentifier.md) value of `"com.apple.xml-property-list"`.

> **Note**

>  Creating an attachment with a non-property-list-compatible object will trigger an exception at the point that the attachment is added to an [XCTActivity](../xctactivity.md).

## See Also

### Creating Attachments from Objects

- [init(archivableObject:)](init%28archivableobject_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`.
- [init(archivableObject:uniformTypeIdentifier:)](init%28archivableobject_uniformtypeidentifier_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.

# attachmentWithPlistObject: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates an attachment from an object that can be represented in an XML property list.

## Declaration

```objectivec
+ (instancetype) attachmentWithPlistObject:(id) object;
```

## Parameters

- `object`: An object that can be serialized to an XML property list format, such as an array, dictionary, string, or date.

<a id="Discussion"></a>

## Discussion

The content of the attachment is an XML property list representation of the provided object with a [uniformTypeIdentifier](uniformtypeidentifier.md) value of `"com.apple.xml-property-list"`.

> **Note**

>  Creating an attachment with a non-property-list-compatible object will trigger an exception at the point that the attachment is added to an [XCTActivity](../xctactivity.md).

## See Also

### Creating Attachments from Objects

- [attachmentWithArchivableObject:](init%28archivableobject_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`.
- [attachmentWithArchivableObject:uniformTypeIdentifier:](init%28archivableobject_uniformtypeidentifier_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.
