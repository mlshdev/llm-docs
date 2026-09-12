> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/pixmap/1462797-rowbytes](https://developer.apple.com/documentation/applicationservices/pixmap/1462797-rowbytes)

# rowBytes (Swift)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The offset in bytes from one row of the image to the next. The value must be even, less than 0x4000, and for best performance it should be a multiple of 4. The high 2 bits of `rowBytes` are used as flags. If bit 15 =1, the data structure pointed to is a `PixMap` structure; otherwise it is a [BitMap](../bitmap.md) structure.

## Declaration

```swift
var rowBytes: Int16
```

# rowBytes (Objective-C)

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The offset in bytes from one row of the image to the next. The value must be even, less than 0x4000, and for best performance it should be a multiple of 4. The high 2 bits of `rowBytes` are used as flags. If bit 15 =1, the data structure pointed to is a `PixMap` structure; otherwise it is a [BitMap](../bitmap.md) structure.

## Declaration

```objectivec
short rowBytes;
```
