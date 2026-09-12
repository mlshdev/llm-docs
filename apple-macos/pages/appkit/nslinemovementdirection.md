> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslinemovementdirection](https://developer.apple.com/documentation/appkit/nslinemovementdirection)

# NSLineMovementDirection

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.0+ (deprecated in 27.0)

The direction in which a line moves.

## Declaration

```objectivec
enum NSLineMovementDirection : NSUInteger;
```

<a id="overview"></a>

## Overview

Line movement is the direction in which lines move. For information on line sweep direction, see [NSLineSweepDirection](nslinesweepdirection.md).

## Topics

### Constants

- [NSLineMovesLeft](nslinemovementdirection/nslinemovesleft.md): Deprecated. Lines move from right to left.
- [NSLineMovesRight](nslinemovementdirection/nslinemovesright.md): Deprecated. Lines move from left to right.
- [NSLineMovesDown](nslinemovementdirection/nslinemovesdown.md): Deprecated. Lines move from top to bottom.
- [NSLineMovesUp](nslinemovementdirection/nslinemovesup.md): Deprecated. Lines move from bottom to top.
- [NSLineDoesntMove](nslinemovementdirection/nslinedoesntmove.md): Deprecated. Line has no movement.

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
- [NSATSTypesetter](nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.
- [NSTypesetter](nstypesetter.md): An abstract class that performs various type layout tasks.
- [NSLineSweepDirection](nslinesweepdirection.md): Deprecated. Values that describe the progression of text on a page.
