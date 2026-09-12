> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdefaultattributesdocumentattribute](https://developer.apple.com/documentation/uikit/nsdefaultattributesdocumentattribute)

# NSDefaultAttributesDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default document attributes.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSDefaultAttributesDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSDictionary](../foundation/nsdictionary.md) object containing attributes to be applied to plain files. Used by reader methods. This key in options can specify the default attributes applied to the entire document contents. Upon return, the document attributes can contain this key indicating the actual attributes used.

The string constant in macOS 10.3 and earlier is `@"DefaultAttributes"`.
