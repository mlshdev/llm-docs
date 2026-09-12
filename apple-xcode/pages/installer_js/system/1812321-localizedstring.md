> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/system/1812321-localizedstring](https://developer.apple.com/documentation/installer_js/system/1812321-localizedstring)

# localizedString

**Interface language:** Data

**Framework:** Installer JS

Provides the localized string in the installation package for the current locale for a given key.

## Declaration

```
localizedString(stringKey)
```

## Parameters

- `stringKey`: A string that identifies the desired localized string.

<a id="return_value"></a>

## Return Value

The localized string, if found in the installation package; `null` otherwise.

## See Also

### Internationalizing Distributions

- [localizedStringWithFormat](1812327-localizedstringwithformat.md): Provides the formatted localized string in the installation package for the current locale, for a given key and a set of additional arguments.
