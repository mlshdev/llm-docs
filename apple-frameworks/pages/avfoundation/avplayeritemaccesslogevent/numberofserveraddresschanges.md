> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/numberofserveraddresschanges](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/numberofserveraddresschanges)

# numberOfServerAddressChanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A count of changes to the server address over the last uninterrupted period of playback.

## Declaration

```swift
var numberOfServerAddressChanges: Int { get }
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “s-ip-changes”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting server-related log events

- [uri](uri.md): The URI of the playback item.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [mediaRequestsWWAN](mediarequestswwan.md): The number of network read requests over a WWAN.
- [transferDuration](transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
- [numberOfMediaRequests](numberofmediarequests.md): The number of media read requests from the server to this client.

# numberOfServerAddressChanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A count of changes to the server address over the last uninterrupted period of playback.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfServerAddressChanges;
```

<a id="Discussion"></a>

## Discussion

The property corresponds to “s-ip-changes”.

The value of this property is negative if unknown.

This property is not compatible with key-value observing.

## See Also

### Getting server-related log events

- [URI](uri.md): The URI of the playback item.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [mediaRequestsWWAN](mediarequestswwan.md): The number of network read requests over a WWAN.
- [transferDuration](transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
- [numberOfMediaRequests](numberofmediarequests.md): The number of media read requests from the server to this client.
