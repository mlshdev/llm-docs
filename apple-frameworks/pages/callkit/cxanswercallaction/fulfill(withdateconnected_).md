> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxanswercallaction/fulfill(withdateconnected:)](https://developer.apple.com/documentation/callkit/cxanswercallaction/fulfill(withdateconnected:))

# fulfill(withDateConnected:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Reports the successful execution of the action at the specified time.

## Declaration

```swift
func fulfill(withDateConnected dateConnected: Date)
```

## Parameters

- `dateConnected`: The time that the call was connected. A call is considered connected when both caller and callee can start communicating.

<a id="Discussion"></a>

## Discussion

Use this method instead of [fulfill()](../cxaction/fulfill%28%29.md) to note a time other than the current time that the call connected.

# fulfillWithDateConnected: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Reports the successful execution of the action at the specified time.

## Declaration

```objectivec
- (void) fulfillWithDateConnected:(NSDate *) dateConnected;
```

## Parameters

- `dateConnected`: The time that the call was connected. A call is considered connected when both caller and callee can start communicating.

<a id="Discussion"></a>

## Discussion

Use this method instead of [fulfill](../cxaction/fulfill%28%29.md) to note a time other than the current time that the call connected.
