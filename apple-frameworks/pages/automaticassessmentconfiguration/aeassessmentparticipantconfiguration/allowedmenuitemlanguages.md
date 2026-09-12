> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemlanguages](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemlanguages)

# allowedMenuItemLanguages

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of languages for which allowed menu items have been configured.

## Declaration

```swift
var allowedMenuItemLanguages: Set<Locale.Language> { get }
```

<a id="discussion"></a>

## Discussion

Contains only languages explicitly added via [setAllowedMenuItems(\_:for:)](setallowedmenuitems%28__for_%29.md). Each returned language matches the value originally passed to that method. Does not include languages inferred through localization resolution.
