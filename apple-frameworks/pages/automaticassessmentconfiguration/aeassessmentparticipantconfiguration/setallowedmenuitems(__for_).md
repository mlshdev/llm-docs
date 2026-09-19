> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentparticipantconfiguration/setallowedmenuitems(_:for:)

# setAllowedMenuItems(\_:for:)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Sets the allowed menu item titles for the given language.

## Declaration

```swift
func setAllowedMenuItems(_ menuItems: Set<String>?, for language: Locale.Language)
```

## Parameters

- `menuItems`: The set of menu item titles to allow, or `nil` to remove the entry for `language`.
- `language`: The language to associate with `menuItems`.

<a id="discussion"></a>

## Discussion

Use this method to specify which menu items the participant application may display during an assessment session. Titles must match the application’s localized menu item strings for the corresponding language.

If multiple languages resolve to the same application localization, the system combines their sets of allowed menu items.
