> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingdatarequest/currentoffset](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/currentoffset)

# currentOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The position within the resource of the next byte.

## Declaration

```swift
var currentOffset: Int64 { get }
```

<a id="Discussion"></a>

## Discussion

When incrementally loading data you should begin loading at this offset, returning the data by invoking the [respond(with:)](respond%28with_%29.md) method. Bytes previous to this value have already been provided.

## See Also

### Providing data to a request

- [respond(with:)](respond%28with_%29.md): Provides data to the loading request.
- [requestedLength](requestedlength.md): The length, in bytes, of the data requested.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [requestsAllDataToEndOfResource](requestsalldatatoendofresource.md): A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.

# currentOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The position within the resource of the next byte.

## Declaration

```objectivec
@property (nonatomic, readonly) long long currentOffset;
```

<a id="Discussion"></a>

## Discussion

When incrementally loading data you should begin loading at this offset, returning the data by invoking the [respondWithData:](respond%28with_%29.md) method. Bytes previous to this value have already been provided.

## See Also

### Providing data to a request

- [respondWithData:](respond%28with_%29.md): Provides data to the loading request.
- [requestedLength](requestedlength.md): The length, in bytes, of the data requested.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [requestsAllDataToEndOfResource](requestsalldatatoendofresource.md): A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.
