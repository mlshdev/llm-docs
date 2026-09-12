> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspreviewrepresentableactivityitem/iconprovider](https://developer.apple.com/documentation/appkit/nspreviewrepresentableactivityitem/iconprovider)

# iconProvider (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An object that provides an icon that represents the item’s source.

## Declaration

```swift
optional var iconProvider: NSItemProvider? { get }
```

<a id="Discussion"></a>

## Discussion

Typically, the icon is a thumbnail-sized representation of the source app for the content. For example, provide your app’s icon for content you manage.

## See Also

### Providing Metadata About the Item

- [title](title.md): A localized string that contains the name of the item.
- [imageProvider](imageprovider.md): An object that provides a visual representation of the item.

# iconProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An object that provides an icon that represents the item’s source.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSItemProvider * iconProvider;
```

<a id="Discussion"></a>

## Discussion

Typically, the icon is a thumbnail-sized representation of the source app for the content. For example, provide your app’s icon for content you manage.

## See Also

### Providing Metadata About the Item

- [title](title.md): A localized string that contains the name of the item.
- [imageProvider](imageprovider.md): An object that provides a visual representation of the item.
