> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslinesweepdirection](https://developer.apple.com/documentation/appkit/nslinesweepdirection)

# NSLineSweepDirection

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Values that describe the progression of text on a page.

## Declaration

```objectivec
enum NSLineSweepDirection : NSUInteger;
```

<a id="overview"></a>

## Overview

The typesetter decides which way text should flow and passes these values as arguments to the text container, which uses them to calculate the next line rectangle.

Line sweep is the direction text progresses within a line. For information on line movement direction, see [NSLineMovementDirection](nslinemovementdirection.md).

The only values currently used by the supplied typesetters are `NSLineSweepRight` and `NSLineMovesDown`. An `NSTextContainer` subclass should be able to deal with any value, and an `NSTypesetter` subclass should be able to use any of them.

## Topics

### Constants

- [NSLineSweepLeft](nslinesweepdirection/nslinesweepleft.md): Deprecated. Characters move from right to left.
- [NSLineSweepRight](nslinesweepdirection/nslinesweepright.md): Deprecated. Characters move from left to right.
- [NSLineSweepDown](nslinesweepdirection/nslinesweepdown.md): Deprecated. Characters move from top to bottom.
- [NSLineSweepUp](nslinesweepdirection/nslinesweepup.md): Deprecated. Characters move from bottom to top.

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
- [NSATSTypesetter](nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.
- [NSTypesetter](nstypesetter.md): An abstract class that performs various type layout tasks.
- [NSLineMovementDirection](nslinemovementdirection.md): Deprecated. The direction in which a line moves.
