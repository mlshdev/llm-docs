> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityauthorizationcontroller/cancelrequest()](https://developer.apple.com/documentation/passkit/pkidentityauthorizationcontroller/cancelrequest())

# cancelRequest() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Cancels a request in progress.

## Declaration

```swift
func cancelRequest()
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel an in progress request. Cancellation isn’t guarenteed when you call this method, the system might return a document response if it was already in flight.

# cancelRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Cancels a request in progress.

## Declaration

```objectivec
- (void) cancelRequest;
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel an in progress request. Cancellation isn’t guarenteed when you call this method, the system might return a document response if it was already in flight.
