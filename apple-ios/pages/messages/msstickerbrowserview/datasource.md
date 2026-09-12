> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msstickerbrowserview/datasource](https://developer.apple.com/documentation/messages/msstickerbrowserview/datasource)

# dataSource (Swift)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The sticker browser’s data source.

## Declaration

```swift
weak var dataSource: (any MSStickerBrowserViewDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

If you are using an [MSStickerBrowserViewController](../msstickerbrowserviewcontroller.md) object, the controller automatically sets itself as the data source for the sticker browser view that it provides. If you instantiate and display your own sticker browser view, this property defaults to `nil`, and you must assign a data source.

## See Also

### Managing the Sticker Collection Contents

- [MSStickerBrowserViewDataSource](../msstickerbrowserviewdatasource.md): The protocol for dynamically providing stickers to a browser view.
- [reloadData()](reloaddata%28%29.md): Asks the sticker browser to reload its data from the data source.

# dataSource (Objective-C)

**Framework:** Messages  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The sticker browser’s data source.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MSStickerBrowserViewDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

If you are using an [MSStickerBrowserViewController](../msstickerbrowserviewcontroller.md) object, the controller automatically sets itself as the data source for the sticker browser view that it provides. If you instantiate and display your own sticker browser view, this property defaults to `nil`, and you must assign a data source.

## See Also

### Managing the Sticker Collection Contents

- [MSStickerBrowserViewDataSource](../msstickerbrowserviewdatasource.md): The protocol for dynamically providing stickers to a browser view.
- [reloadData](reloaddata%28%29.md): Asks the sticker browser to reload its data from the data source.
