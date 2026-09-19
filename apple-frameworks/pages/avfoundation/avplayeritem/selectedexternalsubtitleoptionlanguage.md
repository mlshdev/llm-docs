> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritem/selectedexternalsubtitleoptionlanguage

# selectedExternalSubtitleOptionLanguage

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 9.0)

## Declaration

```objectivec
@property (nonatomic, copy) NSString * selectedExternalSubtitleOptionLanguage;
```

<a id="discussion"></a>

## Discussion

Specifies BCP 47 language code of the external subtitle option language marked in the user interface.

If anything other than an external subtitle option is selected (including “Off”), then this property should be set to an empty string. If the value is not an empty string, it should be an element of the externalSubtitleOptionLanguages array.

## See Also

### Setting subtitle options

- [externalSubtitleOptionLanguages](externalsubtitleoptionlanguages.md): Deprecated.
