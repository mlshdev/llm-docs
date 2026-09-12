> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/name](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/name)

# name (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The name of the target file.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the filename without any preceding path information. The default value of this property is derived from the path information in the [url](url.md) property. You can change the value of this property as needed if you want to associate a different name with the file.

## See Also

### Accessing the target document’s attributes

- [url](url.md): The URL identifying the target file on the local filesystem.
- [uti](uti.md): The type of the target file.
- [icons](icons.md): The images associated with the target file.
- [annotation](annotation.md): Custom property list information for the target file.

# name (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The name of the target file.

## Declaration

```objectivec
@property (copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This property contains the filename without any preceding path information. The default value of this property is derived from the path information in the [URL](url.md) property. You can change the value of this property as needed if you want to associate a different name with the file.

## See Also

### Accessing the target document’s attributes

- [URL](url.md): The URL identifying the target file on the local filesystem.
- [UTI](uti.md): The type of the target file.
- [icons](icons.md): The images associated with the target file.
- [annotation](annotation.md): Custom property list information for the target file.
