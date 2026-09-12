> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pixmap/1463694-pixeltype](https://developer.apple.com/documentation/applicationservices/pixmap/1463694-pixeltype)

# pixelType (Swift)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The storage format for a pixel image. Indexed pixels are indicated by a value of 0. Direct pixels are specified by a value of `RGBDirect`, or 16. In the `PixMap` record of the [GDevice](../gdevice.md) structure for a direct device, this field is set to `RGBDirect` when the screen depth is set.

## Declaration

```swift
var pixelType: Int16
```

# pixelType (Objective-C)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The storage format for a pixel image. Indexed pixels are indicated by a value of 0. Direct pixels are specified by a value of `RGBDirect`, or 16. In the `PixMap` record of the [GDevice](../gdevice.md) structure for a direct device, this field is set to `RGBDirect` when the screen depth is set.

## Declaration

```objectivec
short pixelType;
```
