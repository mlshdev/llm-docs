> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingdatarequest/requestedlength](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/requestedlength)

# requestedLength (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The length, in bytes, of the data requested.

## Declaration

```swift
var requestedLength: Int { get }
```

<a id="Discussion"></a>

## Discussion

If the content length of the resource is unknown, the sum of the [requestedLength](requestedlength.md) and [requestedOffset](requestedoffset.md) properties may be greater than the actual content length. When this situation occurs, an application must attempt to provide as much of the requested data beginning at the [requestedOffset](requestedoffset.md) property as the resource contains. The application must then invoke either the [AVAssetResourceLoadingRequest](../avassetresourceloadingrequest.md) instance’s [finishLoading()](../avassetresourceloadingrequest/finishloading%28%29.md) method upon success, or the [finishLoading(with:)](../avassetresourceloadingrequest/finishloading%28with_%29.md) method if an error is encountered during the loading.

## See Also

### Providing data to a request

- [respond(with:)](respond%28with_%29.md): Provides data to the loading request.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [currentOffset](currentoffset.md): The position within the resource of the next byte.
- [requestsAllDataToEndOfResource](requestsalldatatoendofresource.md): A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.

# requestedLength (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The length, in bytes, of the data requested.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger requestedLength;
```

<a id="Discussion"></a>

## Discussion

If the content length of the resource is unknown, the sum of the [requestedLength](requestedlength.md) and [requestedOffset](requestedoffset.md) properties may be greater than the actual content length. When this situation occurs, an application must attempt to provide as much of the requested data beginning at the [requestedOffset](requestedoffset.md) property as the resource contains. The application must then invoke either the [AVAssetResourceLoadingRequest](../avassetresourceloadingrequest.md) instance’s [finishLoading](../avassetresourceloadingrequest/finishloading%28%29.md) method upon success, or the [finishLoadingWithError:](../avassetresourceloadingrequest/finishloading%28with_%29.md) method if an error is encountered during the loading.

## See Also

### Providing data to a request

- [respondWithData:](respond%28with_%29.md): Provides data to the loading request.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [currentOffset](currentoffset.md): The position within the resource of the next byte.
- [requestsAllDataToEndOfResource](requestsalldatatoendofresource.md): A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.
