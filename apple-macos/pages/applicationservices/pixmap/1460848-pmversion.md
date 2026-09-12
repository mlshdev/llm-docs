> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pixmap/1460848-pmversion](https://developer.apple.com/documentation/applicationservices/pixmap/1460848-pmversion)

# pmVersion (Swift)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The version number of Color QuickDraw that created this `PixMap` structure. The value of `pmVersion` is normally 0. If `pmVersion` is 4, Color QuickDraw treats the `PixMap` record's `baseAddr` field as 32-bit clean. All other flags are private. Most applications never need to set this field

## Declaration

```swift
var pmVersion: Int16
```

# pmVersion (Objective-C)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The version number of Color QuickDraw that created this `PixMap` structure. The value of `pmVersion` is normally 0. If `pmVersion` is 4, Color QuickDraw treats the `PixMap` record's `baseAddr` field as 32-bit clean. All other flags are private. Most applications never need to set this field

## Declaration

```objectivec
short pmVersion;
```
