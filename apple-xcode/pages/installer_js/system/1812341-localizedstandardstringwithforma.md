> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/installer_js/system/1812341-localizedstandardstringwithforma](https://developer.apple.com/documentation/installer_js/system/1812341-localizedstandardstringwithforma)

# localizedStandardStringWithFormat

**Interface language:** Data

**Framework:** Installer JS

Provides the formatted localized standard string in the installation package for the current locale, for a given key and a set of additional arguments.

## Declaration

```
localizedStandardStringWithFormat(stringKey, args...)
```

## Parameters

- `stringKey`: A string that identifies the desired localized string.
- `args...`: Arguments that replace placeholders (`%@`) in the formatted localized string.

<a id="return_value"></a>

## Return Value

The localized string, if found in the installation package; `null` otherwise.

<a id="overview"></a>

## Overview

This method is not supported. Use [localizedStringWithFormat](1812327-localizedstringwithformat.md) instead.

## See Also

### Legacy Methods

- [gestalt](1812304-gestalt.md): Provides gestalt information that corresponds to the given selector.
- [localizedStandardString](1812330-localizedstandardstring.md): Provides the localized standard string in the installation package for the current locale for a given key.
