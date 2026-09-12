> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/externalsubtitleoptionlanguages](https://developer.apple.com/documentation/avfoundation/avplayeritem/externalsubtitleoptionlanguages)

# externalSubtitleOptionLanguages

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 9.0)

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * externalSubtitleOptionLanguages;
```

<a id="discussion"></a>

## Discussion

An array of BCP 47 language codes that supplements the list of subtitle options that will be presented to the user.

This list is strictly for non-standard, application-rendered subtitles, that cannot be handled by AVFoundation. Most clients should not need to set this property. The application should implement the playerViewController:didSelectExternalSubtitleOptionLanguage: method of its AVPlayerViewControllerDelegate to be notified when one of these languages has been chosen by the user.

## See Also

### Setting subtitle options

- [selectedExternalSubtitleOptionLanguage](selectedexternalsubtitleoptionlanguage.md): Deprecated.
