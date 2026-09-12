> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassmetadatapreview/previewwithpassthumbnail:localizeddescription:](https://developer.apple.com/documentation/passkit/pkaddpassmetadatapreview/previewwithpassthumbnail:localizeddescription:)

# previewWithPassThumbnail:localizedDescription:

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Initializes properties you need to preview an object that represents the pass you add to Wallet.

## Declaration

```objectivec
+ (instancetype) previewWithPassThumbnail:(CGImageRef) passThumbnail localizedDescription:(NSString *) description;
```

## Parameters

- `passThumbnail`: A CGImage object representing the card artwork for the pass.
- `description`: A localized description for the pass.

<a id="return-value"></a>

## Return Value

Returns an object that represents the pass you add to Wallet.

## See Also

### Creating a preview of the pass

- [initWithPassThumbnail:localizedDescription:](init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [localizedDescription](localizeddescription.md): A localized description of the pass.
- [passThumbnailImage](passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.
