> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxendcallaction/fulfill(withdateended:)](https://developer.apple.com/documentation/callkit/cxendcallaction/fulfill(withdateended:))

# fulfill(withDateEnded:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Reports the successful execution of the action at the specified time.

## Declaration

```swift
func fulfill(withDateEnded dateEnded: Date)
```

## Parameters

- `dateEnded`: The time that the call was ended. A call is considered ended when the user disconnects or all other callers disconnect.

<a id="Discussion"></a>

## Discussion

Use this method instead of [fulfill()](../cxaction/fulfill%28%29.md) to note a time other than the current time that the call ended.

# fulfillWithDateEnded: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Reports the successful execution of the action at the specified time.

## Declaration

```objectivec
- (void) fulfillWithDateEnded:(NSDate *) dateEnded;
```

## Parameters

- `dateEnded`: The time that the call was ended. A call is considered ended when the user disconnects or all other callers disconnect.

<a id="Discussion"></a>

## Discussion

Use this method instead of [fulfill](../cxaction/fulfill%28%29.md) to note a time other than the current time that the call ended.
