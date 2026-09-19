> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carkey/remotekeylessentryconfigurableenduringaction/enduringexecutionrequest/stop()

# stop()

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Sends a request to stop a previously started action.

## Declaration

```swift
final func stop() throws
```

<a id="discussion"></a>

## Discussion

This method sends the cancellation request asynchronously to the vehicle. If you call the results method again, the method delivers the results of the cancellation request.
