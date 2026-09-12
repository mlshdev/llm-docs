> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstargettextscalingdocumentoption](https://developer.apple.com/documentation/appkit/nstargettextscalingdocumentoption)

# NSTargetTextScalingDocumentOption

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.15+

The text scaling mode to use after reading the text from disk.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey const NSTargetTextScalingDocumentOption;
```

<a id="discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. Include this option to specify the text-scaling mode you want to use for the document you read.

## See Also

### Getting the font-scaling options

- [NSSourceTextScalingDocumentOption](nssourcetextscalingdocumentoption.md): The text-scaling mode to associate with the document’s content.
