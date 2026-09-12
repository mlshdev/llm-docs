> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/icons](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/icons)

# icons (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The images associated with the target file.

## Declaration

```swift
var icons: [UIImage] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [UIImage](../uiimage.md) objects containing the available icons for the given file. The images in the array are sorted from smallest to largest, with the smallest image located at index 0. The returned array always contains at least one image.

The images themselves are provided by the system and determined by the UTI of the file. Apps can register custom icons for their associated files by including the appropriate meta information in their `Info.plist` file. If no custom icon exists, the images in this property represent the generic document icon.

## See Also

### Accessing the target document’s attributes

- [url](url.md): The URL identifying the target file on the local filesystem.
- [uti](uti.md): The type of the target file.
- [name](name.md): The name of the target file.
- [annotation](annotation.md): Custom property list information for the target file.

# icons (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The images associated with the target file.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIImage *> * icons;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [UIImage](../uiimage.md) objects containing the available icons for the given file. The images in the array are sorted from smallest to largest, with the smallest image located at index 0. The returned array always contains at least one image.

The images themselves are provided by the system and determined by the UTI of the file. Apps can register custom icons for their associated files by including the appropriate meta information in their `Info.plist` file. If no custom icon exists, the images in this property represent the generic document icon.

## See Also

### Accessing the target document’s attributes

- [URL](url.md): The URL identifying the target file on the local filesystem.
- [UTI](uti.md): The type of the target file.
- [name](name.md): The name of the target file.
- [annotation](annotation.md): Custom property list information for the target file.
