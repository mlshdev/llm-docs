> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroutedatadelegate-3zbcm/receivedata:completionhandler:

# receiveData:completionHandler:

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Receives data sent from a connected remote application.

## Declaration

```objectivec
- (void) receiveData:(NSData *) data completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `data`: The data received from the remote application.
- `completionHandler`: A completion handler to call after processing the received data. Pass an error if processing fails, or `nil` on success.
