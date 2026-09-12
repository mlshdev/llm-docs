> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/cancelloadingimagedata(fortag:)](https://developer.apple.com/documentation/addressbook/abperson/cancelloadingimagedata(fortag:))

# cancelLoadingImageData(forTag:) (Swift)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Cancels an asynchronous fetch of the images for a given tag.

## Declaration

```swift
class func cancelLoadingImageData(forTag tag: Int)
```

## Parameters

- `tag`: The tag of the asynchronous fetch to be canceled.

<a id="Discussion"></a>

## Discussion

The tag is returned from the previous call to the [beginLoadingImageData(for:)](beginloadingimagedata%28for_%29.md) method that started the asynchronous fetch.

## See Also

### Managing Images

- [beginLoadingImageData(for:)](beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [imageData()](imagedata%28%29.md): Returns data that contains a picture of this person.
- [setImageData(\_:)](setimagedata%28__%29.md): Sets the image for this person to the given data.

# cancelLoadingImageDataForTag: (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Cancels an asynchronous fetch of the images for a given tag.

## Declaration

```objectivec
+ (void) cancelLoadingImageDataForTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag of the asynchronous fetch to be canceled.

<a id="Discussion"></a>

## Discussion

The tag is returned from the previous call to the [beginLoadingImageDataForClient:](beginloadingimagedata%28for_%29.md) method that started the asynchronous fetch.

## See Also

### Managing Images

- [beginLoadingImageDataForClient:](beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [imageData](imagedata%28%29.md): Returns data that contains a picture of this person.
- [setImageData:](setimagedata%28__%29.md): Sets the image for this person to the given data.
