> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanagerresult/cancel()](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanagerresult/cancel())

# cancel() (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Cancels an in-progress request for subscriber account information.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Your app uses this method to notify a [VSAccountManager](../vsaccountmanager.md) instance to cancel the current request for subscriber account information. No guarantees are made that the cancellation request will succeed or finish immediately.

# cancel (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

Cancels an in-progress request for subscriber account information.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

Your app uses this method to notify a [VSAccountManager](../vsaccountmanager.md) instance to cancel the current request for subscriber account information. No guarantees are made that the cancellation request will succeed or finish immediately.
