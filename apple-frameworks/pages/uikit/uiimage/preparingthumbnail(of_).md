> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/preparingthumbnail(of:)](https://developer.apple.com/documentation/uikit/uiimage/preparingthumbnail(of:))

# preparingThumbnail(of:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a new thumbnail image at the specified size.

## Declaration

```swift
func preparingThumbnail(of size: CGSize) -> UIImage?
```

## Parameters

- `size`: The desired size of the thumbnail.

<a id="return-value"></a>

## Return Value

A new thumbnail image. Returns `nil` if the original image isn’t backed by a [CGImage](../../coregraphics/cgimage.md) or if the image data is corrupt or malformed.

<a id="Discussion"></a>

## Discussion

When displaying an image in a [UIImageView](../uiimageview.md), you can use the view’s [contentMode](../uiview/contentmode-swift.property.md) property to clip or scale the image automatically. But when the native image size is much larger than the bounds of the view, decoding the full size image creates unnecessary memory overhead. By creating a thumbnail image at a specified size with this method, you avoid the overhead of decoding the image at its full size.

**Swift**

```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellIdentifier, for: indexPath) as? ItemCell else {
        fatalError("Unexpected type for cell. Check configuration.")
    }
        
    let item = items[indexPath.item]
    cell.nameLabel?.text = item.name
    let thumbnail = item.image.preparingThumbnail(of: thumbnailSize)
    cell.thumbnailImageView?.image = thumbnail
    return cell
}
```

**Objective-C**

```objc
- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath {
    UICollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:self.cellIdentifier forIndexPath:indexPath];
    NSAssert([cell isKindOfClass:[ItemCell class]], @"Unexpected type for cell. Check configuration.\n");
    
    Item *item = self.items[indexPath.row];
    ItemCell *itemCell = (ItemCell *)cell;
    itemCell.nameLabel.text = item.name;
    UIImage *thumbnail = [item.image imageByPreparingThumbnailOfSize:self.thumbnailSize];
    itemCell.thumbnailImageView.image = thumbnail;
    return cell;
}
```

## See Also

### Loading images for display

- [preparingForDisplay()](preparingfordisplay%28%29.md): Decodes an image synchronously and provides a new one for display in views and animations.
- [prepareForDisplay(completionHandler:)](preparefordisplay%28completionhandler_%29.md): Decodes an image asynchronously and provides a new one for display in views and animations.
- [prepareThumbnail(of:completionHandler:)](preparethumbnail%28of_completionhandler_%29.md): Creates a thumbnail image at the specified size asynchronously on a background thread.

# imageByPreparingThumbnailOfSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a new thumbnail image at the specified size.

## Declaration

```objectivec
- (UIImage *) imageByPreparingThumbnailOfSize:(CGSize) size;
```

## Parameters

- `size`: The desired size of the thumbnail.

<a id="return-value"></a>

## Return Value

A new thumbnail image. Returns `nil` if the original image isn’t backed by a [CGImageRef](../../coregraphics/cgimage.md) or if the image data is corrupt or malformed.

<a id="Discussion"></a>

## Discussion

When displaying an image in a [UIImageView](../uiimageview.md), you can use the view’s [contentMode](../uiview/contentmode-swift.property.md) property to clip or scale the image automatically. But when the native image size is much larger than the bounds of the view, decoding the full size image creates unnecessary memory overhead. By creating a thumbnail image at a specified size with this method, you avoid the overhead of decoding the image at its full size.

**Swift**

```swift
func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: cellIdentifier, for: indexPath) as? ItemCell else {
        fatalError("Unexpected type for cell. Check configuration.")
    }
        
    let item = items[indexPath.item]
    cell.nameLabel?.text = item.name
    let thumbnail = item.image.preparingThumbnail(of: thumbnailSize)
    cell.thumbnailImageView?.image = thumbnail
    return cell
}
```

**Objective-C**

```objc
- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath {
    UICollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:self.cellIdentifier forIndexPath:indexPath];
    NSAssert([cell isKindOfClass:[ItemCell class]], @"Unexpected type for cell. Check configuration.\n");
    
    Item *item = self.items[indexPath.row];
    ItemCell *itemCell = (ItemCell *)cell;
    itemCell.nameLabel.text = item.name;
    UIImage *thumbnail = [item.image imageByPreparingThumbnailOfSize:self.thumbnailSize];
    itemCell.thumbnailImageView.image = thumbnail;
    return cell;
}
```

## See Also

### Loading images for display

- [imageByPreparingForDisplay](preparingfordisplay%28%29.md): Decodes an image synchronously and provides a new one for display in views and animations.
- [prepareForDisplayWithCompletionHandler:](preparefordisplay%28completionhandler_%29.md): Decodes an image asynchronously and provides a new one for display in views and animations.
- [prepareThumbnailOfSize:completionHandler:](preparethumbnail%28of_completionhandler_%29.md): Creates a thumbnail image at the specified size asynchronously on a background thread.
