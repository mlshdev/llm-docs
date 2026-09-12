> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserviewdatasource](https://developer.apple.com/documentation/messages/msstickerbrowserviewdatasource)

# MSStickerBrowserViewDataSource (Swift)

**Framework:** Messages  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The protocol for dynamically providing stickers to a browser view.

## Declaration

```swift
protocol MSStickerBrowserViewDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To load its stickers, the [MSStickerBrowserView](msstickerbrowserview.md) class performs the following steps:

1. The browser calls the data source’s [numberOfStickers(in:)](msstickerbrowserviewdatasource/numberofstickers%28in_%29.md) method to get the number of stickers.
2. The browser repeatedly calls the data source’s [stickerBrowserView(\_:stickerAt:)](msstickerbrowserviewdatasource/stickerbrowserview%28__stickerat_%29.md) method to load the individual stickers. Initially, the browser requests only enough stickers to fill the screen. The browser requests additional stickers as the user scrolls and new stickers become visible.

Both methods are required. If the sticker collection changes at runtime, call the [MSStickerBrowserView](msstickerbrowserview.md) class’s [reloadData()](msstickerbrowserview/reloaddata%28%29.md) method to reload the stickers.

## Topics

### Providing Stickers

- [numberOfStickers(in:)](msstickerbrowserviewdatasource/numberofstickers%28in_%29.md): Asks the data source for the number of stickers that the browser will display.
- [stickerBrowserView(\_:stickerAt:)](msstickerbrowserviewdatasource/stickerbrowserview%28__stickerat_%29.md): Asks the data source for the sticker object that the browser will display at the provided index.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md)

## See Also

### Managing the Sticker Collection Contents

- [dataSource](msstickerbrowserview/datasource.md): The sticker browser’s data source.
- [reloadData()](msstickerbrowserview/reloaddata%28%29.md): Asks the sticker browser to reload its data from the data source.

# MSStickerBrowserViewDataSource (Objective-C)

**Framework:** Messages  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The protocol for dynamically providing stickers to a browser view.

## Declaration

```objectivec
@protocol MSStickerBrowserViewDataSource <NSObject>
```

<a id="overview"></a>

## Overview

To load its stickers, the [MSStickerBrowserView](msstickerbrowserview.md) class performs the following steps:

1. The browser calls the data source’s [numberOfStickersInStickerBrowserView:](msstickerbrowserviewdatasource/numberofstickers%28in_%29.md) method to get the number of stickers.
2. The browser repeatedly calls the data source’s [stickerBrowserView:stickerAtIndex:](msstickerbrowserviewdatasource/stickerbrowserview%28__stickerat_%29.md) method to load the individual stickers. Initially, the browser requests only enough stickers to fill the screen. The browser requests additional stickers as the user scrolls and new stickers become visible.

Both methods are required. If the sticker collection changes at runtime, call the [MSStickerBrowserView](msstickerbrowserview.md) class’s [reloadData](msstickerbrowserview/reloaddata%28%29.md) method to reload the stickers.

## Topics

### Providing Stickers

- [numberOfStickersInStickerBrowserView:](msstickerbrowserviewdatasource/numberofstickers%28in_%29.md): Asks the data source for the number of stickers that the browser will display.
- [stickerBrowserView:stickerAtIndex:](msstickerbrowserviewdatasource/stickerbrowserview%28__stickerat_%29.md): Asks the data source for the sticker object that the browser will display at the provided index.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [MSStickerBrowserViewController](msstickerbrowserviewcontroller.md)

## See Also

### Managing the Sticker Collection Contents

- [dataSource](msstickerbrowserview/datasource.md): The sticker browser’s data source.
- [reloadData](msstickerbrowserview/reloaddata%28%29.md): Asks the sticker browser to reload its data from the data source.
