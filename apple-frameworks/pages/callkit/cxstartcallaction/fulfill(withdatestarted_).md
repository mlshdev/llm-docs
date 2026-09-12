> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxstartcallaction/fulfill(withdatestarted:)](https://developer.apple.com/documentation/callkit/cxstartcallaction/fulfill(withdatestarted:))

# fulfill(withDateStarted:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Reports the successful execution of the action at the specified time.

## Declaration

```swift
func fulfill(withDateStarted dateStarted: Date)
```

## Parameters

- `dateStarted`: The time that the call was started. A call is considered started when its invitation has been sent to the remote callee.

<a id="Discussion"></a>

## Discussion

Use this method instead of [fulfill()](../cxaction/fulfill%28%29.md) to note a time other than the current time that the call started.

# fulfillWithDateStarted: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Reports the successful execution of the action at the specified time.

## Declaration

```objectivec
- (void) fulfillWithDateStarted:(NSDate *) dateStarted;
```

## Parameters

- `dateStarted`: The time that the call was started. A call is considered started when its invitation has been sent to the remote callee.

<a id="Discussion"></a>

## Discussion

Use this method instead of [fulfill](../cxaction/fulfill%28%29.md) to note a time other than the current time that the call started.
