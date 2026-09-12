> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/setimagedata(_:)](https://developer.apple.com/documentation/addressbook/abperson/setimagedata(_:))

# setImageData(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image for this person to the given data.

## Declaration

```swift
func setImageData(_ data: Data!) -> Bool
```

## Parameters

- `data`: The image to be set.

<a id="Discussion"></a>

## Discussion

The `data` argument must be in a QuickTime-compatible format. Pass `nil` to specify that there is no image for this person.

## See Also

### Managing Images

- [cancelLoadingImageData(forTag:)](cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [beginLoadingImageData(for:)](beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [imageData()](imagedata%28%29.md): Returns data that contains a picture of this person.

# setImageData: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image for this person to the given data.

## Declaration

```objectivec
- (BOOL) setImageData:(NSData *) data;
```

## Parameters

- `data`: The image to be set.

<a id="Discussion"></a>

## Discussion

The `data` argument must be in a QuickTime-compatible format. Pass `nil` to specify that there is no image for this person.

## See Also

### Managing Images

- [cancelLoadingImageDataForTag:](cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [beginLoadingImageDataForClient:](beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [imageData](imagedata%28%29.md): Returns data that contains a picture of this person.
