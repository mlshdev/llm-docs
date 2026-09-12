> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/ticapslocklanguageswitchcapable](https://developer.apple.com/documentation/bundleresources/information-property-list/ticapslocklanguageswitchcapable)

# TICapsLockLanguageSwitchCapable

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean value that enables the Caps Lock key to switch between Latin and non-Latin input sources.

## Details

`TICapsLockLanguageSwitchCapable`

<a id="Discussion"></a>

## Discussion

Latin input sources, such as ABC, U.S., and Vietnamese, output characters in Latin script. Non-Latin input sources, such as Bulgarian (Cyrillic script), Hindi (Devanagari script), and Urdu (Arabic script), output characters in scripts other than Latin.

After implementing the key, users can enable or disable this functionality by modifying the “Use Caps Lock to switch to and from” preference, which can be found in System Preferences \> Keyboard \> Input Sources.

## See Also

### Localization

- [CFBundleDevelopmentRegion](cfbundledevelopmentregion.md): The default language and region for the bundle, as a language ID.
- [CFBundleLocalizations](cfbundlelocalizations.md): The localizations handled manually by your app.
- [CFBundleAllowMixedLocalizations](cfbundleallowmixedlocalizations.md): A Boolean value that indicates whether the bundle supports the retrieval of localized strings from frameworks.
