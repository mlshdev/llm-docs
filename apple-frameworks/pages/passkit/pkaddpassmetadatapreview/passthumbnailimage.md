> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassmetadatapreview/passthumbnailimage](https://developer.apple.com/documentation/passkit/pkaddpassmetadatapreview/passthumbnailimage)

# passThumbnailImage (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A CGImage object representing the card artwork of the pass you use during provisioning.

## Declaration

```swift
unowned(unsafe) var passThumbnailImage: CGImage? { get }
```

## See Also

### Creating a preview of the pass

- [init(passThumbnail:localizedDescription:)](init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [localizedDescription](localizeddescription.md): A localized description of the pass.

# passThumbnailImage (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A CGImage object representing the card artwork of the pass you use during provisioning.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, nullable) CGImageRef passThumbnailImage;
```

## See Also

### Creating a preview of the pass

- [initWithPassThumbnail:localizedDescription:](init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [localizedDescription](localizeddescription.md): A localized description of the pass.
- [previewWithPassThumbnail:localizedDescription:](previewwithpassthumbnail_localizeddescription_.md): Initializes properties you need to preview an object that represents the pass you add to Wallet.
