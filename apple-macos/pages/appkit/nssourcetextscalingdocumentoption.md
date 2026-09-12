> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssourcetextscalingdocumentoption](https://developer.apple.com/documentation/appkit/nssourcetextscalingdocumentoption)

# NSSourceTextScalingDocumentOption

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.15+

The text-scaling mode to associate with the document’s content.

## Declaration

```objectivec
extern NSAttributedStringDocumentReadingOptionKey const NSSourceTextScalingDocumentOption;
```

<a id="discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. Include this option to specify the text-scaling mode to associate with the document’s contents on disk.

## See Also

### Getting the font-scaling options

- [NSTargetTextScalingDocumentOption](nstargettextscalingdocumentoption.md): The text scaling mode to use after reading the text from disk.
