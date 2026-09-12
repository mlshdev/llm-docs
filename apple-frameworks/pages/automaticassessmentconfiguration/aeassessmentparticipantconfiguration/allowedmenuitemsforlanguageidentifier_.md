> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemsforlanguageidentifier:](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitemsforlanguageidentifier:)

# allowedMenuItemsForLanguageIdentifier:

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Returns the set of allowed menu item titles for the given language identifier, or `nil` if no items have been configured for that identifier.

## Declaration

```objectivec
- (NSSet<NSString *> *) allowedMenuItemsForLanguageIdentifier:(NSString *) languageIdentifier;
```

## Parameters

- `languageIdentifier`: A BCP 47 language identifier (for example, `en` or `zh-Hans`).

<a id="discussion"></a>

## Discussion

Menu item titles are matched against the participant application’s localized menu items at the time the assessment session begins. The system resolves each language identifier to the best-matching localization the application bundle provides, so an exact locale match is not required.
