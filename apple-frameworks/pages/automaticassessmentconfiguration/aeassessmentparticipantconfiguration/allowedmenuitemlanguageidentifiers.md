> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemlanguageidentifiers

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
