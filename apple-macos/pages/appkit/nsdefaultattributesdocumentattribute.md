> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdefaultattributesdocumentattribute](https://developer.apple.com/documentation/appkit/nsdefaultattributesdocumentattribute)

# NSDefaultAttributesDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.11+

The default document attributes.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey NSDefaultAttributesDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this attribute is an NSDictionary object containing attributes to be applied to plain files. Used by reader methods. This key in options can specify the default attributes applied to the entire document contents. Upon return, the document attributes can contain this key indicating the actual attributes used.+

The string constant in macOS 10.3 and earlier is `@"DefaultAttributes"`.
