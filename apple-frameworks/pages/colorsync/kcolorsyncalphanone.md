> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncalphanone](https://developer.apple.com/documentation/colorsync/kcolorsyncalphanone)

# kColorSyncAlphaNone (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

There is no alpha channel. For example, RGB.

## Declaration

```swift
var kColorSyncAlphaNone: ColorSyncAlphaInfo { get }
```

## See Also

### Handling alpha

- [kColorSyncAlphaFirst](kcolorsyncalphafirst.md): The alpha component is stored first and is not premultiplied. For example, non-premultiplied ARGB.
- [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md): The mask for extracting the [ColorSyncAlphaInfo](colorsyncalphainfo.md) value from a [ColorSyncDataLayout](colorsyncdatalayout.md).
- [kColorSyncAlphaLast](kcolorsyncalphalast.md): The alpha component is stored last and is not premultiplied. For example, non-premultiplied RGBA.
- [kColorSyncAlphaNoneSkipFirst](kcolorsyncalphanoneskipfirst.md): There is no alpha channel; the most significant bits are ignored. For example, XRGB.
- [kColorSyncAlphaNoneSkipLast](kcolorsyncalphanoneskiplast.md): There is no alpha channel; the least significant bits are ignored. For example, RGBX.
- [kColorSyncAlphaPremultipliedFirst](kcolorsyncalphapremultipliedfirst.md): The alpha component is stored first and the color components are premultiplied by it. For example, premultiplied ARGB.
- [kColorSyncAlphaPremultipliedLast](kcolorsyncalphapremultipliedlast.md): The alpha component is stored last and the color components are premultiplied by it. For example, premultiplied RGBA.

# kColorSyncAlphaNone (Objective-C)

**Framework:** ColorSync  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

There is no alpha channel. For example, RGB.

## Declaration

```objectivec
kColorSyncAlphaNone
```

## See Also

### Handling alpha

- [kColorSyncAlphaFirst](kcolorsyncalphafirst.md): The alpha component is stored first and is not premultiplied. For example, non-premultiplied ARGB.
- [kColorSyncAlphaInfoMask](kcolorsyncalphainfomask.md): The mask for extracting the [ColorSyncAlphaInfo](colorsyncalphainfo.md) value from a [ColorSyncDataLayout](colorsyncdatalayout.md).
- [kColorSyncAlphaLast](kcolorsyncalphalast.md): The alpha component is stored last and is not premultiplied. For example, non-premultiplied RGBA.
- [kColorSyncAlphaNoneSkipFirst](kcolorsyncalphanoneskipfirst.md): There is no alpha channel; the most significant bits are ignored. For example, XRGB.
- [kColorSyncAlphaNoneSkipLast](kcolorsyncalphanoneskiplast.md): There is no alpha channel; the least significant bits are ignored. For example, RGBX.
- [kColorSyncAlphaPremultipliedFirst](kcolorsyncalphapremultipliedfirst.md): The alpha component is stored first and the color components are premultiplied by it. For example, premultiplied ARGB.
- [kColorSyncAlphaPremultipliedLast](kcolorsyncalphapremultipliedlast.md): The alpha component is stored last and the color components are premultiplied by it. For example, premultiplied RGBA.
