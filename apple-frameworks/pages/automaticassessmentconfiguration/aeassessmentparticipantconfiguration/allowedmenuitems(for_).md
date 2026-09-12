> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitems(for:)](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/allowedmenuitems(for:))

# allowedMenuItems(for:)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Returns the set of allowed menu item titles for the given language, or `nil` if no items have been configured for that language.

## Declaration

```swift
func allowedMenuItems(for language: Locale.Language) -> Set<String>?
```

## Parameters

- `language`: The language for which to return allowed menu items.

<a id="discussion"></a>

## Discussion

Menu item titles are matched against the participant application’s localized menu items at the time the assessment session begins. The system resolves each language to the best-matching localization the application bundle provides, so an exact locale match is not required.
