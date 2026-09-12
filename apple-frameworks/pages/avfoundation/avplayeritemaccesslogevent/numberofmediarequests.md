> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/numberofmediarequests](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/numberofmediarequests)

# numberOfMediaRequests (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The number of media read requests from the server to this client.

## Declaration

```swift
var numberOfMediaRequests: Int { get }
```

<a id="Discussion"></a>

## Discussion

For HTTP live streaming, this property contains the count of media requests downloaded from the server. For progressive-style HTTP media downloads, it contains a count of HTTP `GET` (byte-range) requests for the resource.

The property corresponds to “sc-count”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting server-related log events

- [uri](uri.md): The URI of the playback item.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](numberofserveraddresschanges.md): A count of changes to the server address over the last uninterrupted period of playback.
- [mediaRequestsWWAN](mediarequestswwan.md): The number of network read requests over a WWAN.
- [transferDuration](transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](numberofbytestransferred.md): The accumulated number of bytes transferred by the item.

# numberOfMediaRequests (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The number of media read requests from the server to this client.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfMediaRequests;
```

<a id="Discussion"></a>

## Discussion

For HTTP live streaming, this property contains the count of media requests downloaded from the server. For progressive-style HTTP media downloads, it contains a count of HTTP `GET` (byte-range) requests for the resource.

The property corresponds to “sc-count”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting server-related log events

- [URI](uri.md): The URI of the playback item.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](numberofserveraddresschanges.md): A count of changes to the server address over the last uninterrupted period of playback.
- [mediaRequestsWWAN](mediarequestswwan.md): The number of network read requests over a WWAN.
- [transferDuration](transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
