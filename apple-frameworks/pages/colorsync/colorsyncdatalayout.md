> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncdatalayout](https://developer.apple.com/documentation/colorsync/colorsyncdatalayout)

# ColorSyncDataLayout (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A bit field describing the alpha information and byte order of a pixel layout.

## Declaration

```swift
typealias ColorSyncDataLayout = UInt32
```

<a id="discussion"></a>

## Discussion

Combine a [ColorSyncAlphaInfo](colorsyncalphainfo.md) value (within [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md)) with a byte-order value (within [kColorSyncByteOrderMask](kcolorsyncbyteordermask.md)) to describe how color components are packed.

## See Also

### Describing data layout

- [ColorSyncAlphaInfo](colorsyncalphainfo.md): The location of the alpha component in a pixel, and whether it’s premultiplied.
- [ColorSyncDataDepth](colorsyncdatadepth.md): The bit depth and numeric type of a color component in a pixel.

# ColorSyncDataLayout (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A bit field describing the alpha information and byte order of a pixel layout.

## Declaration

```objectivec
typedef uint32_t ColorSyncDataLayout;
```

<a id="discussion"></a>

## Discussion

Combine a [ColorSyncAlphaInfo](colorsyncalphainfo.md) value (within [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md)) with a byte-order value (within [kColorSyncByteOrderMask](kcolorsyncbyteordermask.md)) to describe how color components are packed.

## See Also

### Describing data layout

- [ColorSyncAlphaInfo](colorsyncalphainfo.md): The location of the alpha component in a pixel, and whether it’s premultiplied.
- [ColorSyncDataDepth](colorsyncdatadepth.md): The bit depth and numeric type of a color component in a pixel.
