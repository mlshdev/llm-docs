> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmhsvcolor](https://developer.apple.com/documentation/applicationservices/cmhsvcolor)

# CMHSVColor

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a color value expressed in the HSV color space.

## Declaration

```objectivec
typedef struct CMHSVColor {
    ...
} CMHSVColor;
```

<a id="overview"></a>

## Overview

A color value expressed in the HSV color space is composed of `hue`, `saturation`, and `value` component values. Each color component is expressed as a numeric value within the range of 0 to 65535 inclusive. The `hue` value represents a fraction of a circle in which red is positioned at 0.

## Topics

### Instance Properties

- [hue](cmhsvcolor/1560438-hue.md): Deprecated.
- [saturation](cmhsvcolor/1560439-saturation.md): Deprecated.
- [value](cmhsvcolor/1560284-value.md): Deprecated.
