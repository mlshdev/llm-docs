> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemlanguageidentifiers](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemlanguageidentifiers)

# allowedMenuItemLanguageIdentifiers

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of language identifiers for which allowed menu items have been configured.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<NSString *> * allowedMenuItemLanguageIdentifiers;
```

<a id="discussion"></a>

## Discussion

Contains only identifiers explicitly added via `setAllowedMenuItems(_:forLanguageIdentifier:)`. Does not include identifiers inferred through localization resolution.
