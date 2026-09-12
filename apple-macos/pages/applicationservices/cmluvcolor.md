> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmluvcolor](https://developer.apple.com/documentation/applicationservices/cmluvcolor)

# CMLuvColor

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a color value expressed in the L\*u\*v\* color space.

## Declaration

```objectivec
typedef struct CMLuvColor {
    ...
} CMLuvColor;
```

<a id="overview"></a>

## Overview

A color value expressed in the L\*u\*v\* color space is composed of `L`, `u`, and `v` component values.

## Topics

### Instance Properties

- [L](cmluvcolor/1560662-l.md): Deprecated. A numeric value within the range of 0 to 65535 that maps to 0 to 100 inclusive.
- [u](cmluvcolor/1560134-u.md): Deprecated. A numeric value within the range of 0 to 65535 that maps to –128 to 127.996 inclusive.
- [v](cmluvcolor/1560109-v.md): Deprecated. A numeric value within the range of 0 to 65535 that maps to –128 to 127.996 inclusive.
