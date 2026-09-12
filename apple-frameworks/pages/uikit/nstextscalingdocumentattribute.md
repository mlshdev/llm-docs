> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextscalingdocumentattribute](https://developer.apple.com/documentation/uikit/nstextscalingdocumentattribute)

# NSTextScalingDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The text-scaling mode to use when displaying the text.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSTextScalingDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. When saving a document, include this attribute to specify the type of scaling to apply to the text at display time.

## See Also

### Getting the font-scaling options

- [NSSourceTextScalingDocumentAttribute](nssourcetextscalingdocumentattribute.md): The text-scaling mode you used when creating the text.
