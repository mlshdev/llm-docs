> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmnamedcolor](https://developer.apple.com/documentation/applicationservices/cmnamedcolor)

# CMNamedColor

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a color value expressed in a named color space.

## Declaration

```objectivec
typedef struct CMNamedColor {
    ...
} CMNamedColor;
```

<a id="overview"></a>

## Overview

A color value expressed in a named color space is composed of a single component, `namedColorIndex`, represented as a numeric value within the range of an unsigned long, or 1 to 232 – 1 inclusive.

## Topics

### Instance Properties

- [namedColorIndex](cmnamedcolor/1560291-namedcolorindex.md): Deprecated.
