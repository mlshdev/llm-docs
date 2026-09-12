> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/selectmediapresentationlanguage(_:for:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/selectmediapresentationlanguage(_:for:))

# selectMediaPresentationLanguage(\_:for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular language, replacing any previous preference for available languages of the specified group’s custom media selection scheme.

## Declaration

```swift
func selectMediaPresentationLanguage(_ language: String, for mediaSelectionGroup: AVMediaSelectionGroup)
```

## Parameters

- `mediaSelectionGroup`: The media selection group, obtained from the receiver’s asset, to which the specified setting is to be applied.

<a id="discussion"></a>

## Discussion

Overrides preferences for languages specified by the AVPlayer’s current media selection criteria. This method has no effect when the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property has a value of NO, in which case you must use -selectMediaOption:inMediaSelectionGroup: instead in order to alter the presentation state of the media.

## See Also

### Selecting media options

- [select(\_:for:)](select%28__for_%29.md): When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular presentation setting, replacing any previous preference for settings of the same media presentation selector.
- [preferredCustomMediaSelectionSchemes](preferredcustommediaselectionschemes.md): Indicates the AVCustomMediaSelectionSchemes of AVMediaSelectionGroups of the receiver’s asset with which an associated UI implementation should configure its interface for media selection.
- [effectiveMediaPresentationSettings(for:)](effectivemediapresentationsettings%28for_%29.md): Indicates the media presentation settings with media characteristics that are possessed by the currently selected AVMediaSelectionOption in the specified AVMediaSelectionGroup.
- [selectedMediaPresentationLanguage(for:)](selectedmediapresentationlanguage%28for_%29.md): Returns the selected media presentation language for the specified media selection group, if any language has previously been selected via use of -selectMediaPresentationLanguages:forMediaSelectionGroup:.
- [selectedMediaPresentationSettings(for:)](selectedmediapresentationsettings%28for_%29.md): Indicates the media presentation settings that have most recently been selected for each AVMediaPresentationSelector of the AVCustomMediaSelectionScheme of the specified AVMediaSelectionGroup.
- [currentMediaSelection](currentmediaselection.md): The current media selections for each of the receiver’s media selection groups.
- [select(\_:in:)](select%28__in_%29.md): Selects a media option in a given media selection group and deselects all other options in that group.
- [selectMediaOptionAutomatically(in:)](selectmediaoptionautomatically%28in_%29.md): Selects the media option in the specified media selection group that best matches the receiver’s automatic selection criteria.

# selectMediaPresentationLanguage:forMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular language, replacing any previous preference for available languages of the specified group’s custom media selection scheme.

## Declaration

```objectivec
- (void) selectMediaPresentationLanguage:(NSString *) language forMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: The media selection group, obtained from the receiver’s asset, to which the specified setting is to be applied.

<a id="discussion"></a>

## Discussion

Overrides preferences for languages specified by the AVPlayer’s current media selection criteria. This method has no effect when the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property has a value of NO, in which case you must use -selectMediaOption:inMediaSelectionGroup: instead in order to alter the presentation state of the media.

## See Also

### Selecting media options

- [selectMediaPresentationSetting:forMediaSelectionGroup:](select%28__for_%29.md): When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular presentation setting, replacing any previous preference for settings of the same media presentation selector.
- [preferredCustomMediaSelectionSchemes](preferredcustommediaselectionschemes.md): Indicates the AVCustomMediaSelectionSchemes of AVMediaSelectionGroups of the receiver’s asset with which an associated UI implementation should configure its interface for media selection.
- [effectiveMediaPresentationSettingsForMediaSelectionGroup:](effectivemediapresentationsettings%28for_%29.md): Indicates the media presentation settings with media characteristics that are possessed by the currently selected AVMediaSelectionOption in the specified AVMediaSelectionGroup.
- [selectedMediaPresentationLanguageForMediaSelectionGroup:](selectedmediapresentationlanguage%28for_%29.md): Returns the selected media presentation language for the specified media selection group, if any language has previously been selected via use of -selectMediaPresentationLanguages:forMediaSelectionGroup:.
- [selectedMediaPresentationSettingsForMediaSelectionGroup:](selectedmediapresentationsettings%28for_%29.md): Indicates the media presentation settings that have most recently been selected for each AVMediaPresentationSelector of the AVCustomMediaSelectionScheme of the specified AVMediaSelectionGroup.
- [currentMediaSelection](currentmediaselection.md): The current media selections for each of the receiver’s media selection groups.
- [selectMediaOption:inMediaSelectionGroup:](select%28__in_%29.md): Selects a media option in a given media selection group and deselects all other options in that group.
- [selectMediaOptionAutomaticallyInMediaSelectionGroup:](selectmediaoptionautomatically%28in_%29.md): Selects the media option in the specified media selection group that best matches the receiver’s automatic selection criteria.
