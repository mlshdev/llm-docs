> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805025-cmsetprofilelocalizedstringdicti](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805025-cmsetprofilelocalizedstringdicti)

# CMSetProfileLocalizedStringDictionary

**Interface language:** Objective-C

**Framework:** Application Services

Writes a dictionary of localized strings to a given tag in a profile.

## Declaration

```objectivec
CMError CMSetProfileLocalizedStringDictionary (
   CMProfileRef prof,
   OSType tag,
   CFDictionaryRef theDict
);
```

## Parameters

- `prof`: The profile to modify.
- `tag`: The tag type of profile to modify.
- `theDict`: The dictionary to modify. See the CFDictionary documentation for a description of the `CFDictionaryRef` data type.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

## See Also

### Accessing Profile Descriptions

- [CMCopyProfileDescriptionString](1805012-cmcopyprofiledescriptionstring.md): Returns the name of a profile as a CFString.
- [CMCopyProfileLocalizedString](1805016-cmcopyprofilelocalizedstring.md): Gets one specific string out of a profile
- [CMCopyProfileLocalizedStringDictionary](1805020-cmcopyprofilelocalizedstringdict.md): Obtains a CFDictionary which contains the language locale and string for multiple localizations from a given tag.
- [CMGetScriptProfileDescription](1805029-cmgetscriptprofiledescription.md): Obtains the internal name (or description) of a profile and the script code identifying the language in which the profile name is specified from the specified profile.
- [CMGetProfileDescriptions](1805034-cmgetprofiledescriptions.md): Obtains the description tag data for a specified profile.
- [CMSetProfileDescriptions](1805039-cmsetprofiledescriptions.md): Sets the description tag data for a specified profile.
