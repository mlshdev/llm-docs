> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/beginloadingimagedata(for:)](https://developer.apple.com/documentation/addressbook/abperson/beginloadingimagedata(for:))

# beginLoadingImageData(for:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Starts an asynchronous fetch for image data in all locations

## Declaration

```swift
func beginLoadingImageData(for client: (any ABImageClient)!) -> Int
```

## Parameters

- `client`: The object to be notified when the image finishes loading.

<a id="return-value"></a>

## Return Value

A nonzero tag for tracking. This tag is used by the [cancelLoadingImageData(forTag:)](cancelloadingimagedata%28fortag_%29.md) method to cancel a fetch operation.

<a id="Discussion"></a>

## Discussion

The `client` object should conform to the `ABImageClient` protocol. A [consumeImageData(\_:forTag:)](../abimageclient/consumeimagedata%28__fortag_%29.md) message is sent to `client` when the fetch is done. Use the [cancelLoadingImageData(forTag:)](cancelloadingimagedata%28fortag_%29.md) method if you need to cancel an asynchronous fetch.

## See Also

### Managing Images

- [cancelLoadingImageData(forTag:)](cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [imageData()](imagedata%28%29.md): Returns data that contains a picture of this person.
- [setImageData(\_:)](setimagedata%28__%29.md): Sets the image for this person to the given data.

# beginLoadingImageDataForClient: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Starts an asynchronous fetch for image data in all locations

## Declaration

```objectivec
- (NSInteger) beginLoadingImageDataForClient:(id<ABImageClient>) client;
```

## Parameters

- `client`: The object to be notified when the image finishes loading.

<a id="return-value"></a>

## Return Value

A nonzero tag for tracking. This tag is used by the [cancelLoadingImageDataForTag:](cancelloadingimagedata%28fortag_%29.md) method to cancel a fetch operation.

<a id="Discussion"></a>

## Discussion

The `client` object should conform to the `ABImageClient` protocol. A [consumeImageData:forTag:](../abimageclient/consumeimagedata%28__fortag_%29.md) message is sent to `client` when the fetch is done. Use the [cancelLoadingImageDataForTag:](cancelloadingimagedata%28fortag_%29.md) method if you need to cancel an asynchronous fetch.

## See Also

### Managing Images

- [cancelLoadingImageDataForTag:](cancelloadingimagedata%28fortag_%29.md): Cancels an asynchronous fetch of the images for a given tag.
- [imageData](imagedata%28%29.md): Returns data that contains a picture of this person.
- [setImageData:](setimagedata%28__%29.md): Sets the image for this person to the given data.
