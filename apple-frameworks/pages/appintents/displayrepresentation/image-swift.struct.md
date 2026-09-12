> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/displayrepresentation/image-swift.struct](https://developer.apple.com/documentation/appintents/displayrepresentation/image-swift.struct)

# DisplayRepresentation.Image

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
struct Image
```

## Topics

### Structures

- [DisplayRepresentation.Image.DisplayStyle](image-swift.struct/displaystyle.md): The style with which to display the image for this `DisplayRepresentation`.

### Initializers

- [init(data:isTemplate:)](image-swift.struct/init%28data_istemplate_%29.md): Creates an image object from the specified data.
- [init(data:isTemplate:displayStyle:)](image-swift.struct/init%28data_istemplate_displaystyle_%29.md): Creates an image from the specified data, specifying the display style.
- [init(named:isTemplate:)](image-swift.struct/init%28named_istemplate_%29.md): Creates an image object from an image file in the extension’s bundle.
- [init(named:isTemplate:displayStyle:)](image-swift.struct/init%28named_istemplate_displaystyle_%29.md): Creates an image from an image file in the extension’s bundle, specifying the display style.
- [init(systemName:isTemplate:)](image-swift.struct/init%28systemname_istemplate_%29.md): Creates an image object that contains the specified system symbol image.
- [init(systemName:tintColor:symbolConfiguration:)](image-swift.struct/init%28systemname_tintcolor_symbolconfiguration_%29-3snvy.md): Creates an image object backed by the given SF Symbol name, with optional configuration options.
- [init(systemName:tintColor:symbolConfiguration:)](image-swift.struct/init%28systemname_tintcolor_symbolconfiguration_%29-5p911.md): Creates an image object backed by the given SF Symbol name, with optional configuration options.
- [init(url:isTemplate:)](image-swift.struct/init%28url_istemplate_%29.md): Creates an image object from an image file in the local file system.
- [init(url:isTemplate:displayStyle:)](image-swift.struct/init%28url_istemplate_displaystyle_%29.md): Creates an image from an image file in the local file system, specifying the display style.
- [init(url:width:height:isTemplate:)](image-swift.struct/init%28url_width_height_istemplate_%29.md): Creates an image object, of the specified size, from an image file in the local file system.
- [init(url:width:height:isTemplate:displayStyle:)](image-swift.struct/init%28url_width_height_istemplate_displaystyle_%29.md): Creates an image, of the specified size, from an image file in the local file system, specifying the display style.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the content

- [title](title.md)
- [subtitle](subtitle.md)
- [image](image-swift.property.md)
