> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmxyzcolor](https://developer.apple.com/documentation/applicationservices/cmxyzcolor)

# CMXYZColor (Swift)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Contains values for a color specified in XYZ color space.

## Declaration

```swift
struct CMXYZColor
```

<a id="overview"></a>

## Overview

Three color component values defined by the `CMXYZComponent` type definition combine to form a color value specified in the XYZ color space. The color value is defined by the `CMXYZColor` type definition.

Your application uses the `CMXYZColor` data structure to specify a color value in the `CMColor` union to use in general purpose color matching, color checking, or color conversion. You also use the `CMXYZColor` data structure to specify the XYZ white point reference used in the conversion of colors to or from the XYZ color space.

## Topics

### Initializers

- [init()](cmxyzcolor/1462111-init.md)
- [init(X:Y:Z:)](cmxyzcolor/1459192-init.md)

### Instance Properties

- [X](cmxyzcolor/1458784-x.md)
- [Y](cmxyzcolor/1463301-y.md)
- [Z](cmxyzcolor/1460905-z.md)

# CMXYZColor (Objective-C)

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+

Contains values for a color specified in XYZ color space.

## Declaration

```objectivec
typedef struct CMXYZColor {
    ...
} CMXYZColor;
```

<a id="overview"></a>

## Overview

Three color component values defined by the `CMXYZComponent` type definition combine to form a color value specified in the XYZ color space. The color value is defined by the `CMXYZColor` type definition.

Your application uses the `CMXYZColor` data structure to specify a color value in the `CMColor` union to use in general purpose color matching, color checking, or color conversion. You also use the `CMXYZColor` data structure to specify the XYZ white point reference used in the conversion of colors to or from the XYZ color space.

## Topics

### Instance Properties

- [X](cmxyzcolor/1458784-x.md)
- [Y](cmxyzcolor/1463301-y.md)
- [Z](cmxyzcolor/1460905-z.md)
