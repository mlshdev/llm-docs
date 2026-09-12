> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/preparingfordisplay()](https://developer.apple.com/documentation/uikit/uiimage/preparingfordisplay())

# preparingForDisplay() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Decodes an image synchronously and provides a new one for display in views and animations.

## Declaration

```swift
func preparingForDisplay() -> UIImage?
```

<a id="return-value"></a>

## Return Value

A new version of the image object for display. If the system can’t decode the image, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

The Animation Hitches instrument measures system performance for multiple stages of preparing views for display. It can show you the exact cause of an animation hitch, which appears to the user as an interruption or jump in an animation that should be smooth. If Animation Hitches indicates that decoding an image takes too long and causes hitches, use this method to move the decoding work to the background. For more information on using Instruments, see [Instruments Help](https://help.apple.com/instruments/mac/current/).

Avoid using this method on the main thread unless you previously started preparing an image with [prepareForDisplay(completionHandler:)](preparefordisplay%28completionhandler_%29.md). If you’re decoding many images, such as with a collection view, calling this method from a concurrent queue can degrade performance by demanding too many system threads. Use a serial queue instead.

This method returns a new image object for efficient display by an image view. Assign the image object created by this method to the [image](../uiimageview/image.md) property of the image view. If [UIImageView](../uiimageview.md) can render the image without decoding, this method returns a valid image without further processing. If the system can’t decode the image, such as an image created from a [CIImage](../../coreimage/ciimage.md), the method returns `nil`.

UIKit doesn’t associate the prepared image with the original, or with any related variants from an asset catalog. If your app environment dynamically changes display traits, listen for changes in the trait environment and prepare new images when the environment changes.

```swift
override func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {
    guard let imageCell = cell as? ImageCell else {
        fatalError("Expected `\(ImageCell.self)` type for reuseIdentifier \(reuseIdentifier). Check the configuration in Main.storyboard.")
    }
    let item = models[indexPath.item]
    if let image = preparedImageCache.object(forKey: item.id), imageCell.itemIdentifier == item.id {
        // Use a cached prepared image.
        imageCell.imageView.image = image
    } else {
        // If the data source didn't prefetch the cell, prepare the image on a serial dispatch queue.
        serialQueue.async { [weak preparedImageCache, placeholderImage] in
            item.loadAsset()
            let preparedImage: UIImage = item.image.preparingForDisplay() ?? placeholderImage
            preparedImageCache?.setObject(preparedImage, forKey: item.id)
            DispatchQueue.main.async {
                if imageCell.itemIdentifier == item.id {
                    imageCell.imageView.image = preparedImage
                }
            }
        }
    }
}
```

## See Also

### Loading images for display

- [prepareForDisplay(completionHandler:)](preparefordisplay%28completionhandler_%29.md): Decodes an image asynchronously and provides a new one for display in views and animations.
- [preparingThumbnail(of:)](preparingthumbnail%28of_%29.md): Returns a new thumbnail image at the specified size.
- [prepareThumbnail(of:completionHandler:)](preparethumbnail%28of_completionhandler_%29.md): Creates a thumbnail image at the specified size asynchronously on a background thread.

# imageByPreparingForDisplay (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Decodes an image synchronously and provides a new one for display in views and animations.

## Declaration

```objectivec
- (UIImage *) imageByPreparingForDisplay;
```

<a id="return-value"></a>

## Return Value

A new version of the image object for display. If the system can’t decode the image, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

The Animation Hitches instrument measures system performance for multiple stages of preparing views for display. It can show you the exact cause of an animation hitch, which appears to the user as an interruption or jump in an animation that should be smooth. If Animation Hitches indicates that decoding an image takes too long and causes hitches, use this method to move the decoding work to the background. For more information on using Instruments, see [Instruments Help](https://help.apple.com/instruments/mac/current/).

Avoid using this method on the main thread unless you previously started preparing an image with [prepareForDisplayWithCompletionHandler:](preparefordisplay%28completionhandler_%29.md). If you’re decoding many images, such as with a collection view, calling this method from a concurrent queue can degrade performance by demanding too many system threads. Use a serial queue instead.

This method returns a new image object for efficient display by an image view. Assign the image object created by this method to the [image](../uiimageview/image.md) property of the image view. If [UIImageView](../uiimageview.md) can render the image without decoding, this method returns a valid image without further processing. If the system can’t decode the image, such as an image created from a [CIImage](../../coreimage/ciimage.md), the method returns `nil`.

UIKit doesn’t associate the prepared image with the original, or with any related variants from an asset catalog. If your app environment dynamically changes display traits, listen for changes in the trait environment and prepare new images when the environment changes.

```swift
override func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {
    guard let imageCell = cell as? ImageCell else {
        fatalError("Expected `\(ImageCell.self)` type for reuseIdentifier \(reuseIdentifier). Check the configuration in Main.storyboard.")
    }
    let item = models[indexPath.item]
    if let image = preparedImageCache.object(forKey: item.id), imageCell.itemIdentifier == item.id {
        // Use a cached prepared image.
        imageCell.imageView.image = image
    } else {
        // If the data source didn't prefetch the cell, prepare the image on a serial dispatch queue.
        serialQueue.async { [weak preparedImageCache, placeholderImage] in
            item.loadAsset()
            let preparedImage: UIImage = item.image.preparingForDisplay() ?? placeholderImage
            preparedImageCache?.setObject(preparedImage, forKey: item.id)
            DispatchQueue.main.async {
                if imageCell.itemIdentifier == item.id {
                    imageCell.imageView.image = preparedImage
                }
            }
        }
    }
}
```

## See Also

### Loading images for display

- [prepareForDisplayWithCompletionHandler:](preparefordisplay%28completionhandler_%29.md): Decodes an image asynchronously and provides a new one for display in views and animations.
- [imageByPreparingThumbnailOfSize:](preparingthumbnail%28of_%29.md): Returns a new thumbnail image at the specified size.
- [prepareThumbnailOfSize:completionHandler:](preparethumbnail%28of_completionhandler_%29.md): Creates a thumbnail image at the specified size asynchronously on a background thread.
