> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspreviewrepresentableactivityitem/imageprovider](https://developer.apple.com/documentation/appkit/nspreviewrepresentableactivityitem/imageprovider)

# imageProvider (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An object that provides a visual representation of the item.

## Declaration

```swift
optional var imageProvider: NSItemProvider? { get }
```

<a id="Discussion"></a>

## Discussion

Provide a full-size representation of the content you’re sharing. For example, if the shared item is a link to a webpage, provide the hero image for that webpage or a rendering of the page.

## See Also

### Providing Metadata About the Item

- [title](title.md): A localized string that contains the name of the item.
- [iconProvider](iconprovider.md): An object that provides an icon that represents the item’s source.

# imageProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An object that provides a visual representation of the item.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSItemProvider * imageProvider;
```

<a id="Discussion"></a>

## Discussion

Provide a full-size representation of the content you’re sharing. For example, if the shared item is a link to a webpage, provide the hero image for that webpage or a rendering of the page.

## See Also

### Providing Metadata About the Item

- [title](title.md): A localized string that contains the name of the item.
- [iconProvider](iconprovider.md): An object that provides an icon that represents the item’s source.
