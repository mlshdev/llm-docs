> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspreviewrepresentingactivityitem/init(item:title:imageprovider:iconprovider:)](https://developer.apple.com/documentation/appkit/nspreviewrepresentingactivityitem/init(item:title:imageprovider:iconprovider:))

# init(item:title:imageProvider:iconProvider:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a metadata object that provides a title and images for a shareable item.

## Declaration

```swift
init(item: Any, title: String?, imageProvider: NSItemProvider?, iconProvider: NSItemProvider?)
```

## Parameters

- `item`: The item to share from the Mac share sheet. The item must conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) or [NSDocument](../nsdocument.md) object.
- `title`: The localized name of the item.
- `imageProvider`: An object that provides the image to display as a preview for the item. For example, when you share a URL for a webpage, you might specify the hero image for that page or a rendering of the webpage itself.
- `iconProvider`: An object that a thumbnail-size image of the source of the item. Typically, you specify your app’s icon but you can provide a different icon if the content has a different source.

<a id="return-value"></a>

## Return Value

An initialized item to share.

## See Also

### Creating a Preview Activity Item

- [init(item:title:image:icon:)](init%28item_title_image_icon_%29.md): Creates a metadata object with the title, image, and icon for a shareable item.

# initWithItem:title:imageProvider:iconProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a metadata object that provides a title and images for a shareable item.

## Declaration

```objectivec
- (instancetype) initWithItem:(id) item title:(NSString *) title imageProvider:(NSItemProvider *) imageProvider iconProvider:(NSItemProvider *) iconProvider;
```

## Parameters

- `item`: The item to share from the Mac share sheet. The item must conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) or [NSDocument](../nsdocument.md) object.
- `title`: The localized name of the item.
- `imageProvider`: An object that provides the image to display as a preview for the item. For example, when you share a URL for a webpage, you might specify the hero image for that page or a rendering of the webpage itself.
- `iconProvider`: An object that a thumbnail-size image of the source of the item. Typically, you specify your app’s icon but you can provide a different icon if the content has a different source.

<a id="return-value"></a>

## Return Value

An initialized item to share.

## See Also

### Creating a Preview Activity Item

- [initWithItem:title:image:icon:](init%28item_title_image_icon_%29.md): Creates a metadata object with the title, image, and icon for a shareable item.
