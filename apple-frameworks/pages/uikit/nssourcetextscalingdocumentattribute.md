> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nssourcetextscalingdocumentattribute](https://developer.apple.com/documentation/uikit/nssourcetextscalingdocumentattribute)

# NSSourceTextScalingDocumentAttribute

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The text-scaling mode you used when creating the text.

## Declaration

```objectivec
extern NSAttributedStringDocumentAttributeKey const NSSourceTextScalingDocumentAttribute;
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. Include this attribute to specify the original text-scaling mode you used to create the text.

## See Also

### Getting the font-scaling options

- [NSTextScalingDocumentAttribute](nstextscalingdocumentattribute.md): The text-scaling mode to use when displaying the text.
