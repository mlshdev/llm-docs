> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/setallowedmenuitems:forlanguageidentifier:](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/setallowedmenuitems:forlanguageidentifier:)

# setAllowedMenuItems:forLanguageIdentifier:

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Sets the allowed menu item titles for the given language identifier.

## Declaration

```objectivec
- (void) setAllowedMenuItems:(NSSet<NSString *> *) menuItems forLanguageIdentifier:(NSString *) languageIdentifier;
```

## Parameters

- `menuItems`: The set of menu item titles to allow, or `nil` to remove the entry for `languageIdentifier`.
- `languageIdentifier`: A BCP 47 language identifier (for example, `en` or `zh-Hans`).

<a id="discussion"></a>

## Discussion

Titles must match the participant application’s localized menu item strings for the corresponding language. If multiple language identifiers resolve to the same application localization, the system combines their sets of allowed menu items.
