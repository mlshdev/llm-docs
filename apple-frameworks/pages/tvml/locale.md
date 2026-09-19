> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvml/locale

# locale

**Kind:** Article

Sets the locale for the date element.

<a id="Overview"></a>

## Overview

Here’s an example that sets the locale to Thai, which uses the Buddhist calendar. The date displayed is January 19, 2031 based on the [format](format.md) attribute.

```xml
<date format="MMMM dd, yyyy" locale="th_TH">2574-01-19</date>
```

<a id="Values-for-locale"></a>

### Values for locale

- **`<language>_<country>`**: The locale format the date is in.

<a id="Elements-that-Use-locale"></a>

### Elements that Use locale

- [date](date.md)

## See Also

### Date Settings

- [format](format.md): Specifies how a date is displayed.
