> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscharacterencodingdocumentoption](https://developer.apple.com/documentation/uikit/nscharacterencodingdocumentoption)

# NSCharacterEncodingDocumentOption

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The string encoding.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey const NSCharacterEncodingDocumentOption;
```

<a id="Overview"></a>

## Overview

For plain text documents; [NSNumber](../foundation/nsnumber.md) containing the unsigned int [NSStringEncoding](../foundation/nsstringencoding.md) to override any encoding specified in an HTML document. The previous string constant was `@"CharacterEncoding"`.

## See Also

### Getting the document options

- [NSDefaultAttributesDocumentOption](nsdefaultattributesdocumentoption.md)
- [NSDocumentTypeDocumentOption](nsdocumenttypedocumentoption.md): The document type.
