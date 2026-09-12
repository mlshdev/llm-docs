> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/incrementalload(from:complete:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/incrementalload(from:complete:))

# incrementalLoad(from:complete:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Loads the current image data into an incrementally-loaded image representation and returns the current status of the image.

## Declaration

```swift
func incrementalLoad(from data: Data, complete: Bool) -> Int
```

## Parameters

- `data`: A data object that contains the image to be loaded.
- `complete`: [true](https://developer.apple.com/documentation/swift/true) if the image is entirely downloaded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

An integer constant indicating the status of the image during the load operation. See the discussion for details.

<a id="Discussion"></a>

## Discussion

After initializing the receiver with [init(forIncrementalLoad:)](init%28forincrementalload_%29.md), you should call this method to incrementally load the image. Call this method each time new data becomes available. Always pass the entire image data buffer in `data`, not just the newest data, because the image decompressor may need the original data in order to backtrack. This method will block until the data is decompressed; it will decompress as much of the image as possible based on the length of the data. The image rep does not retain `data`, so you must ensure that `data` is not released for the duration of this method call. Pass [false](https://developer.apple.com/documentation/swift/false) for `complete` until the entire image is downloaded, at which time you should pass [true](https://developer.apple.com/documentation/swift/true). You should also pass [true](https://developer.apple.com/documentation/swift/true) for `complete` if you have only partially downloaded the data, but cannot finish the download.

This method returns [NSBitmapImageRep.LoadStatus.unknownType](loadstatus/unknowntype.md) if you did not pass enough data to determine the image format; you should continue to invoke this method with additional data.

This method returns [NSBitmapImageRep.LoadStatus.readingHeader](loadstatus/readingheader.md) if it has enough data to determine the image format, but needs more data to determine the size and depth and other characteristics of the image. You should continue to invoke this method with additional data.

This method returns [NSBitmapImageRep.LoadStatus.willNeedAllData](loadstatus/willneedalldata.md) if the image format does not support incremental loading or the Application Kit does not yet implement incremental loading for the image format. You may continue to invoke this method in this case, but until you pass [true](https://developer.apple.com/documentation/swift/true) for `complete`, this method will continue to return [NSBitmapImageRep.LoadStatus.willNeedAllData](loadstatus/willneedalldata.md), and will perform no decompression. Once you pass [true](https://developer.apple.com/documentation/swift/true), the image will be decompressed and one of the final three status messages will be returned.

If the image format does support incremental loading, then once enough data has been read, the image is decompressed from the top down a row at a time. In this case, instead of a status value, this method returns the number of pixel rows that have been decompressed, starting from the top of the image. You can use this information to draw the part of the image that is valid. The rest of the image is filled with opaque white. Note that if the image is progressive (as in a progressive JPEG or 2D interlaced PNG), this method may quickly return the full height of the image, but the image may still be loading, so do not use this return value as an indication of how much of the image remains to be decompressed.

If an error occurred while decompressing, this method returns [NSBitmapImageRep.LoadStatus.invalidData](loadstatus/invaliddata.md). If `complete` is [true](https://developer.apple.com/documentation/swift/true) but not enough data was available for decompression, [NSBitmapImageRep.LoadStatus.unexpectedEOF](loadstatus/unexpectedeof.md) is returned. If enough data has been provided (regardless of the `complete` flag), then [NSBitmapImageRep.LoadStatus.completed](loadstatus/completed.md) is returned. When any of these three status results are returned, this method has adjusted the [NSBitmapImageRep](../nsbitmapimagerep.md) so that [pixelsHigh](../nsimagerep/pixelshigh.md) and [size](../nsimagerep/size.md), as well as the bitmap data, only contains the pixels that are valid, if any.

To cancel decompression, just pass in the existing data or `nil` and [true](https://developer.apple.com/documentation/swift/true) for `complete`. This method stops decompression immediately, adjusts the image size, and returns [NSBitmapImageRep.LoadStatus.unexpectedEOF](loadstatus/unexpectedeof.md). This method returns [NSBitmapImageRep.LoadStatus.completed](loadstatus/completed.md) if you call it after receiving any error results ([NSBitmapImageRep.LoadStatus.invalidData](loadstatus/invaliddata.md) or [NSBitmapImageRep.LoadStatus.unexpectedEOF](loadstatus/unexpectedeof.md)) or if you call it on an [NSBitmapImageRep](../nsbitmapimagerep.md) that was not initialized with [init(forIncrementalLoad:)](init%28forincrementalload_%29.md).

## See Also

### Related Documentation

- [init(forIncrementalLoad:)](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.

### Loading Images Incrementally

- [NSBitmapImageRep.LoadStatus](loadstatus.md): Constants that identify the loading status of the image.

# incrementalLoadFromData:complete: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Loads the current image data into an incrementally-loaded image representation and returns the current status of the image.

## Declaration

```objectivec
- (NSInteger) incrementalLoadFromData:(NSData *) data complete:(BOOL) complete;
```

## Parameters

- `data`: A data object that contains the image to be loaded.
- `complete`: [true](https://developer.apple.com/documentation/swift/true) if the image is entirely downloaded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="return-value"></a>

## Return Value

An integer constant indicating the status of the image during the load operation. See the discussion for details.

<a id="Discussion"></a>

## Discussion

After initializing the receiver with [initForIncrementalLoad](init%28forincrementalload_%29.md), you should call this method to incrementally load the image. Call this method each time new data becomes available. Always pass the entire image data buffer in `data`, not just the newest data, because the image decompressor may need the original data in order to backtrack. This method will block until the data is decompressed; it will decompress as much of the image as possible based on the length of the data. The image rep does not retain `data`, so you must ensure that `data` is not released for the duration of this method call. Pass [false](https://developer.apple.com/documentation/swift/false) for `complete` until the entire image is downloaded, at which time you should pass [true](https://developer.apple.com/documentation/swift/true). You should also pass [true](https://developer.apple.com/documentation/swift/true) for `complete` if you have only partially downloaded the data, but cannot finish the download.

This method returns [NSImageRepLoadStatusUnknownType](loadstatus/unknowntype.md) if you did not pass enough data to determine the image format; you should continue to invoke this method with additional data.

This method returns [NSImageRepLoadStatusReadingHeader](loadstatus/readingheader.md) if it has enough data to determine the image format, but needs more data to determine the size and depth and other characteristics of the image. You should continue to invoke this method with additional data.

This method returns [NSImageRepLoadStatusWillNeedAllData](loadstatus/willneedalldata.md) if the image format does not support incremental loading or the Application Kit does not yet implement incremental loading for the image format. You may continue to invoke this method in this case, but until you pass [true](https://developer.apple.com/documentation/swift/true) for `complete`, this method will continue to return [NSImageRepLoadStatusWillNeedAllData](loadstatus/willneedalldata.md), and will perform no decompression. Once you pass [true](https://developer.apple.com/documentation/swift/true), the image will be decompressed and one of the final three status messages will be returned.

If the image format does support incremental loading, then once enough data has been read, the image is decompressed from the top down a row at a time. In this case, instead of a status value, this method returns the number of pixel rows that have been decompressed, starting from the top of the image. You can use this information to draw the part of the image that is valid. The rest of the image is filled with opaque white. Note that if the image is progressive (as in a progressive JPEG or 2D interlaced PNG), this method may quickly return the full height of the image, but the image may still be loading, so do not use this return value as an indication of how much of the image remains to be decompressed.

If an error occurred while decompressing, this method returns [NSImageRepLoadStatusInvalidData](loadstatus/invaliddata.md). If `complete` is [true](https://developer.apple.com/documentation/swift/true) but not enough data was available for decompression, [NSImageRepLoadStatusUnexpectedEOF](loadstatus/unexpectedeof.md) is returned. If enough data has been provided (regardless of the `complete` flag), then [NSImageRepLoadStatusCompleted](loadstatus/completed.md) is returned. When any of these three status results are returned, this method has adjusted the [NSBitmapImageRep](../nsbitmapimagerep.md) so that [pixelsHigh](../nsimagerep/pixelshigh.md) and [size](../nsimagerep/size.md), as well as the bitmap data, only contains the pixels that are valid, if any.

To cancel decompression, just pass in the existing data or `nil` and [true](https://developer.apple.com/documentation/swift/true) for `complete`. This method stops decompression immediately, adjusts the image size, and returns [NSImageRepLoadStatusUnexpectedEOF](loadstatus/unexpectedeof.md). This method returns [NSImageRepLoadStatusCompleted](loadstatus/completed.md) if you call it after receiving any error results ([NSImageRepLoadStatusInvalidData](loadstatus/invaliddata.md) or [NSImageRepLoadStatusUnexpectedEOF](loadstatus/unexpectedeof.md)) or if you call it on an [NSBitmapImageRep](../nsbitmapimagerep.md) that was not initialized with [initForIncrementalLoad](init%28forincrementalload_%29.md).

## See Also

### Related Documentation

- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.

### Loading Images Incrementally

- [NSImageRepLoadStatus](loadstatus.md): Constants that identify the loading status of the image.
