> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentinteractioncontroller/uti](https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/uti)

# uti (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of the target file.

## Declaration

```swift
var uti: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is used to determine which apps are capable of opening the document. The default value is determined automatically whenever possible. However, if the document is a custom type that cannot be determined readily, the value of this property may be `nil`. If you know the type of the document, you can set the value of this property explicitly.

## See Also

### Accessing the target document’s attributes

- [url](url.md): The URL identifying the target file on the local filesystem.
- [name](name.md): The name of the target file.
- [icons](icons.md): The images associated with the target file.
- [annotation](annotation.md): Custom property list information for the target file.

# UTI (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type of the target file.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * UTI;
```

<a id="Discussion"></a>

## Discussion

The value of this property is used to determine which apps are capable of opening the document. The default value is determined automatically whenever possible. However, if the document is a custom type that cannot be determined readily, the value of this property may be `nil`. If you know the type of the document, you can set the value of this property explicitly.

## See Also

### Accessing the target document’s attributes

- [URL](url.md): The URL identifying the target file on the local filesystem.
- [name](name.md): The name of the target file.
- [icons](icons.md): The images associated with the target file.
- [annotation](annotation.md): Custom property list information for the target file.
