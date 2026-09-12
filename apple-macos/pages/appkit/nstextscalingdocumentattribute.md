> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextscalingdocumentattribute](https://developer.apple.com/documentation/appkit/nstextscalingdocumentattribute)

# NSTextScalingDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.15+

The text-scaling mode to use when displaying the text.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSTextScalingDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. When saving a document, include this attribute to specify the type of scaling to apply to the text at display time.

## See Also

### Getting the font-scaling options

- [NSSourceTextScalingDocumentAttribute](nssourcetextscalingdocumentattribute.md): The text-scaling mode you used when creating the text.
