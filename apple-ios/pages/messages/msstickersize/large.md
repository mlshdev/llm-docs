> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/msstickersize/large

# MSStickerSize.large (Swift)

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Large stickers.

## Declaration

```swift
case large
```

<a id="Discussion"></a>

## Discussion

Use 206 x 206 point images to create large stickers. Always provide @3x images for these stickers (618 x 618 pixels). The system generates the @2x and @1x versions by downscaling the @3x images at runtime.

## See Also

### Constants

- [MSStickerSize.small](small.md): Small stickers.
- [MSStickerSize.regular](regular.md): Medium-sized stickers.

# MSStickerSizeLarge (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Large stickers.

## Declaration

```objectivec
MSStickerSizeLarge
```

<a id="Discussion"></a>

## Discussion

Use 206 x 206 point images to create large stickers. Always provide @3x images for these stickers (618 x 618 pixels). The system generates the @2x and @1x versions by downscaling the @3x images at runtime.

## See Also

### Constants

- [MSStickerSizeSmall](small.md): Small stickers.
- [MSStickerSizeRegular](regular.md): Medium-sized stickers.
