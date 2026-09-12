> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment](https://developer.apple.com/documentation/xctest/xctattachment)

# XCTAttachment (Swift)

**Framework:** XCTest  
**Kind:** Class

Data from a test method’s execution, such as a file, image, screenshot, data blob, or ZIP file.

## Declaration

```swift
class XCTAttachment
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)

## Topics

### Creating Attachments from Data

- [init(data:)](xctattachment/init%28data_%29.md): Creates an attachment containing the provided data payload.
- [init(data:uniformTypeIdentifier:)](xctattachment/init%28data_uniformtypeidentifier_%29.md): Creates an attachment containing the provided data payload, with a custom UTI.
- [init(uniformTypeIdentifier:name:payload:userInfo:)](xctattachment/init%28uniformtypeidentifier_name_payload_userinfo_%29.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.

### Creating Attachments from Files and Folders

- [init(contentsOfFileAtURL:)](xctattachment/init%28contentsoffileaturl_%29.md): Deprecated. Creates an attachment from the contents of an existing file on disk.
- [init(contentsOfFileAtURL:uniformTypeIdentifier:)](xctattachment/init%28contentsoffileaturl_uniformtypeidentifier_%29.md): Deprecated. Creates an attachment from the contents of an existing file on disk, with a custom UTI.
- [init(compressedContentsOfDirectoryAtURL:)](xctattachment/init%28compressedcontentsofdirectoryaturl_%29.md): Deprecated. Creates an attachment containing a zipped archive of an existing directory on disk.

### Creating Attachments from Images and Screenshots

- [init(image:)](xctattachment/init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [init(image:quality:)](xctattachment/init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [init(screenshot:)](xctattachment/init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [init(screenshot:quality:)](xctattachment/init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTAttachment.ImageQuality](xctattachment/imagequality.md): Compression quality options for image-based attachments.

### Creating Attachments from Objects

- [init(plistObject:)](xctattachment/init%28plistobject_%29.md): Creates an attachment from an object that can be represented in an XML property list.
- [init(archivableObject:)](xctattachment/init%28archivableobject_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`.
- [init(archivableObject:uniformTypeIdentifier:)](xctattachment/init%28archivableobject_uniformtypeidentifier_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.

### Creating Attachments from Strings

- [init(string:)](xctattachment/init%28string_%29.md): Creates an attachment containing the provided string.

### Setting an Attachment’s Lifetime

- [lifetime](xctattachment/lifetime-swift.property.md): Indicates whether the attachment is kept or discarded when its associated test passes.
- [XCTAttachment.Lifetime](xctattachment/lifetime-swift.enum.md): The possible lifetime values for a test attachment.

### Attachment Metadata

- [name](xctattachment/name.md): The attachment’s name, or `nil` if the attachment is unnamed.
- [uniformTypeIdentifier](xctattachment/uniformtypeidentifier.md): The Uniform Type Identifier (UTI) of the data represented by the attachment.
- [userInfo](xctattachment/userinfo.md): User-provided metadata associated with the attachment.

### Initializers

- [init(compressedContentsOfDirectory:)](xctattachment/init%28compressedcontentsofdirectory_%29.md)
- [init(contentsOfFile:)](xctattachment/init%28contentsoffile_%29.md)
- [init(contentsOfFile:uniformTypeIdentifier:)](xctattachment/init%28contentsoffile_uniformtypeidentifier_%29.md)

### Default Implementations

- [XCTAttachment Implementations](xctattachment/xctattachment-implementations.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Attachments

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md): Use attachments to store a test’s output data for later analysis.

# XCTAttachment (Objective-C)

**Framework:** XCTest  
**Kind:** Class

Data from a test method’s execution, such as a file, image, screenshot, data blob, or ZIP file.

## Declaration

```objectivec
@interface XCTAttachment : NSObject
```

## Mentioned In

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md)

## Topics

### Creating Attachments from Data

- [attachmentWithData:](xctattachment/init%28data_%29.md): Creates an attachment containing the provided data payload.
- [attachmentWithData:uniformTypeIdentifier:](xctattachment/init%28data_uniformtypeidentifier_%29.md): Creates an attachment containing the provided data payload, with a custom UTI.
- [initWithUniformTypeIdentifier:name:payload:userInfo:](xctattachment/init%28uniformtypeidentifier_name_payload_userinfo_%29.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.
- [attachmentWithUniformTypeIdentifier:name:payload:userInfo:](xctattachment/attachmentwithuniformtypeidentifier_name_payload_userinfo_.md): Creates an attachment containing the provided data payload, optionally with a custom UTI, name, and user-provided metadata dictionary.

### Creating Attachments from Images and Screenshots

- [attachmentWithImage:](xctattachment/init%28image_%29.md): Creates an attachment containing a PNG representation of the provided image.
- [attachmentWithImage:quality:](xctattachment/init%28image_quality_%29.md): Creates an attachment containing a representation of the provided image at the requested image quality.
- [attachmentWithScreenshot:](xctattachment/init%28screenshot_%29.md): Creates an attachment containing a PNG representation of the provided screenshot.
- [attachmentWithScreenshot:quality:](xctattachment/init%28screenshot_quality_%29.md): Creates an attachment containing a representation of the provided screenshot at the requested image quality.
- [XCUIScreenshot](../xcuiautomation/xcuiscreenshot.md): A captured image of a screen, app, or UI element state.
- [XCTImageQuality](xctattachment/imagequality.md): Compression quality options for image-based attachments.

### Creating Attachments from Objects

- [attachmentWithPlistObject:](xctattachment/init%28plistobject_%29.md): Creates an attachment from an object that can be represented in an XML property list.
- [attachmentWithArchivableObject:](xctattachment/init%28archivableobject_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`.
- [attachmentWithArchivableObject:uniformTypeIdentifier:](xctattachment/init%28archivableobject_uniformtypeidentifier_%29.md): Creates an attachment from an object that conforms to `NSSecureCoding`, with a custom UTI.

### Creating Attachments from Strings

- [attachmentWithString:](xctattachment/init%28string_%29.md): Creates an attachment containing the provided string.

### Setting an Attachment’s Lifetime

- [lifetime](xctattachment/lifetime-swift.property.md): Indicates whether the attachment is kept or discarded when its associated test passes.
- [XCTAttachmentLifetime](xctattachment/lifetime-swift.enum.md): The possible lifetime values for a test attachment.

### Attachment Metadata

- [name](xctattachment/name.md): The attachment’s name, or `nil` if the attachment is unnamed.
- [uniformTypeIdentifier](xctattachment/uniformtypeidentifier.md): The Uniform Type Identifier (UTI) of the data represented by the attachment.
- [userInfo](xctattachment/userinfo.md): User-provided metadata associated with the attachment.

### Type Methods

- [attachmentWithCompressedContentsOfDirectoryAtURL:](xctattachment/init%28compressedcontentsofdirectory_%29.md)
- [attachmentWithContentsOfFileAtURL:](xctattachment/init%28contentsoffile_%29.md)
- [attachmentWithContentsOfFileAtURL:uniformTypeIdentifier:](xctattachment/init%28contentsoffile_uniformtypeidentifier_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Attachments

- [Adding Attachments to Tests, Activities, and Issues](adding-attachments-to-tests-activities-and-issues.md): Use attachments to store a test’s output data for later analysis.
