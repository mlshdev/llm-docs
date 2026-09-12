> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/selectmediaoptionautomatically(in:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/selectmediaoptionautomatically(in:))

# selectMediaOptionAutomatically(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Selects the media option in the specified media selection group that best matches the receiver’s automatic selection criteria.

## Declaration

```swift
nonisolated func selectMediaOptionAutomatically(in mediaSelectionGroup: AVMediaSelectionGroup)
```

## Parameters

- `mediaSelectionGroup`: The media selection group, obtained from the receiver’s [asset](asset.md), that contains the specified option.

<a id="Discussion"></a>

## Discussion

This method has no effect unless the [appliesMediaSelectionCriteriaAutomatically](../avplayer/appliesmediaselectioncriteriaautomatically.md) property of the associated [AVPlayer](../avplayer.md) is [true](https://developer.apple.com/documentation/swift/true) and unless automatic media selection has previously been overridden by invoking [select(\_:in:)](select%28__in_%29.md).

## See Also

### Selecting media options

- [select(\_:for:)](select%28__for_%29.md): When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular presentation setting, replacing any previous preference for settings of the same media presentation selector.
- [preferredCustomMediaSelectionSchemes](preferredcustommediaselectionschemes.md): Indicates the AVCustomMediaSelectionSchemes of AVMediaSelectionGroups of the receiver’s asset with which an associated UI implementation should configure its interface for media selection.
- [effectiveMediaPresentationSettings(for:)](effectivemediapresentationsettings%28for_%29.md): Indicates the media presentation settings with media characteristics that are possessed by the currently selected AVMediaSelectionOption in the specified AVMediaSelectionGroup.
- [selectMediaPresentationLanguage(\_:for:)](selectmediapresentationlanguage%28__for_%29.md): When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular language, replacing any previous preference for available languages of the specified group’s custom media selection scheme.
- [selectedMediaPresentationLanguage(for:)](selectedmediapresentationlanguage%28for_%29.md): Returns the selected media presentation language for the specified media selection group, if any language has previously been selected via use of -selectMediaPresentationLanguages:forMediaSelectionGroup:.
- [selectedMediaPresentationSettings(for:)](selectedmediapresentationsettings%28for_%29.md): Indicates the media presentation settings that have most recently been selected for each AVMediaPresentationSelector of the AVCustomMediaSelectionScheme of the specified AVMediaSelectionGroup.
- [currentMediaSelection](currentmediaselection.md): The current media selections for each of the receiver’s media selection groups.
- [select(\_:in:)](select%28__in_%29.md): Selects a media option in a given media selection group and deselects all other options in that group.

# selectMediaOptionAutomaticallyInMediaSelectionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Selects the media option in the specified media selection group that best matches the receiver’s automatic selection criteria.

## Declaration

```objectivec
- (void) selectMediaOptionAutomaticallyInMediaSelectionGroup:(AVMediaSelectionGroup *) mediaSelectionGroup;
```

## Parameters

- `mediaSelectionGroup`: The media selection group, obtained from the receiver’s [asset](asset.md), that contains the specified option.

<a id="Discussion"></a>

## Discussion

This method has no effect unless the [appliesMediaSelectionCriteriaAutomatically](../avplayer/appliesmediaselectioncriteriaautomatically.md) property of the associated [AVPlayer](../avplayer.md) is [true](https://developer.apple.com/documentation/swift/true) and unless automatic media selection has previously been overridden by invoking [selectMediaOption:inMediaSelectionGroup:](select%28__in_%29.md).

## See Also

### Selecting media options

- [selectMediaPresentationSetting:forMediaSelectionGroup:](select%28__for_%29.md): When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular presentation setting, replacing any previous preference for settings of the same media presentation selector.
- [preferredCustomMediaSelectionSchemes](preferredcustommediaselectionschemes.md): Indicates the AVCustomMediaSelectionSchemes of AVMediaSelectionGroups of the receiver’s asset with which an associated UI implementation should configure its interface for media selection.
- [effectiveMediaPresentationSettingsForMediaSelectionGroup:](effectivemediapresentationsettings%28for_%29.md): Indicates the media presentation settings with media characteristics that are possessed by the currently selected AVMediaSelectionOption in the specified AVMediaSelectionGroup.
- [selectMediaPresentationLanguage:forMediaSelectionGroup:](selectmediapresentationlanguage%28__for_%29.md): When the associated AVPlayer’s appliesMediaSelectionCriteriaAutomatically property is set to YES, configures the player item to prefer a particular language, replacing any previous preference for available languages of the specified group’s custom media selection scheme.
- [selectedMediaPresentationLanguageForMediaSelectionGroup:](selectedmediapresentationlanguage%28for_%29.md): Returns the selected media presentation language for the specified media selection group, if any language has previously been selected via use of -selectMediaPresentationLanguages:forMediaSelectionGroup:.
- [selectedMediaPresentationSettingsForMediaSelectionGroup:](selectedmediapresentationsettings%28for_%29.md): Indicates the media presentation settings that have most recently been selected for each AVMediaPresentationSelector of the AVCustomMediaSelectionScheme of the specified AVMediaSelectionGroup.
- [currentMediaSelection](currentmediaselection.md): The current media selections for each of the receiver’s media selection groups.
- [selectMediaOption:inMediaSelectionGroup:](select%28__in_%29.md): Selects a media option in a given media selection group and deselects all other options in that group.
