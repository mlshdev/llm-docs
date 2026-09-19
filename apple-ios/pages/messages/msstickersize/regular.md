> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/msstickersize/regular

# MSStickerSize.regular (Swift)

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Medium-sized stickers.

## Declaration

```swift
case regular
```

<a id="Discussion"></a>

## Discussion

Use 136 x 136 point images to create regular-sized stickers. Always provide @3x images for these stickers (408 x 408 pixels). The system generates the @2x and @1x versions by downscaling the @3x images at runtime.

## See Also

### Constants

- [MSStickerSize.small](small.md): Small stickers.
- [MSStickerSize.large](large.md): Large stickers.

# MSStickerSizeRegular (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Medium-sized stickers.

## Declaration

```objectivec
MSStickerSizeRegular
```

<a id="Discussion"></a>

## Discussion

Use 136 x 136 point images to create regular-sized stickers. Always provide @3x images for these stickers (408 x 408 pixels). The system generates the @2x and @1x versions by downscaling the @3x images at runtime.

## See Also

### Constants

- [MSStickerSizeSmall](small.md): Small stickers.
- [MSStickerSizeLarge](large.md): Large stickers.
