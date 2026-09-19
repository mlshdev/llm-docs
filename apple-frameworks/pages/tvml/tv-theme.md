> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvml/tv-theme

# tv-theme

**Kind:** Article

Sets an element’s appearance according to the specified theme.

<a id="Overview"></a>

## Overview

Use the tv-theme query to change the appearance of a template based on the theme specified in UIUserInterfaceStyle in the info.plist or by a theme set by the theme attribute. Here’s an example that sets styles for light and dark themes.

```xml
<style>
   @media tv-template and (tv-theme:light) {
      .foo { color:rgb(0, 0, 0); }
   }
   @media tv-template and (tv-theme:dark) {
      .foo { color:rgb(255, 255, 255); }
   }
</style>
```

<a id="Values-for-tv-theme"></a>

### Values for tv-theme

- **`dark`**: The theme being tested for is dark.
- **`light`**: The theme being tested for is light.

## See Also

### Media Queries

- [layout-direction](layout-direction.md): Sets the text direction based on the user’s language preference.
