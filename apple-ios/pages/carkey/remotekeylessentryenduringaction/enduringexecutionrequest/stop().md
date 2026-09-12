> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/remotekeylessentryenduringaction/enduringexecutionrequest/stop()](https://developer.apple.com/documentation/carkey/remotekeylessentryenduringaction/enduringexecutionrequest/stop())

# stop()

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.3+ (deprecated in 15.0) · watchOS 9.0+ (deprecated in 11.0)

Sends a request to stop a previously started action.

> Use [perform(\_:continuationStrategy:)](../../carkeyremotecontrolsession/perform%28__continuationstrategy_%29.md) instead.

## Declaration

```swift
final func stop() throws
```

<a id="discussion"></a>

## Discussion

This method sends the cancellation request asynchronously to the vehicle. If you call the results method again, the method delivers the results of the cancellation request.
