> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassmetadatapreview/localizeddescription](https://developer.apple.com/documentation/passkit/pkaddpassmetadatapreview/localizeddescription)

# localizedDescription (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A localized description of the pass.

## Declaration

```swift
var localizedDescription: String? { get }
```

## See Also

### Creating a preview of the pass

- [init(passThumbnail:localizedDescription:)](init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [passThumbnailImage](passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.

# localizedDescription (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A localized description of the pass.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * localizedDescription;
```

## See Also

### Creating a preview of the pass

- [initWithPassThumbnail:localizedDescription:](init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [passThumbnailImage](passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.
- [previewWithPassThumbnail:localizedDescription:](previewwithpassthumbnail_localizeddescription_.md): Initializes properties you need to preview an object that represents the pass you add to Wallet.
