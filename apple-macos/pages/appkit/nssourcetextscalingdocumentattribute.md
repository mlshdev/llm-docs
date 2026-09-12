> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssourcetextscalingdocumentattribute](https://developer.apple.com/documentation/appkit/nssourcetextscalingdocumentattribute)

# NSSourceTextScalingDocumentAttribute

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.15+

The text-scaling mode you used when creating the text.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSSourceTextScalingDocumentAttribute;
```

<a id="discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. Include this attribute to specify the original text-scaling mode you used to create the text.

## See Also

### Getting the font-scaling options

- [NSTextScalingDocumentAttribute](nstextscalingdocumentattribute.md): The text-scaling mode to use when displaying the text.
