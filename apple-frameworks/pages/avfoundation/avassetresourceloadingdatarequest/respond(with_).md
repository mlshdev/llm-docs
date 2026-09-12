> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingdatarequest/respond(with:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/respond(with:))

# respond(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Provides data to the loading request.

## Declaration

```swift
func respond(with data: Data)
```

## Parameters

- `data`: An instance of NSData containing some or all of the requested bytes.

<a id="Discussion"></a>

## Discussion

This method may be invoked multiple times on the same instance of `AVAssetResourceLoadingDataRequest` to provide the full range of requested data incrementally. Upon each invocation, the value of the [currentOffset](currentoffset.md) property is updated to match the amount of data provided.

The system can retain the data you provide and keep processing it for an indefinite period after this method returns. Don’t modify that data after you share its contents. If you manage your own memory pool, create the data with `init(bytesNoCopy:count:deallocator:)`, and its deallocator signals the earliest moment when reusing the memory is safe.

## See Also

### Providing data to a request

- [requestedLength](requestedlength.md): The length, in bytes, of the data requested.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [currentOffset](currentoffset.md): The position within the resource of the next byte.
- [requestsAllDataToEndOfResource](requestsalldatatoendofresource.md): A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.

# respondWithData: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Provides data to the loading request.

## Declaration

```objectivec
- (void) respondWithData:(NSData *) data;
```

## Parameters

- `data`: An instance of NSData containing some or all of the requested bytes.

<a id="Discussion"></a>

## Discussion

This method may be invoked multiple times on the same instance of `AVAssetResourceLoadingDataRequest` to provide the full range of requested data incrementally. Upon each invocation, the value of the [currentOffset](currentoffset.md) property is updated to match the amount of data provided.

The system can retain the data you provide and keep processing it for an indefinite period after this method returns. Don’t modify that data after you share its contents. If you manage your own memory pool, create the data with `init(bytesNoCopy:count:deallocator:)`, and its deallocator signals the earliest moment when reusing the memory is safe.

## See Also

### Providing data to a request

- [requestedLength](requestedlength.md): The length, in bytes, of the data requested.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [currentOffset](currentoffset.md): The position within the resource of the next byte.
- [requestsAllDataToEndOfResource](requestsalldatatoendofresource.md): A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.
