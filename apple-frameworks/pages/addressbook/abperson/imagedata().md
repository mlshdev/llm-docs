> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/imagedata()](https://developer.apple.com/documentation/addressbook/abperson/imagedata())

# imageData() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns data that contains a picture of this person.

## Declaration

```swift
func imageData() -> Data!
```

<a id="return-value"></a>

## Return Value

Data containing a picture of this person

<a id="Discussion"></a>

## Discussion

This method searches only the local file system and operates synchronously. To perform an asynchronous search or to search over a network, use [beginLoadingImageData(for:)](beginloadingimagedata%28for_%29.md).

The returned data is in a QuickTime-compatible format. To create an image from it, use the `NSImage` method [init(data:)](https://developer.apple.com/documentation/appkit/nsimage/init%28data:%29).

## See Also

### Managing Images

- [cancelLoadingImageData(forTag:)](cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [beginLoadingImageData(for:)](beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [setImageData(\_:)](setimagedata%28__%29.md): Sets the image for this person to the given data.

# imageData (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns data that contains a picture of this person.

## Declaration

```objectivec
- (NSData *) imageData;
```

<a id="return-value"></a>

## Return Value

Data containing a picture of this person

<a id="Discussion"></a>

## Discussion

This method searches only the local file system and operates synchronously. To perform an asynchronous search or to search over a network, use [beginLoadingImageDataForClient:](beginloadingimagedata%28for_%29.md).

The returned data is in a QuickTime-compatible format. To create an image from it, use the `NSImage` method [initWithData:](https://developer.apple.com/documentation/appkit/nsimage/init%28data:%29).

## See Also

### Managing Images

- [cancelLoadingImageDataForTag:](cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [beginLoadingImageDataForClient:](beginloadingimagedata%28for_%29.md): Starts an asynchronous fetch for image data in all locations
- [setImageData:](setimagedata%28__%29.md): Sets the image for this person to the given data.
