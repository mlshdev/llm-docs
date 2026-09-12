> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/kcgpdfcontextallowsprinting](https://developer.apple.com/documentation/coregraphics/kcgpdfcontextallowsprinting)

# kCGPDFContextAllowsPrinting (Swift)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Whether the document allows printing when unlocked with the user password.

## Declaration

```swift
let kCGPDFContextAllowsPrinting: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this key must be a [CFBoolean](../corefoundation/cfboolean.md) value. The default value of this key is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Metadata Keys

- [kCGPDFContextAuthor](kcgpdfcontextauthor.md): The corresponding value is a string that represents the name of the person who created the document. This key is optional.
- [kCGPDFContextCreator](kcgpdfcontextcreator.md): The corresponding value is a string that represents the name of the application used to produce the document. This key is optional.
- [kCGPDFContextTitle](kcgpdfcontexttitle.md): The corresponding value is a string that represents the title of the document. This key is optional.
- [kCGPDFContextOwnerPassword](kcgpdfcontextownerpassword.md)
- [kCGPDFContextUserPassword](kcgpdfcontextuserpassword.md)
- [kCGPDFContextAllowsCopying](kcgpdfcontextallowscopying.md): Whether the document allows copying when unlocked with the user password.
- [kCGPDFContextOutputIntent](kcgpdfcontextoutputintent.md)
- [kCGPDFContextOutputIntents](kcgpdfcontextoutputintents.md)
- [kCGPDFContextSubject](kcgpdfcontextsubject.md)
- [kCGPDFContextKeywords](kcgpdfcontextkeywords.md)
- [kCGPDFContextEncryptionKeyLength](kcgpdfcontextencryptionkeylength.md)

# kCGPDFContextAllowsPrinting (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Whether the document allows printing when unlocked with the user password.

## Declaration

```objectivec
extern CFStringRef const kCGPDFContextAllowsPrinting;
```

<a id="Discussion"></a>

## Discussion

The value of this key must be a [CFBooleanRef](../corefoundation/cfboolean.md) value. The default value of this key is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Metadata Keys

- [kCGPDFContextAuthor](kcgpdfcontextauthor.md): The corresponding value is a string that represents the name of the person who created the document. This key is optional.
- [kCGPDFContextCreator](kcgpdfcontextcreator.md): The corresponding value is a string that represents the name of the application used to produce the document. This key is optional.
- [kCGPDFContextTitle](kcgpdfcontexttitle.md): The corresponding value is a string that represents the title of the document. This key is optional.
- [kCGPDFContextOwnerPassword](kcgpdfcontextownerpassword.md)
- [kCGPDFContextUserPassword](kcgpdfcontextuserpassword.md)
- [kCGPDFContextAllowsCopying](kcgpdfcontextallowscopying.md): Whether the document allows copying when unlocked with the user password.
- [kCGPDFContextOutputIntent](kcgpdfcontextoutputintent.md)
- [kCGPDFContextOutputIntents](kcgpdfcontextoutputintents.md)
- [kCGPDFContextSubject](kcgpdfcontextsubject.md)
- [kCGPDFContextKeywords](kcgpdfcontextkeywords.md)
- [kCGPDFContextEncryptionKeyLength](kcgpdfcontextencryptionkeylength.md)
