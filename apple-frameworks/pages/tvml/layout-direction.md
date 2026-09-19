> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvml/layout-direction

# layout-direction

**Kind:** Article

Sets the text direction based on the user’s language preference.

<a id="Overview"></a>

## Overview

All base style sheets now use `text-align:natural`. You must use the `layout-direction` query to change the language layout. Here’s an example for specifying styles for right-to-left languages.

```xml
<style>
    .socialBadgeInLockup {
        tv-position: bottom-trailing;
        tv-align: trailing;
        margin: 0 8 -8 0;
    }
    .socialBadgeInMonogramLockup {
        tv-position: bottom-trailing;
        tv-align: trailing;
        margin: 0 18 10 0;
    }

    @media (layout-direction: rtl) {
        .socialBadgeInLockup {
            margin: 0 0 -8 8;
        }
        .socialBadgeInMonogramLockup {
            margin: 0 0 10 18;
        }
    }
</style>
```

<a id="Values-for-layout-direction"></a>

### Values for layout-direction

- **`ltr`**: Test for left-to-right language layout.
- **`rtl`**: Test for right-to-left language layout.

## See Also

### Media Queries

- [tv-theme](tv-theme.md): Sets an element’s appearance according to the specified theme.
