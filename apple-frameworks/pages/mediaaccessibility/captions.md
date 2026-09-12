> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/captions](https://developer.apple.com/documentation/mediaaccessibility/captions)

# Captions (Swift)

**Framework:** Media Accessibility  
**Kind:** API Collection

Coordinate the presentation of closed-captioned data for your app’s media files.

<a id="overview"></a>

## Overview

People can create custom styles for caption appearance in Accessibility settings. The Media Accessibility framework provides access to these user-captioning settings.

In macOS, choose System Settings \> Accessibility \> Captions to access these options.

![Screenshot of the Accessibility settings in macOS with Captions selected.](https://developer.apple.com/images/com.apple.mediaaccessibility/media-3709928@2x.png)

When a person creates a custom caption style, the settings affect attributes, such as caption color, font, and language.

![Screenshot of the Captions settings for a custom style in macOS.](https://developer.apple.com/images/com.apple.mediaaccessibility/media-3709929@2x.png)

By choosing custom styles for media text, people are requesting improved legibility. The Media Accessibility functions let you to tailor the user experience of your media content. You must be able to influence the caption-rendering process at time of delivery for the following functions to be useful. Retrieving a person’s preferences and dynamically rendering the captions for maximum readability provides the best user experience.

## Topics

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceDidDisplayCaptions(\_:)](macaptionappearancediddisplaycaptions%28__%29.md): Informs accessibility clients when captions display onscreen.
- [MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics(\_:)](macaptionappearancecopypreferredcaptioningmediacharacteristics%28__%29.md): Returns the preferences for captioning sounds.
- [MACaptionAppearanceGetDisplayType(\_:)](macaptionappearancegetdisplaytype%28__%29.md): Returns the preferred type of captions to display.
- [MACaptionAppearanceSetDisplayType(\_:\_:)](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.

### Language settings

- [MACaptionAppearanceAddSelectedLanguage(\_:\_:)](macaptionappearanceaddselectedlanguage%28____%29.md): Adds a preference for caption language to the stack of languages.
- [MACaptionAppearanceCopySelectedLanguages(\_:)](macaptionappearancecopyselectedlanguages%28__%29.md): Returns the preferred caption languages.

### Text settings

- [MACaptionAppearanceCopyFontDescriptorForStyle(\_:\_:\_:)](macaptionappearancecopyfontdescriptorforstyle%28______%29.md): Returns the preferred font for the specified style of type.
- [MACaptionAppearanceCopyForegroundColor(\_:\_:)](macaptionappearancecopyforegroundcolor%28____%29.md): Returns the preference for text color.
- [MACaptionAppearanceGetForegroundOpacity(\_:\_:)](macaptionappearancegetforegroundopacity%28____%29.md): Returns the preference for text opacity.
- [MACaptionAppearanceGetRelativeCharacterSize(\_:\_:)](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle(\_:\_:)](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.

### Text highlight settings

- [MACaptionAppearanceCopyBackgroundColor(\_:\_:)](macaptionappearancecopybackgroundcolor%28____%29.md): Returns the preference for the text highlight color.
- [MACaptionAppearanceGetBackgroundOpacity(\_:\_:)](macaptionappearancegetbackgroundopacity%28____%29.md): Returns the preference for the text highlight opacity.

### Caption window settings

- [MACaptionAppearanceCopyWindowColor(\_:\_:)](macaptionappearancecopywindowcolor%28____%29.md): Returns the preference for the caption window’s color.
- [MACaptionAppearanceGetWindowOpacity(\_:\_:)](macaptionappearancegetwindowopacity%28____%29.md): Returns the preference for the overlay’s opacity.
- [MACaptionAppearanceGetWindowRoundedCornerRadius(\_:\_:)](macaptionappearancegetwindowroundedcornerradius%28____%29.md): Returns the radius of the caption window’s corners.

### Image captioning settings

- [MAImageCaptioningCopyCaption(\_:\_:)](maimagecaptioningcopycaption%28____%29.md): Returns an accessibility caption from an image’s metadata.
- [MAImageCaptioningSetCaption(\_:\_:\_:)](maimagecaptioningsetcaption%28______%29.md): Sets the accessibility caption for an image’s metadata.
- [MAImageCaptioningCopyMetadataTagPath()](maimagecaptioningcopymetadatatagpath%28%29.md): Returns the metadata tag path.

### Audible media selection settings

- [kMAAudibleMediaSettingsChangedNotification](kmaaudiblemediasettingschangednotification.md): A notification that occurs when any user-defined audible media settings change.
- [MAAudibleMediaCopyPreferredCharacteristics()](maaudiblemediacopypreferredcharacteristics%28%29.md): Returns the preference for audible media characteristics.
- [MAMediaCharacteristicDescribesVideoForAccessibility](mamediacharacteristicdescribesvideoforaccessibility.md): A media characteristic that indicates that a track or media selection option includes audible content that describes a video for accessibility.
- [MAMediaCharacteristicDescribesMusicAndSoundForAccessibility](mamediacharacteristicdescribesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that describes music and sound other than spoken dialog.
- [MAMediaCharacteristicTranscribesSpokenDialogForAccessibility](mamediacharacteristictranscribesspokendialogforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that transcribes spoken dialog and identifies the speakers.

### Profile settings

- [MACaptionAppearanceCopyProfileIDs()](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceSetActiveProfileID(\_:)](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID()](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName(\_:)](macaptionappearancecopyprofilename%28__%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID(\_:\_:)](macaptionappearanceexecuteblockforprofileid%28____%29.md)

### Customization status

- [MACaptionAppearanceIsCustomized(\_:)](macaptionappearanceiscustomized%28__%29.md)

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.

## See Also

### Features

- [Flashing lights](flashing-lights.md): Detect, mitigate, and inform people about flashing lights in media content.
- [Music Haptics](music-haptics.md): Play haptic tracks along with known music tracks.

# Captions (Objective-C)

**Framework:** Media Accessibility  
**Kind:** API Collection

Coordinate the presentation of closed-captioned data for your app’s media files.

<a id="overview"></a>

## Overview

People can create custom styles for caption appearance in Accessibility settings. The Media Accessibility framework provides access to these user-captioning settings.

In macOS, choose System Settings \> Accessibility \> Captions to access these options.

![Screenshot of the Accessibility settings in macOS with Captions selected.](https://developer.apple.com/images/com.apple.mediaaccessibility/media-3709928@2x.png)

When a person creates a custom caption style, the settings affect attributes, such as caption color, font, and language.

![Screenshot of the Captions settings for a custom style in macOS.](https://developer.apple.com/images/com.apple.mediaaccessibility/media-3709929@2x.png)

By choosing custom styles for media text, people are requesting improved legibility. The Media Accessibility functions let you to tailor the user experience of your media content. You must be able to influence the caption-rendering process at time of delivery for the following functions to be useful. Retrieving a person’s preferences and dynamically rendering the captions for maximum readability provides the best user experience.

## Topics

### General settings

- [kMACaptionAppearanceSettingsChangedNotification](kmacaptionappearancesettingschangednotification.md): A notification that occurs when any user-defined caption settings change.
- [MACaptionAppearanceDidDisplayCaptions](macaptionappearancediddisplaycaptions%28__%29.md): Informs accessibility clients when captions display onscreen.
- [MACaptionAppearanceCopyPreferredCaptioningMediaCharacteristics](macaptionappearancecopypreferredcaptioningmediacharacteristics%28__%29.md): Returns the preferences for captioning sounds.
- [MACaptionAppearanceGetDisplayType](macaptionappearancegetdisplaytype%28__%29.md): Returns the preferred type of captions to display.
- [MACaptionAppearanceSetDisplayType](macaptionappearancesetdisplaytype%28____%29.md): Sets the preference for the type of caption.

### Language settings

- [MACaptionAppearanceAddSelectedLanguage](macaptionappearanceaddselectedlanguage%28____%29.md): Adds a preference for caption language to the stack of languages.
- [MACaptionAppearanceCopySelectedLanguages](macaptionappearancecopyselectedlanguages%28__%29.md): Returns the preferred caption languages.

### Text settings

- [MACaptionAppearanceCopyFontDescriptorForStyle](macaptionappearancecopyfontdescriptorforstyle%28______%29.md): Returns the preferred font for the specified style of type.
- [MACaptionAppearanceCopyForegroundColor](macaptionappearancecopyforegroundcolor%28____%29.md): Returns the preference for text color.
- [MACaptionAppearanceGetForegroundOpacity](macaptionappearancegetforegroundopacity%28____%29.md): Returns the preference for text opacity.
- [MACaptionAppearanceGetRelativeCharacterSize](macaptionappearancegetrelativecharactersize%28____%29.md): Returns the preference for font scaling.
- [MACaptionAppearanceGetTextEdgeStyle](macaptionappearancegettextedgestyle%28____%29.md): Returns the preference for text edge style.

### Text highlight settings

- [MACaptionAppearanceCopyBackgroundColor](macaptionappearancecopybackgroundcolor%28____%29.md): Returns the preference for the text highlight color.
- [MACaptionAppearanceGetBackgroundOpacity](macaptionappearancegetbackgroundopacity%28____%29.md): Returns the preference for the text highlight opacity.

### Caption window settings

- [MACaptionAppearanceCopyWindowColor](macaptionappearancecopywindowcolor%28____%29.md): Returns the preference for the caption window’s color.
- [MACaptionAppearanceGetWindowOpacity](macaptionappearancegetwindowopacity%28____%29.md): Returns the preference for the overlay’s opacity.
- [MACaptionAppearanceGetWindowRoundedCornerRadius](macaptionappearancegetwindowroundedcornerradius%28____%29.md): Returns the radius of the caption window’s corners.

### Image captioning settings

- [MAImageCaptioningCopyCaption](maimagecaptioningcopycaption%28____%29.md): Returns an accessibility caption from an image’s metadata.
- [MAImageCaptioningSetCaption](maimagecaptioningsetcaption%28______%29.md): Sets the accessibility caption for an image’s metadata.
- [MAImageCaptioningCopyMetadataTagPath](maimagecaptioningcopymetadatatagpath%28%29.md): Returns the metadata tag path.

### Audible media selection settings

- [kMAAudibleMediaSettingsChangedNotification](kmaaudiblemediasettingschangednotification.md): A notification that occurs when any user-defined audible media settings change.
- [MAAudibleMediaCopyPreferredCharacteristics](maaudiblemediacopypreferredcharacteristics%28%29.md): Returns the preference for audible media characteristics.
- [MAMediaCharacteristicDescribesVideoForAccessibility](mamediacharacteristicdescribesvideoforaccessibility.md): A media characteristic that indicates that a track or media selection option includes audible content that describes a video for accessibility.
- [MAMediaCharacteristicDescribesMusicAndSoundForAccessibility](mamediacharacteristicdescribesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that describes music and sound other than spoken dialog.
- [MAMediaCharacteristicTranscribesSpokenDialogForAccessibility](mamediacharacteristictranscribesspokendialogforaccessibility.md): A media characteristic that indicates that a track includes legible content in the language of its specified locale that transcribes spoken dialog and identifies the speakers.

### Profile settings

- [MACaptionAppearanceCopyProfileIDs](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceSetActiveProfileID](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName](macaptionappearancecopyprofilename%28__%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID](macaptionappearanceexecuteblockforprofileid%28____%29.md)

### Customization status

- [MACaptionAppearanceIsCustomized](macaptionappearanceiscustomized%28__%29.md)

### Constants

- [MACaptionAppearanceDomain](macaptionappearancedomain.md): A value that specifies which domain to retrieve a preference setting from.
- [MACaptionAppearanceDisplayType](macaptionappearancedisplaytype.md): A value that specifies the type of captions to display.
- [MACaptionAppearanceBehavior](macaptionappearancebehavior.md): A value that indicates the preferred behavior for a preference setting.
- [MACaptionAppearanceFontStyle](macaptionappearancefontstyle.md): A value that specifies a font style.
- [MACaptionAppearanceTextEdgeStyle](macaptionappearancetextedgestyle.md): A value that specifies a style for the outside of the text.

### Macros

- [MA_EXPORT](ma_export.md)
- [MA_EXTERN](ma_extern.md)
- [MA_VISIBLE](ma_visible.md)
- [MA_EXTERN_C_BEGIN](ma_extern_c_begin.md)
- [MA_EXTERN_C_END](ma_extern_c_end.md)

## See Also

### Features

- [Flashing lights](flashing-lights.md): Detect, mitigate, and inform people about flashing lights in media content.
- [Music Haptics](music-haptics.md): Play haptic tracks along with known music tracks.
