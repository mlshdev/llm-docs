> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstargettextscalingdocumentoption](https://developer.apple.com/documentation/uikit/nstargettextscalingdocumentoption)

# NSTargetTextScalingDocumentOption

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The text scaling mode to use after reading the text from disk.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey const NSTargetTextScalingDocumentOption;
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. Include this option to specify the text-scaling mode you want to use for the document you read.

## See Also

### Getting the font-scaling options

- [NSSourceTextScalingDocumentOption](nssourcetextscalingdocumentoption.md): The text-scaling mode to associate with the document’s content.
