> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingdatarequest/requestsalldatatoendofresource](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingdatarequest/requestsalldatatoendofresource)

# requestsAllDataToEndOfResource (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.

## Declaration

```swift
var requestsAllDataToEndOfResource: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is true, you should disregard the value of requestedLength and incrementally provide as much data, starting from the requested offset, as the resource contains. Continue until all available data was successfully loaded, the request was cancelled, or an error occurs.

## See Also

### Providing data to a request

- [respond(with:)](respond%28with_%29.md): Provides data to the loading request.
- [requestedLength](requestedlength.md): The length, in bytes, of the data requested.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [currentOffset](currentoffset.md): The position within the resource of the next byte.

# requestsAllDataToEndOfResource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates the entire remaining length of the resource from the offest to the end of the resource is being requested.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL requestsAllDataToEndOfResource;
```

<a id="Discussion"></a>

## Discussion

When this property is true, you should disregard the value of requestedLength and incrementally provide as much data, starting from the requested offset, as the resource contains. Continue until all available data was successfully loaded, the request was cancelled, or an error occurs.

## See Also

### Providing data to a request

- [respondWithData:](respond%28with_%29.md): Provides data to the loading request.
- [requestedLength](requestedlength.md): The length, in bytes, of the data requested.
- [requestedOffset](requestedoffset.md): The position within the resource of the first byte requested.
- [currentOffset](currentoffset.md): The position within the resource of the next byte.
