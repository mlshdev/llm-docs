> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/tv-scrollable-bounds-inset-top](https://developer.apple.com/documentation/tvml/tv-scrollable-bounds-inset-top)

# tv-scrollable-bounds-inset-top

**Kind:** Article

Specifies the size of an unscrollable region only at the top of the stack template.

<a id="Overview"></a>

## Overview

The` tv-scrollable-bounds-inset-top` style creates an unscrollable region of a specified number of points down from the top of the `stackTemplate.`

Use the `tv-scrollable-bounds-inset-top` style to create an inset only at the top, without creating an inset at the bottom.

Here’s an example that sets the inset at the top to 100 points.

```xml
<stackTemplate style="tv-scrollable-bounds-inset-top: 100.0">
    <banner>
        …
    </banner>
    <collectionList>
        <shelf>
            <section>
                <lockup>…</lockup>
            </section>
        </shelf>
    </collectionList>
</stackTemplate>
```

<a id="Elements-That-Use-tv-scrollable-bounds-inset-top"></a>

### Elements That Use tv-scrollable-bounds-inset-top

- [stackTemplate](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/StackTemplate.html#//apple_ref/doc/uid/TP40015064-CH21)

## See Also

### Specifying Inset Location

- [tv-scrollable-bounds-inset-bottom](tv-scrollable-bounds-inset-bottom.md): Specifies the size of an unscrollable region only at the bottom of the stack template.
