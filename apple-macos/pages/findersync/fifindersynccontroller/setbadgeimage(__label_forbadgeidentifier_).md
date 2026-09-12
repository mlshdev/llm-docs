> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/findersync/fifindersynccontroller/setbadgeimage(_:label:forbadgeidentifier:)](https://developer.apple.com/documentation/findersync/fifindersynccontroller/setbadgeimage(_:label:forbadgeidentifier:))

# setBadgeImage(\_:label:forBadgeIdentifier:) (Swift)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sets the badge image and label for the given ID.

## Declaration

```swift
func setBadgeImage(_ image: NSImage, label: String?, forBadgeIdentifier badgeID: String)
```

## Parameters

- `image`: An [NSImage](../../appkit/nsimage.md) object. The system may or may not draw this image on top of the item’s icon; when it does, the system determines the overlay position. Don’t add any padding to the image to adjust this positioning. The image draws at up to 320 x 320 points.
- `label`: A label describing the sync state represented by this badge. Each label should be a short localized string, such as “Waiting.”
- `badgeID`: A unique ID, identifying this badge.

<a id="discussion"></a>

## Discussion

Use this method to configure your badges. Finder may display the image, the label or both. Your Finder Sync extension typically sets up a fixed number of badges during its `init` method.

## See Also

### Managing the Finder Sync Controller

- [default()](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs()](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier(\_:for:)](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [targetedURL()](targetedurl%28%29.md): Returns the URL of the Finder’s current target.

# setBadgeImage:label:forBadgeIdentifier: (Objective-C)

**Framework:** Finder Sync  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sets the badge image and label for the given ID.

## Declaration

```objectivec
- (void) setBadgeImage:(NSImage *) image label:(NSString *) label forBadgeIdentifier:(NSString *) badgeID;
```

## Parameters

- `image`: An [NSImage](../../appkit/nsimage.md) object. The system may or may not draw this image on top of the item’s icon; when it does, the system determines the overlay position. Don’t add any padding to the image to adjust this positioning. The image draws at up to 320 x 320 points.
- `label`: A label describing the sync state represented by this badge. Each label should be a short localized string, such as “Waiting.”
- `badgeID`: A unique ID, identifying this badge.

<a id="discussion"></a>

## Discussion

Use this method to configure your badges. Finder may display the image, the label or both. Your Finder Sync extension typically sets up a fixed number of badges during its `init` method.

## See Also

### Managing the Finder Sync Controller

- [defaultController](default%28%29.md): Returns the shared Finder Sync controller object.
- [directoryURLs](directoryurls.md): The directories managed by this extension.
- [selectedItemURLs](selecteditemurls%28%29.md): Returns an array of selected items.
- [setBadgeIdentifier:forURL:](setbadgeidentifier%28__for_%29.md): Sets the badge for a file or directory.
- [targetedURL](targetedurl%28%29.md): Returns the URL of the Finder’s current target.
