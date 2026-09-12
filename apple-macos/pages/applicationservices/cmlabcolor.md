> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmlabcolor](https://developer.apple.com/documentation/applicationservices/cmlabcolor)

# CMLabColor

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains a color value expressed in the L\*a\*b\* color space.

## Declaration

```objectivec
typedef struct CMLabColor {
    ...
} CMLabColor;
```

<a id="overview"></a>

## Overview

A color expressed in the L\*a\*b\* color space is composed of `L`, `a`, and `b` component values.

## Topics

### Instance Properties

- [L](cmlabcolor/1560318-l.md): Deprecated. A numeric value within the range of 0 to 65535, which maps to 0 to 100 inclusive. Note that this encoding is slightly different from the 0 to 65280 encoding of the L channel defined in the ICC specification for PCS L\*a\*b values.
- [a](cmlabcolor/1560358-a.md): Deprecated. A value that ranges from 0 to 65535, and maps to –128 to 127.996 inclusive.
- [b](cmlabcolor/1560421-b.md): Deprecated. A value that ranges from 0 to 65535, and maps to –128 to 127.996 inclusive.
