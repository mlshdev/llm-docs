> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/tv-line-spacing](https://developer.apple.com/documentation/tvml/tv-line-spacing)

# tv-line-spacing

**Kind:** Article

Specifies the amount of space between lines of text.

<a id="Overview"></a>

## Overview

Use the `tv-line-spacing` style to set the amount of space between lines of text. Here’s an example that sets the amount of space between lines of text in a `infoTable` element.

```xml
<infoTable style="tv-line-spacing:10;">
    <header>
        <title>Accessibility</title>
    </header>
    <info>
        <header>
            <textBadge>SDH</textBadge>
        </header>
        <text>Subtitles for the deaf and Hard of Hearing (SDH) refer to subtitles in the original lanuage with the addition of relevant non-dialog information.</text>
    </info>
</infoTable>
```

<a id="Values-for-tv-line-spacing"></a>

### Values for tv-line-spacing

- **Float**: The amount of space, in points, between lines of text.

<a id="Elements-that-Use-tv-line-spacing"></a>

### Elements that Use tv-line-spacing

- [grid](grid.md)
- [info](info.md)
- [infoTable](infotable.md)

## See Also

### Element Spacing

- [margin](margin.md): Specifies the spacing around an element.
- [padding](padding.md): Specifies the padding between the border and contents of an element.
- [tv-focus-margin](tv-focus-margin.md): Specifies the amount of space required for a custom cell element in focus.
- [tv-interitem-spacing](tv-interitem-spacing.md): Specifies the spacing between child elements.
