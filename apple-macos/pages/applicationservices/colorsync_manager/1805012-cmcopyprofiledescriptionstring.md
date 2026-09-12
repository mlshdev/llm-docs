> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805012-cmcopyprofiledescriptionstring](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805012-cmcopyprofiledescriptionstring)

# CMCopyProfileDescriptionString

**Interface language:** Objective-C

**Framework:** Application Services

Returns the name of a profile as a CFString.

## Declaration

```objectivec
CMError CMCopyProfileDescriptionString (
   CMProfileRef prof,
   CFStringRef *str
);
```

## Parameters

- `prof`: The profile to query.
- `str`: On output, the name of the profile as a CFString.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

If the profile is localized, ColorSync obtains the best localized name for the current process.

## See Also

### Accessing Profile Descriptions

- [CMCopyProfileLocalizedString](1805016-cmcopyprofilelocalizedstring.md): Gets one specific string out of a profile
- [CMCopyProfileLocalizedStringDictionary](1805020-cmcopyprofilelocalizedstringdict.md): Obtains a CFDictionary which contains the language locale and string for multiple localizations from a given tag.
- [CMSetProfileLocalizedStringDictionary](1805025-cmsetprofilelocalizedstringdicti.md): Writes a dictionary of localized strings to a given tag in a profile.
- [CMGetScriptProfileDescription](1805029-cmgetscriptprofiledescription.md): Obtains the internal name (or description) of a profile and the script code identifying the language in which the profile name is specified from the specified profile.
- [CMGetProfileDescriptions](1805034-cmgetprofiledescriptions.md): Obtains the description tag data for a specified profile.
- [CMSetProfileDescriptions](1805039-cmsetprofiledescriptions.md): Sets the description tag data for a specified profile.
