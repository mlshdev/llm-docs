> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mplanguageoptioncharacteristiccontainsonlyforcedsubtitles](https://developer.apple.com/documentation/mediaplayer/mplanguageoptioncharacteristiccontainsonlyforcedsubtitles)

# MPLanguageOptionCharacteristicContainsOnlyForcedSubtitles (Swift)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Indicates that the language option presents only forced subtitles.

## Declaration

```swift
let MPLanguageOptionCharacteristicContainsOnlyForcedSubtitles: String
```

<a id="Discussion"></a>

## Discussion

Language options with forced-only subtitles are typically selected when the user hasn’t selected a legible option with an accessibility characteristic or an auxiliary purpose and its locale matches the locale of the selected audible language option. The system infers the presence of this characteristic for a legible language option from the format description of the associated track that presents the subtitle media.

## See Also

### Language option characteristic constants

- [MPLanguageOptionCharacteristicDescribesMusicAndSound](mplanguageoptioncharacteristicdescribesmusicandsound.md): Indicates that the language option includes legible content in the language of its specified locale that describes music and sound effects occurring in program audio.
- [MPLanguageOptionCharacteristicDescribesVideo](mplanguageoptioncharacteristicdescribesvideo.md): Indicates that the language option includes audible content that describes the visual portion of the presentation.
- [MPLanguageOptionCharacteristicDubbedTranslation](mplanguageoptioncharacteristicdubbedtranslation.md): Indicates that the language option includes content that contains a dubbed translation.
- [MPLanguageOptionCharacteristicEasyToRead](mplanguageoptioncharacteristiceasytoread.md): Indicates that the language option provides legible content in the language of its specified locale and that the content was edited for ease of reading.
- [MPLanguageOptionCharacteristicIsAuxiliaryContent](mplanguageoptioncharacteristicisauxiliarycontent.md): Indicates that the language option includes content that’s marked by the content author as auxiliary to the presentation of the language option.
- [MPLanguageOptionCharacteristicIsMainProgramContent](mplanguageoptioncharacteristicismainprogramcontent.md): Indicates that the language option includes content that’s marked by the content author as intrinsic to the presentation of the language option.
- [MPLanguageOptionCharacteristicLanguageTranslation](mplanguageoptioncharacteristiclanguagetranslation.md): Indicates that the language option contains a translation in the language of its specified locale.
- [MPLanguageOptionCharacteristicTranscribesSpokenDialog](mplanguageoptioncharacteristictranscribesspokendialog.md): Indicates that the language option includes legible content in the language of its specified locale that transcribes spoken dialog.
- [MPLanguageOptionCharacteristicVoiceOverTranslation](mplanguageoptioncharacteristicvoiceovertranslation.md): Indicates that the language option includes voice over content in the language of its specified locale describes translated dialog.

# MPLanguageOptionCharacteristicContainsOnlyForcedSubtitles (Objective-C)

**Framework:** Media Player  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

Indicates that the language option presents only forced subtitles.

## Declaration

```objectivec
extern NSString * const MPLanguageOptionCharacteristicContainsOnlyForcedSubtitles;
```

<a id="Discussion"></a>

## Discussion

Language options with forced-only subtitles are typically selected when the user hasn’t selected a legible option with an accessibility characteristic or an auxiliary purpose and its locale matches the locale of the selected audible language option. The system infers the presence of this characteristic for a legible language option from the format description of the associated track that presents the subtitle media.

## See Also

### Language option characteristic constants

- [MPLanguageOptionCharacteristicDescribesMusicAndSound](mplanguageoptioncharacteristicdescribesmusicandsound.md): Indicates that the language option includes legible content in the language of its specified locale that describes music and sound effects occurring in program audio.
- [MPLanguageOptionCharacteristicDescribesVideo](mplanguageoptioncharacteristicdescribesvideo.md): Indicates that the language option includes audible content that describes the visual portion of the presentation.
- [MPLanguageOptionCharacteristicDubbedTranslation](mplanguageoptioncharacteristicdubbedtranslation.md): Indicates that the language option includes content that contains a dubbed translation.
- [MPLanguageOptionCharacteristicEasyToRead](mplanguageoptioncharacteristiceasytoread.md): Indicates that the language option provides legible content in the language of its specified locale and that the content was edited for ease of reading.
- [MPLanguageOptionCharacteristicIsAuxiliaryContent](mplanguageoptioncharacteristicisauxiliarycontent.md): Indicates that the language option includes content that’s marked by the content author as auxiliary to the presentation of the language option.
- [MPLanguageOptionCharacteristicIsMainProgramContent](mplanguageoptioncharacteristicismainprogramcontent.md): Indicates that the language option includes content that’s marked by the content author as intrinsic to the presentation of the language option.
- [MPLanguageOptionCharacteristicLanguageTranslation](mplanguageoptioncharacteristiclanguagetranslation.md): Indicates that the language option contains a translation in the language of its specified locale.
- [MPLanguageOptionCharacteristicTranscribesSpokenDialog](mplanguageoptioncharacteristictranscribesspokendialog.md): Indicates that the language option includes legible content in the language of its specified locale that transcribes spoken dialog.
- [MPLanguageOptionCharacteristicVoiceOverTranslation](mplanguageoptioncharacteristicvoiceovertranslation.md): Indicates that the language option includes voice over content in the language of its specified locale describes translated dialog.
