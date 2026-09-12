> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncalphapremultipliedfirst](https://developer.apple.com/documentation/colorsync/kcolorsyncalphapremultipliedfirst)

# kColorSyncAlphaPremultipliedFirst (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The alpha component is stored first and the color components are premultiplied by it. For example, premultiplied ARGB.

## Declaration

```swift
var kColorSyncAlphaPremultipliedFirst: ColorSyncAlphaInfo { get }
```

## See Also

### Handling alpha

- [kColorSyncAlphaFirst](kcolorsyncalphafirst.md): The alpha component is stored first and is not premultiplied. For example, non-premultiplied ARGB.
- [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md): The mask for extracting the [ColorSyncAlphaInfo](colorsyncalphainfo.md) value from a [ColorSyncDataLayout](colorsyncdatalayout.md).
- [kColorSyncAlphaLast](kcolorsyncalphalast.md): The alpha component is stored last and is not premultiplied. For example, non-premultiplied RGBA.
- [kColorSyncAlphaNone](kcolorsyncalphanone.md): There is no alpha channel. For example, RGB.
- [kColorSyncAlphaNoneSkipFirst](kcolorsyncalphanoneskipfirst.md): There is no alpha channel; the most significant bits are ignored. For example, XRGB.
- [kColorSyncAlphaNoneSkipLast](kcolorsyncalphanoneskiplast.md): There is no alpha channel; the least significant bits are ignored. For example, RGBX.
- [kColorSyncAlphaPremultipliedLast](kcolorsyncalphapremultipliedlast.md): The alpha component is stored last and the color components are premultiplied by it. For example, premultiplied RGBA.

# kColorSyncAlphaPremultipliedFirst (Objective-C)

**Framework:** ColorSync  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The alpha component is stored first and the color components are premultiplied by it. For example, premultiplied ARGB.

## Declaration

```objectivec
kColorSyncAlphaPremultipliedFirst
```

## See Also

### Handling alpha

- [kColorSyncAlphaFirst](kcolorsyncalphafirst.md): The alpha component is stored first and is not premultiplied. For example, non-premultiplied ARGB.
- [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md): The mask for extracting the [ColorSyncAlphaInfo](colorsyncalphainfo.md) value from a [ColorSyncDataLayout](colorsyncdatalayout.md).
- [kColorSyncAlphaLast](kcolorsyncalphalast.md): The alpha component is stored last and is not premultiplied. For example, non-premultiplied RGBA.
- [kColorSyncAlphaNone](kcolorsyncalphanone.md): There is no alpha channel. For example, RGB.
- [kColorSyncAlphaNoneSkipFirst](kcolorsyncalphanoneskipfirst.md): There is no alpha channel; the most significant bits are ignored. For example, XRGB.
- [kColorSyncAlphaNoneSkipLast](kcolorsyncalphanoneskiplast.md): There is no alpha channel; the least significant bits are ignored. For example, RGBX.
- [kColorSyncAlphaPremultipliedLast](kcolorsyncalphapremultipliedlast.md): The alpha component is stored last and the color components are premultiplied by it. For example, premultiplied RGBA.
