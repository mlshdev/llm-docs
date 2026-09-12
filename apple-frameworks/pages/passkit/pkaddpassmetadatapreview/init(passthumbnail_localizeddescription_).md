> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassmetadatapreview/init(passthumbnail:localizeddescription:)](https://developer.apple.com/documentation/passkit/pkaddpassmetadatapreview/init(passthumbnail:localizeddescription:))

# init(passThumbnail:localizedDescription:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Provides a preview of an image object that represents the pass you add to Wallet.

## Declaration

```swift
init(passThumbnail: CGImage, localizedDescription description: String)
```

## Parameters

- `passThumbnail`: A CGImage object that represents the card artwork of the pass you use during provisioning.
- `description`: A localized description of the pass.

<a id="Discussion"></a>

## Discussion

This method throws an `invalidInput` error if a JPKI applet doesn’t back the pass.

## See Also

### Creating a preview of the pass

- [localizedDescription](localizeddescription.md): A localized description of the pass.
- [passThumbnailImage](passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.

# initWithPassThumbnail:localizedDescription: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Provides a preview of an image object that represents the pass you add to Wallet.

## Declaration

```objectivec
- (instancetype) initWithPassThumbnail:(CGImageRef) passThumbnail localizedDescription:(NSString *) description;
```

## Parameters

- `passThumbnail`: A CGImage object that represents the card artwork of the pass you use during provisioning.
- `description`: A localized description of the pass.

<a id="Discussion"></a>

## Discussion

This method throws an `invalidInput` error if a JPKI applet doesn’t back the pass.

## See Also

### Creating a preview of the pass

- [localizedDescription](localizeddescription.md): A localized description of the pass.
- [passThumbnailImage](passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.
- [previewWithPassThumbnail:localizedDescription:](previewwithpassthumbnail_localizeddescription_.md): Initializes properties you need to preview an object that represents the pass you add to Wallet.
