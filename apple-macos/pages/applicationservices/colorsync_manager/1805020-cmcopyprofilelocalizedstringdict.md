> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805020-cmcopyprofilelocalizedstringdict](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805020-cmcopyprofilelocalizedstringdict)

# CMCopyProfileLocalizedStringDictionary

**Interface language:** Objective-C

**Framework:** Application Services

Obtains a CFDictionary which contains the language locale and string for multiple localizations from a given tag.

## Declaration

```objectivec
CMError CMCopyProfileLocalizedStringDictionary (
   CMProfileRef prof,
   OSType tag,
   CFDictionaryRef *theDict
);
```

## Parameters

- `prof`: The profile to query
- `tag`: The tag type of profile to query
- `theDict`: On output, points to the dictionary .See the CFDictionary documentation for a description of the `CFDictionaryRef` data type.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

This function allows you to get a CFDictionary which contains the language locale and string for multiple localizations from a given tag.

## See Also

### Accessing Profile Descriptions

- [CMCopyProfileDescriptionString](1805012-cmcopyprofiledescriptionstring.md): Returns the name of a profile as a CFString.
- [CMCopyProfileLocalizedString](1805016-cmcopyprofilelocalizedstring.md): Gets one specific string out of a profile
- [CMSetProfileLocalizedStringDictionary](1805025-cmsetprofilelocalizedstringdicti.md): Writes a dictionary of localized strings to a given tag in a profile.
- [CMGetScriptProfileDescription](1805029-cmgetscriptprofiledescription.md): Obtains the internal name (or description) of a profile and the script code identifying the language in which the profile name is specified from the specified profile.
- [CMGetProfileDescriptions](1805034-cmgetprofiledescriptions.md): Obtains the description tag data for a specified profile.
- [CMSetProfileDescriptions](1805039-cmsetprofiledescriptions.md): Sets the description tag data for a specified profile.
