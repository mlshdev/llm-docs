> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslogevent/mediarequestswwan](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/mediarequestswwan)

# mediaRequestsWWAN (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The number of network read requests over a WWAN.

## Declaration

```swift
var mediaRequestsWWAN: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property is negative if unknown.

Corresponds to “sc-wwan-count”.

This property is not compatible with key-value observing.

## See Also

### Getting server-related log events

- [uri](uri.md): The URI of the playback item.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](numberofserveraddresschanges.md): A count of changes to the server address over the last uninterrupted period of playback.
- [transferDuration](transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
- [numberOfMediaRequests](numberofmediarequests.md): The number of media read requests from the server to this client.

# mediaRequestsWWAN (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The number of network read requests over a WWAN.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger mediaRequestsWWAN;
```

<a id="Discussion"></a>

## Discussion

The value of the property is negative if unknown.

Corresponds to “sc-wwan-count”.

This property is not compatible with key-value observing.

## See Also

### Getting server-related log events

- [URI](uri.md): The URI of the playback item.
- [serverAddress](serveraddress.md): The IP address of the server that was the source of the last delivered media segment.
- [numberOfServerAddressChanges](numberofserveraddresschanges.md): A count of changes to the server address over the last uninterrupted period of playback.
- [transferDuration](transferduration.md): The accumulated duration, in seconds, of active network transfer of bytes.
- [numberOfBytesTransferred](numberofbytestransferred.md): The accumulated number of bytes transferred by the item.
- [numberOfMediaRequests](numberofmediarequests.md): The number of media read requests from the server to this client.
