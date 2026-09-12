> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickersize](https://developer.apple.com/documentation/messages/msstickersize)

# MSStickerSize (Swift)

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The size of the stickers in the browser view.

## Declaration

```swift
enum MSStickerSize
```

<a id="overview"></a>

## Overview

The browser scales down sticker images to fit. If a sticker is smaller than the provided space, the browser centers the sticker in the space.

## Topics

### Constants

- [MSStickerSize.small](msstickersize/small.md): Small stickers.
- [MSStickerSize.regular](msstickersize/regular.md): Medium-sized stickers.
- [MSStickerSize.large](msstickersize/large.md): Large stickers.

### Initializers

- [init(rawValue:)](msstickersize/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerBrowserView](msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerView](msstickerview.md): A view for displaying a sticker.

# MSStickerSize (Objective-C)

**Framework:** Messages  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The size of the stickers in the browser view.

## Declaration

```objectivec
enum MSStickerSize : NSInteger;
```

<a id="overview"></a>

## Overview

The browser scales down sticker images to fit. If a sticker is smaller than the provided space, the browser centers the sticker in the space.

## Topics

### Constants

- [MSStickerSizeSmall](msstickersize/small.md): Small stickers.
- [MSStickerSizeRegular](msstickersize/regular.md): Medium-sized stickers.
- [MSStickerSizeLarge](msstickersize/large.md): Large stickers.

## See Also

### Custom sticker packs

- [Adding Sticker packs and iMessage apps to the system Stickers app, Messages camera, and FaceTime](adding-sticker-packs-and-imessage-apps-to-the-system-stickers-app-messages-camera-and-facetime.md): Enable your Sticker pack or iMessage app in the media context.
- [Adding your sticker packs to Messages](adding-your-sticker-packs-to-messages.md): Drag and drop your sticker pack into the Stickers asset catalog to let people access your stickers from Messages.
- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md): A view controller that provides dynamic content to the standard sticker browser.
- [MSStickerBrowserView](msstickerbrowserview.md): A browser view that displays a dynamically generated list of stickers.
- [MSStickerView](msstickerview.md): A view for displaying a sticker.
