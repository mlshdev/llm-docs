> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspreviewrepresentingactivityitem/init(item:title:image:icon:)](https://developer.apple.com/documentation/appkit/nspreviewrepresentingactivityitem/init(item:title:image:icon:))

# init(item:title:image:icon:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a metadata object with the title, image, and icon for a shareable item.

## Declaration

```swift
convenience init(item: Any, title: String?, image: NSImage?, icon: NSImage?)
```

## Parameters

- `item`: The item to share from the Mac share sheet. The item must conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) or [NSDocument](../nsdocument.md) object.
- `title`: The localized name of the item.
- `image`: An image to display as a preview for the item. For example, when you share a URL for a webpage, you might specify the hero image for that page or a rendering of the webpage itself.
- `icon`: A thumbnail-size image of the source of the item. Typically, you specify your app’s icon but you can provide a different icon if the content has a different source.

<a id="return-value"></a>

## Return Value

An initialized item to share.

## See Also

### Creating a Preview Activity Item

- [init(item:title:imageProvider:iconProvider:)](init%28item_title_imageprovider_iconprovider_%29.md): Creates a metadata object that provides a title and images for a shareable item.

# initWithItem:title:image:icon: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a metadata object with the title, image, and icon for a shareable item.

## Declaration

```objectivec
- (instancetype) initWithItem:(id) item title:(NSString *) title image:(NSImage *) image icon:(NSImage *) icon;
```

## Parameters

- `item`: The item to share from the Mac share sheet. The item must conform to the [NSPasteboardWriting](../nspasteboardwriting.md) protocol, or be an [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) or [NSDocument](../nsdocument.md) object.
- `title`: The localized name of the item.
- `image`: An image to display as a preview for the item. For example, when you share a URL for a webpage, you might specify the hero image for that page or a rendering of the webpage itself.
- `icon`: A thumbnail-size image of the source of the item. Typically, you specify your app’s icon but you can provide a different icon if the content has a different source.

<a id="return-value"></a>

## Return Value

An initialized item to share.

## See Also

### Creating a Preview Activity Item

- [initWithItem:title:imageProvider:iconProvider:](init%28item_title_imageprovider_iconprovider_%29.md): Creates a metadata object that provides a title and images for a shareable item.
