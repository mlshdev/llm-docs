> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmhlscolor](https://developer.apple.com/documentation/applicationservices/cmhlscolor)

# CMHLSColor

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a color value expressed in the HLS color space.

## Declaration

```objectivec
typedef struct CMHLSColor {
    ...
} CMHLSColor;
```

<a id="overview"></a>

## Overview

A color value expressed in the HLS color space is composed of `hue`, `lightness`, and `saturation` component values. Each color component is expressed as a numeric value within the range of 0 to 65535 inclusive.

## Topics

### Instance Properties

- [hue](cmhlscolor/1560211-hue.md): Deprecated. A hue value that represents a fraction of a circle in which red is positioned at 0. .
- [lightness](cmhlscolor/1560497-lightness.md): Deprecated. A lightness value.
- [saturation](cmhlscolor/1560611-saturation.md): Deprecated. A saturation value.
