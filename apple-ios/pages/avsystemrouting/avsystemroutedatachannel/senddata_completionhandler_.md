> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutedatachannel/senddata:completionhandler:](https://developer.apple.com/documentation/avsystemrouting/avsystemroutedatachannel/senddata:completionhandler:)

# sendData:completionHandler:

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Sends data to a remote application.

## Declaration

```objectivec
- (void) sendData:(NSData *) data completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `data`: The data to send to the remote application.
- `completionHandler`: A completion handler called when the send operation completes. The handler receives an error if the send failed, or `nil` on success.

<a id="discussion"></a>

## Discussion

Calling this function again before the completion handler of a previous send is called is safe; multiple send operations can be in-flight concurrently.
