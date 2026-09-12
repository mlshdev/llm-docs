> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/indextitles](https://developer.apple.com/documentation/tvml/indextitles)

# indexTitles

**Kind:** Article

Specifies index bar titles for a section element.

<a id="Overview"></a>

## Overview

Index titles only appear when the user activates fast scrolling.

<a id="Values-for-indexTitles"></a>

### Values for indexTitles

- **String**: The indices displayed on the index bar. Each index pair is a space-separated value. For example, `indexTitles=”0 A 109 D 198 G”` creates an index bar with three entries, `A`, `D`, and `G`, which fast scrolls the focuses to indexes 0, 109, and 198, respectively.

<a id="Elements-that-Use-indextitles"></a>

### Elements that Use indextitles

- [section](section.md)

## See Also

### Scrolling

- [showsScrollIndicator](showsscrollindicator.md): Shows a scroll indicator along the side of an element appropriate for the user’s specified language.
