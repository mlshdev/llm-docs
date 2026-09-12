> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abimageclient/consumeimagedata(_:fortag:)](https://developer.apple.com/documentation/addressbook/abimageclient/consumeimagedata(_:fortag:))

# consumeImageData(\_:forTag:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Gets the image data for the given tag that was initiated by an asynchronous fetch.

## Declaration

```swift
func consumeImageData(_ data: Data!, forTag tag: Int)
```

## Parameters

- `data`: A pointer to a data object that will be set to an `NSImage`/QuickTime compatible format, or `nil` if no image could be found.

  You can use this image data with the `initWithData:` method of the `NSImage` class.
- `tag`: The tag returned from a previous call to the `ABPerson` [beginLoadingImageData(for:)](../abperson/beginloadingimagedata%28for_%29.md) method.

<a id="Discussion"></a>

## Discussion

In the case of a multithreaded application, this method is always called on the main thread.

# consumeImageData:forTag: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Gets the image data for the given tag that was initiated by an asynchronous fetch.

## Declaration

```objectivec
- (void) consumeImageData:(NSData *) data forTag:(NSInteger) tag;
```

## Parameters

- `data`: A pointer to a data object that will be set to an `NSImage`/QuickTime compatible format, or `nil` if no image could be found.

  You can use this image data with the `initWithData:` method of the `NSImage` class.
- `tag`: The tag returned from a previous call to the `ABPerson` [beginLoadingImageDataForClient:](../abperson/beginloadingimagedata%28for_%29.md) method.

<a id="Discussion"></a>

## Discussion

In the case of a multithreaded application, this method is always called on the main thread.
